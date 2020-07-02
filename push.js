const fetch = require('node-fetch');

const TOKEN = process.argv[2];

const message = {
  to: TOKEN,
  sound: 'default',
  title: `This is a title: ${new Date()}`,
  body: 'MESSAGE...',
  priority: 'high',
  data: { foo: 'bar' },
};

fetch('https://exp.host/--/api/v2/push/send', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Accept-encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
})
  .then(response => response.json())
  .then(console.log)
  .catch(console.error);
