import express from "express";
import db from "./connection.js";
import response from "./response.js";
const router = express.Router();

router.post("/login", (req, res) => {
  console.log({ username: req.body });
  res.send(`Login Success`);
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM tb_mahasiswa", (err, result) => {
    response(200, result, "Get all data mahasiswa", res);
  });
});

router.get("/getid", (req, res) => {
  const sql = `SELECT * FROM tb_mahasiswa WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    response(200, result, "Get id from Mahasiswa", res);
  });
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
