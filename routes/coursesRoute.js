const route = require("express").Router();
const middleware = require('../middleware/middleware');
const coursesController = require("../controllers/coursesController");

// Chỉ có ADMIN và MODERATOR mới được gọi router getList
route.get("/getList", middleware.checkUserExists(), middleware.checkGetList(["ADMIN", "MODERATOR"]), coursesController.getList);

// Người dùng chỉ được truy cập các khóa học mà họ đã đăng ký dựa trên field courses của từng người
route.get("/:number", middleware.checkUserExists(), middleware.checkAccessCourse(), coursesController.accessCourse);

module.exports = route;
