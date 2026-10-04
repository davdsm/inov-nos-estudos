/**
 * POST /api/contact
 * Envia email de pedido de aula experimental via Resend (mesma stack da DAVDSM).
 * Env: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM
 */
import { Resend } from 'resend'

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function adminEmailHtml({ name, phone, ano, disciplina }) {
  return `<!DOCTYPE html>
<html lang="pt">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#FBF9F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0A2A57;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#FBF9F6;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;">
        <tr><td style="padding:28px 32px 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#0B7C92;font-weight:700;">Novo pedido</td></tr>
        <tr><td style="padding:0 32px 24px;font-size:26px;font-weight:800;letter-spacing:-0.02em;line-height:1.15;color:#0A2A57;font-family:'Baloo 2',Trebuchet MS,sans-serif;">Pedido de aula experimental</td></tr>
        <tr><td style="padding:0 32px 28px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #E2E8F0;">
            <tr><td style="padding:18px 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#61708A;">Nome</td></tr>
            <tr><td style="padding:0 0 14px;font-size:16px;color:#0A2A57;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#61708A;">Telefone</td></tr>
            <tr><td style="padding:0 0 14px;font-size:16px;"><a href="tel:${escapeHtml(phone.replace(/\s/g, ''))}" style="color:#0B7C92;text-decoration:none;font-weight:700;">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding:8px 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#61708A;">Ano</td></tr>
            <tr><td style="padding:0 0 14px;font-size:16px;color:#0A2A57;">${escapeHtml(ano || '—')}</td></tr>
            <tr><td style="padding:8px 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#61708A;">Disciplina</td></tr>
            <tr><td style="padding:0 0 8px;font-size:16px;color:#0A2A57;">${escapeHtml(disciplina || '—')}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 28px;font-size:13px;color:#61708A;">Liga para este número para combinar a aula experimental.</td></tr>
      </table>
      <p style="margin:20px 0 0;font-size:12px;color:#8FA8C6;">Inov@ nos Estudos · Gemunde</p>
    </td></tr>
  </table>
</body>
</html>`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toAdmin = process.env.CONTACT_TO || 'inovanosestudos@gmail.com'
  const from = process.env.CONTACT_FROM || 'Inova nos Estudos <geral@davdsm.pt>'

  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' })
    }
  }

  const name = String(body?.name || '').trim()
  const phone = String(body?.phone || '').trim()
  const ano = String(body?.ano || '').trim()
  const disciplina = String(body?.disciplina || '').trim()

  if (!name || name.length > 120) {
    return res.status(400).json({ error: 'Invalid name' })
  }
  const digits = phone.replace(/\D/g, '')
  if (!phone || digits.length < 9 || phone.length > 40) {
    return res.status(400).json({ error: 'Invalid phone' })
  }
  if (ano.length > 40 || disciplina.length > 80) {
    return res.status(400).json({ error: 'Invalid fields' })
  }

  const resend = new Resend(apiKey)
  const text = `Pedido de aula experimental\n\nNome: ${name}\nTelefone: ${phone}\nAno: ${ano || '—'}\nDisciplina: ${disciplina || '—'}\n`

  try {
    const result = await resend.emails.send({
      from,
      to: [toAdmin],
      subject: `Pedido de aula experimental — ${name}`,
      html: adminEmailHtml({ name, phone, ano, disciplina }),
      text,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
