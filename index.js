const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { text, send } = require('micro')
const { parse } = require('url')
const qs = require('query-string')
const { TOKEN } = require('./config')
const logger = require('./lib/logger')

module.exports = async (req, res) => {
  const { pathname } = await parse(req.url, false) // gets url path
  const payload = ['POST', 'PUT'].includes(req.method) ? await text(req) : {}

  if (pathname === `/${TOKEN}`) {
    logger('info', `Requesting ${pathname}`)

    const smsData = qs.parse(payload)
    logger('info', JSON.stringify(smsData))

    const receivedText = smsData.Body.toLowerCase().replace(' ', '')
    if (receivedText === 'ja') {
      console.log(`${smsData.To} GODTATT`)
    }

    send(res, 204) // sends 'no content' to client
  } else {
    res.setHeader('Content-Type', 'text/html')
    const readme = readFileSync('./README.md', 'utf-8')
    send(res, 200, md.render(readme))
  }
}
