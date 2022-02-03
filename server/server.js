var path = require("path");
var express = require("express");

var app = express();

app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.set("port", process.env.PORT || 3001);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

var server = app.listen(app.get("port"), function () {
  console.log("🟢 Portfolio Project Listening Port:", server.address().port);
});
