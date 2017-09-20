[![Build Status](https://travis-ci.org/telemark/micro-sms-hook.svg?branch=master)](https://travis-ci.org/telemark/micro-sms-hook)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-sms-hook.svg)](https://greenkeeper.io/)

# micro-sms-hook

micro-sms-hook listens to incoming HTTP POST-requests from twilio and triggers some action.

## Create a token
Create a secret token with ``openssl``, ``uuidgen`` or something else. Don't use any slashes since token is going to be used in the URL.

```sh
export TOKEN=$(uuidgen)
echo $TOKEN
```

## Twilio

Twilio POST's

```js
{
  AccountSid: 'removed',
  ApiVersion: '2010-04-01',
  Body: 'K',
  From: '+4741514965',
  FromCity: '',
  FromCountry: 'NO',
  FromState: '',
  FromZip: '',
  MessageSid: 'SM70c1ff5cb85c33c40e37acb982a494e2',
  NumMedia: '0',
  NumSegments: '1',
  SmsMessageSid: 'SM70c1ff5cb85c33c40e37acb982a494e2',
  SmsSid: 'SM70c1ff5cb85c33c40e37acb982a494e2',
  SmsStatus: 'received',
  To: '+4759443773',
  ToCity: '',
  ToCountry: 'NO',
  ToState: '',
  ToZip: ''
}
```

## License

[MIT](LICENSE)

![Robohash image of micro-sms-hook](https://robots.kebabstudios.party/micro-sms-hook.png "Robohash image of micro-sms-hook")
