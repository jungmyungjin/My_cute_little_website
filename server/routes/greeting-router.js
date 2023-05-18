const express = require("express");
const { requestHandler } = require("../utils");
const Router = express.Router;

const greetingRouter = Router();

greetingRouter.get(
  "/api/KR",
  requestHandler(async (req, res, next) => {
    let resultGreeting = "";
    resultGreeting = "안녕";
    res.status(200).json(resultGreeting);
  })
);

greetingRouter.get(
  "/api/US",
  requestHandler(async (req, res, next) => {
    let resultGreeting = "";
    resultGreeting = "Hi";
    res.status(200).json(resultGreeting);
  })
);

greetingRouter.get(
  "/api/JP",
  requestHandler(async (req, res, next) => {
    let resultGreeting = "";
    resultGreeting = "こんにちは";
    res.status(200).json(resultGreeting);
  })
);

greetingRouter.get(
  "/api/CN",
  requestHandler(async (req, res, next) => {
    let resultGreeting = "";
    resultGreeting = "你好";
    res.status(200).json(resultGreeting);
  })
);

module.exports = greetingRouter;
