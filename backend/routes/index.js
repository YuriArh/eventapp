const Router = require("express");
const eventRouter = require("./eventRouter");
// const userRouter = require("./userRouter");

const router = new Router();

router.use("/event", eventRouter);
// router.use("/user", userRouter);

module.exports = router;
