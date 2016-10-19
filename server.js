let express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  user = {
    login: '1234',
    password: 'pass'
  },
  response = {
    login: true,
    password: true,
    Auth: 'Logged'
  };

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  if(req.body.login === `${user.login}`) {
    response.login = true;
  } else {
    response.login = false;
    response.Auth = 'Denied';
    return res.status(404).send(response);
  }

  if(req.body.password === `${user.password}`) {
    response.password = true;
  } else {
    response.password = false;
    response.Auth = 'Denied';
    return res.status(404).send(response);
  }
  response.Language = 'EN';
  response.Auth = 'Logged';
  return res.status(200).send(response);
});

app.all('*', (req, res) => {
  res.redirect('/');
})

app.listen(3001, function () {
  console.log('GeekTeam React test listening on port 3001!');
});
