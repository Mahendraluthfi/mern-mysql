import express from "express";
const app = express();
import bodyParser from "body-parser";
import router from "./router.js";

app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
  console.log(`Example app running`);
});
