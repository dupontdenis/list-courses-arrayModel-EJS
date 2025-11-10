import debug from "debug";
const debugReadAll = debug("app_server:readAll");
const debugReadOne = debug("app_server:readOne");
const debugAddOne = debug("app_server:addOne");
const debugDeleteOne = debug("app_server:deleteOne");
const debugForm = debug("app_server:form");

const coursesReadAll = async (req, res) => {
  debugReadAll("-------------- READ ALL-------------------------------");
  try {
    debugReadAll(`req.query: ${JSON.stringify(req.query)}`);
    // Build query string from req.query
    const params = new URLSearchParams(req.query).toString();
    debugReadAll(`Query params: ${params}`);
    const apiUrl = params
      ? `http://localhost:3000/api/courses?${params}`
      : "http://localhost:3000/api/courses";
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.render("courses-list", {
      courses: data.courses,
    });
  } catch (error) {
    // handle error
    debugReadAll(error);
  }
};

const coursesReadOne = async (req, res) => {
  debugReadOne("-------------- READ ONE-------------------------------");

  try {
    const response = await fetch(
      `http://localhost:3000/api/courses/${Number(req.params.id)}`
    );
    const data = await response.json();
    res.render("course-info", {
      course: data,
    });
  } catch (error) {
    // handle error
    debugReadOne(error);
  }
};

const coursesDeleteOne = async (req, res) => {
  debugDeleteOne("-------------- DELETE ONE-------------------------------");
  debugDeleteOne(req.params.id);
  try {
    const response = await fetch(
      `http://localhost:3000/api/courses/${Number(req.params.id)}`,
      {
        method: "DELETE",
      }
    );
    debugDeleteOne(response.statusText);
    res.redirect(`/courses/`);
  } catch (error) {
    // handle error
    debugDeleteOne(error);
  }
};

const renderForm = (req, res) => {
  debugForm(`Error: ${req.query.err}`);
  res.render("course-form", {
    title: `New Course`,
    error: req.query.err,
  });
};

const coursesForm = (req, res) => {
  debugForm("----------------   FORM  -----------------------");
  renderForm(req, res);
};

const coursesAddOne = async (req, res) => {
  debugAddOne("----------------   ADD ONE  -----------------------");
  debugAddOne(req.body);

  // Check if all values in req.body are truthy (not empty, null, or undefined)
  const hasEmptyFields = Object.values(req.body).some(
    (value) => !value || value.trim() === ""
  );

  if (hasEmptyFields) {
    const emptyFields = Object.keys(req.body).filter(
      (key) => !req.body[key] || req.body[key].trim() === ""
    );
    debugAddOne(`Empty or missing fields: ${emptyFields.join(", ")}`);
    res.redirect(`/courses/new?err=missingData`);
  } else {
    try {
      const response = await fetch("http://localhost:3000/api/courses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      debugAddOne(data);
      res.redirect("/courses");
    } catch (error) {
      debugAddOne(error);
    }
  }
};

export {
  coursesReadAll,
  coursesReadOne,
  coursesAddOne,
  coursesDeleteOne,
  coursesForm,
};
