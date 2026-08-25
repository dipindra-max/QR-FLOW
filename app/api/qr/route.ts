const requestUrl = new URL(req.url);
const base = `${requestUrl.protocol}//${requestUrl.host}`;
const redirectUrl = `${base}/r/${qr.slug}`;

const svg = await QRCode.toString(redirectUrl, {
  type: "svg",
  margin: 2,
  width: 320,
});

return NextResponse.json({
  id: qr.id,
  slug: qr.slug,
  url: redirectUrl,
  svg,
});
