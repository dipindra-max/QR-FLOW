import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req:Request,{params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const qr=await prisma.qrCode.findUnique({where:{slug}});
  if(!qr || !qr.active) return new NextResponse("QR code not found",{status:404});
  const ua=req.headers.get("user-agent")||"";
  const device=/mobile/i.test(ua)?"Mobile":/tablet/i.test(ua)?"Tablet":"Desktop";
  await prisma.$transaction([
    prisma.qrCode.update({where:{id:qr.id},data:{scans:{increment:1}}}),
    prisma.scanEvent.create({data:{qrId:qr.id,device,browser:ua.slice(0,80)}})
  ]);
  const target=qr.destination.match(/^https?:\/\//)?qr.destination:`https://${qr.destination}`;
  return NextResponse.redirect(target);
}