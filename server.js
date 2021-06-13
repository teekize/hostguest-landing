const express = require("express");
const {
  validate,
  HostSchema,
  ValidationError,
  pattern,
} = require("./validators");
const HostModel = require("./Host");
var cors = require("cors");

const app = express();
// {
//     origin: "http://localhost:3000",
// //   }
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.status = 200;
  res.json({
    message: "home route api",
    origin: req.hostname,
    ipAddress: req.ip,
  });
});

app.post("/api/host", validate({ body: HostSchema }), (req, res, next) => {
  let data = req.body;

  if (data.phoneNumber.match(pattern)) {
    hostdata = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
    };

    HostModel.create(hostdata, (err, result) => {
      if (err) {
        return next(err);
      } else {
        res.status(201).json(result);
      }
    });
  } else {
    const err = new Error("phoneNumber is not in the Kenyan format");
    err.status = 400;
    return next(err);
  }
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    // At this point you can execute your error handling code

    res.status(400).json({
      error: err.validationErrors.body,
    });
    next();
  } else {
    res.status(400).json({
      error: [
        {
          message: err.message,
        },
      ],
      status: 400,
    });
  }
});

app.listen(process.env.PORT || 8080, () => {
  const mongoose = require("mongoose");
  const mongoDB =
    "mongodb+srv://elvis:13845teeka@cluster0.dl5c2.mongodb.net/HostGuest?retryWrites=true&w=majority";
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  console.log("app inalisten kwa port  http://127.0.0.1:3000");
});
