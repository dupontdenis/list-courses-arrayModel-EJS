import pkg from "lodash";
const { find, pullAllBy } = pkg;
import { courses } from "../models/courses.js";
import debug from "debug";

const debugLog = debug("app_api");

const coursesReadAll = (req, res) => {
  res.json({ courses: courses });
};

const coursesCreateOne = (req, res) => {
  debugLog("---- coursesCreateOne ---");
  const course = {
    id: Math.ceil(Math.random() * 1000),
    name: req.body.name,
    info: req.body.info,
  };
  courses.push(course);
  res.json(course);
};

const coursesReadOne = (req, res) => {
  debugLog("---- coursesReadOne ---");
  let course = find(courses, { id: Number(req.params.id) });
  if (!course)
    res.status(404).send(`The course with id:${req.params.id} was not found`);
  res.send(course);
};

const coursesUpdateOne = (req, res) => {
  debugLog("---- coursesUpdateOne ---");
  let course = find(courses, { id: Number(req.params.id) });
  if (!course)
    res.status(404).send(`The course with id:${req.params.id} was not found`);
  course.name = req.body.name;
  res.json(course);
};

const coursesDeleteOne = (req, res) => {
  debugLog("---- coursesDeleteOne ---");
  pullAllBy(courses, [{ id: Number(req.params.id) }], "id");
  res.json(courses);
};

export {
  coursesReadAll,
  coursesCreateOne,
  coursesReadOne,
  coursesUpdateOne,
  coursesDeleteOne,
};
