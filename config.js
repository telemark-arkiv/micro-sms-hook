module.exports = {
  TOKEN: process.env.SMS_TOKEN || 'abc123',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'micro-sms-webhook',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
