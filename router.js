import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
// create application/json parser

// create application/x-www-form-urlencoded parser
router.use(bodyParser.json());

router.post("/login", (req, res) => {
  console.log({ username: req.body.username });
  res.send(`Login Success`);
});

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/home", (req, res) => {
  res.send("This is HomePage!");
});

router.get("/about", (req, res) => {
  res.send("This is About!");
});

router.get("/profile", (req, res) => {
  res.send("This is Profile!");
});

router.get("/contact", (req, res) => {
  res.send("This is Contact!");
});

// module.exports = router;
export default router;
