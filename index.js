const { translate } = require('google-translate-api-browser');
const express = require('express');

const app = express();

app.get('/:en/:message', (req, res) => {
  const message = req.params.message;
  const lang = req.params.en;
  console.log(lang);
  translate(message, { to: lang })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
      console.error(err);
    });
});

const port = process.env.PORT || 2000;
app.listen(port, console.log('Listening on port', port));
