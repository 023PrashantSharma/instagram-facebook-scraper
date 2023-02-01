var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParserErrorHandler = require('express-body-parser-error-handler');

var app = express();
var corsOptions = {
  origin: 'https://tejonlinematka.com/',
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}
require('dotenv').config({ path: path.join(__dirname, '.env') });

/**
 * @mongodb connection
 */
var mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //  useNewUrlParser: true,
      //  useUnifiedTopology: true,
    })
    console.log("Mongodb Connected...")
  } catch (err) {
    console.log(err)
  }
}
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParserErrorHandler());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cors(), indexRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (req.accepts('json')) {
    res.json({
      status: 404,
      message: 'This Url Not found',
    });
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
