var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const nodemailer = require('nodemailer')
var cors = require('cors')
var helmet = require('helmet')

var app = express();
app.use(helmet())

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
 });

 transporter.verify((err, success) => {
    err ? console.log(err) : console.log('server is ready to take messages')
 })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOption ={
  origin: process.env.CORS_ORIGIN,
  methods:'POST,',
  optionsSuccessStatus: 200
}

app.use(cors(corsOption))

app.post("/", function (req, res) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.name} via your portfolio`,
    text: req.body.message,
    html: `
            <div>
              <div>name: <h2>${req.body.name}</h2></div>
              <p><strong>email:</strong> ${req.body.email}</p>
              <p><strong>message:</strong> ${req.body.message}</p>
            </div>   
          `
  };
 
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      return res.json({status: "Error"})
    } else {
      console.log("Email sent successfully");
      return res.json({ status: "Email sent" });
    }
  });

  console.log(req.body)

 });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
