import express from "express";
import * as ctrlCourses from "../controllers/courses.js";

const router = express.Router();

//const {find, pullallby} = require('lodash');

router
  .route("/courses")
  .get(ctrlCourses.coursesReadAll)
  .post(ctrlCourses.coursesCreateOne);

router
  .route("/courses/:id")
  .get(ctrlCourses.coursesReadOne)
  .put(ctrlCourses.coursesUpdateOne)
  .delete(ctrlCourses.coursesDeleteOne);

export default router;
