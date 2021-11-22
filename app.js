const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const { Op } = Sequelize;
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const userRoutes = require('./routes/user');
const empRoutes = require('./routes/emp');
const attendanceRoutes = require('./routes/atten');
const leaveRoutes = require('./routes/leave');
const payrollRoutes = require('./routes/payrollRoutes');
// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }
// app.use(requireHTTPS);


const app = express();
// var corsOptions = {
//     origin: "http://localhost:4200"
// };

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-Width, Content-Type'
    //     );

    next();
  });

// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads',express.static('./uploads'));
app.use('/user', userRoutes);
app.use('/employee', empRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/leave', leaveRoutes);
app.use('/payroll', payrollRoutes);


const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.send("Welcom world...");
});

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server started (http://localhost:${PORT}/) !`);
});