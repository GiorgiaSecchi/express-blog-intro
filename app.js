// console.log("OK");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.json(text); //   res.type("json").send(text)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
