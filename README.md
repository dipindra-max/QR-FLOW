# QRFlow

QRFlow is an original full-stack dynamic QR platform starter.

## Included
- Modern responsive landing page
- Dashboard
- Dynamic QR creation
- URL/text/email/phone/Wi-Fi/contact type selector
- PostgreSQL + Prisma schema
- Scan redirect and event tracking
- QR SVG preview
- Pricing section
- Render-ready Next.js configuration

## Local setup
1. Copy `.env.example` to `.env`
2. Put your PostgreSQL connection string in `DATABASE_URL`
3. Run `npm install`
4. Run `npx prisma db push`
5. Run `npm run dev`

## Render
Create a PostgreSQL database, then a Node web service connected to this repository.
Build command:
`npm install && npx prisma generate && npx prisma db push && npm run build`
Start command:
`npm start`

Set:
`DATABASE_URL`
`NEXT_PUBLIC_APP_URL` to your live Render URL.

Do not commit `.env`.

## Next production upgrades
Authentication, billing, file uploads, custom domains, team roles, advanced GeoIP analytics, API keys, rate limiting, CSV exports, and background jobs should be added before a public commercial launch.
