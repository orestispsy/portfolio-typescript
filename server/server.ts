import path from "path";
import express from "express";

const app = express();

app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.set("port", process.env.PORT || 3001);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

let server: any = app.listen(app.get("port"), function () {
  console.log("🟢 Portfolio Project Listening Port:", server.address().port);
});
