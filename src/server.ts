import express from "express";

const port = 3000;
const app = express();

app.get("/movies", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`servidor em execução na porta ${port}`);
});
