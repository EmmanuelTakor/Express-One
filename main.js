const express = require("express");
const app = express();

app.listen(3000)
// app.get('/google',(req,res)=>{
//     res.send('https://www.youtube.com/');
// })
// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });
// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

// -----------------------------------------------------

// app.get("/google", (req, res) => {
//   res.redirect("https://www.google.com/");
// });
// app.get("/back", (req, res) => {
//   res.redirect("..");
// });
// app.get("/landing.html", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

app.get("/uppercase/:theValue", (req, res) =>
  res.send('Hello ' + req.params.theValue.toUpperCase())
);