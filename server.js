import express from "express";
const app = express();
import bodyParser from "body-parser";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // This line is used to parse JSON data in the request body.
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  console.log({ username: req.body.username });
  res.send(`Login Success`);
});

app.listen(3000, () => {
  console.log(`Example app running`);
});
