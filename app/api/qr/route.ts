import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, destination, type } = await req.json();
    if (!name || !destination) return NextResponse.json({error:"Name and destination are required."},{status:400});
    const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${Math.random().toString(36).slice(2,7)}`;
    const qr = await prisma.qrCode.create({data:{name, destination, type:type||"url", slug}});
    const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const svg = await QRCode.toString(`${base}/r/${qr.slug}`, {type:"svg", margin:2, width:320});
    return NextResponse.json({id:qr.id, slug:qr.slug, url:`${base}/r/${qr.slug}`, svg});
  } catch (e) { return NextResponse.json({error:"Database is not configured yet. Add DATABASE_URL and run Prisma."},{status:500}); }
}