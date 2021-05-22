const express = require("express");

const router = express.Router();

const {
  create,
  read,
  readOne,
  update,
  remove,
} = require("../controllers/techs");

router.post("/techs", create);
router.get("/techs", read);
router.get("/techs/:slug", readOne);
router.put("/techs/:slug", update);
router.delete("/techs/:slug", remove);

module.exports = router;
