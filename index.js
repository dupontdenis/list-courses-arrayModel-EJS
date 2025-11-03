import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import apiRouter from "./app_api/routes/index.js";
import indexRouter from "./app_server/routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", apiRouter);
app.use("/courses", indexRouter);

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => console.log("http://localhost:3000/courses"));
