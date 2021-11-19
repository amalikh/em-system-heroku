const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const { Op } = Sequelize;
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const userRoutes = require('./routes/user');
const empRoutes = require('./routes/emp');
const attendanceRoutes = require('./routes/atten');
const leaveRoutes = require('./routes/leave');
const payrollRoutes = require('./routes/payrollRoutes');



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
// app.get("/image.png", (req, res) => {
//     res.sendFile(path.join(__dirname, "./uploads/image.png"));
//   });
app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server started (http://localhost:${PORT}/) !`);
});