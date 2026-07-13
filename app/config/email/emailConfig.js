export const emailConfig = {
  provider: process.env.EMAIL_PROVIDER || 'resend',
  apiKey: process.env.RESEND_API_KEY || '',
  from: process.env.CONTACT_FROM_EMAIL || '',
  to: process.env.CONTACT_TO_EMAIL || 'ajaykumarma007@gmail.com',
}

export function hasEmailProviderConfig() {
  return Boolean(emailConfig.apiKey && emailConfig.from && emailConfig.to)
}
