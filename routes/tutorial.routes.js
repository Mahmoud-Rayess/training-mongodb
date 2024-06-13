module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();
  router.post("/", tutorials.create);
  router.put("/:id", tutorials.update);
  router.get("/all", tutorials.findAll);
  app.use("/api/mahmoud/rayess", router);
};
