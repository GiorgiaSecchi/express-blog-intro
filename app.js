//# ARRAY 5 POST
const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "La ricetta",
    immagine: "",
    tags: ["cucina", "ricetta", "ciambellone"],
  },

  {
    titolo: "Cracker di barbabietola",
    contenuto: "La ricetta",
    immagine: "",
    tags: ["cucina", "ricetta", "barbabietola"],
  },

  {
    titolo: "Pane fritto dolce",
    contenuto: "La ricetta",
    immagine: "",
    tags: ["cucina", "ricetta", "pane"],
  },

  {
    titolo: "Pasta alla barbabietola",
    contenuto: "La ricetta",
    immagine: "",
    tags: ["cucina", "ricetta", "pasta"],
  },

  {
    titolo: "Torta paesana",
    contenuto: "La ricetta",
    immagine: "",
    tags: ["cucina", "ricetta", "torta"],
  },
];

//*********************************************** */

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.send(text);
  //   res.type("json").send(text) --> res.json(text)
});

app.get("/bacheca", (req, res) => {
  res.json({
    posts: posts,
    count: posts.length,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
