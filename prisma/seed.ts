import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.qrCode.upsert({
    where: { slug: "welcome" },
    update: {},
    create: {
      name: "QRFlow Welcome",
      slug: "welcome",
      type: "url",
      destination: "https://example.com",
      scans: 1284
    }
  });
}

main().finally(() => prisma.$disconnect());