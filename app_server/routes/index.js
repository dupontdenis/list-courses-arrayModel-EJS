import express from "express";
import * as ctrlCourses from "../controllers/courses.js";

const router = express.Router();

router.route("/").get(ctrlCourses.coursesReadAll);

router
  .route("/new")
  .get(ctrlCourses.coursesForm)
  .post(ctrlCourses.coursesAddOne);

router.route("/:id").get(ctrlCourses.coursesReadOne);

router.route("/delete/:id").get(ctrlCourses.coursesDeleteOne);

export default router;
