export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const webhookUrl = "https://discord.com/api/webhooks/1368739308298567740/uDH5RaSwyPlXUp3PSfFIxpYau-g4Rc84du7WWjbXSm_Q_aPpzMhrautOorvA47HQI6T7";

  const payload = {
    content: `New visitor IP: \\`${ip}\\``,
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  res.status(200).send("Logged");
}
