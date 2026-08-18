const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.static(__dirname));

const DATA_DIR =
  path.join(__dirname, "data", "progress");

fs.mkdirSync(DATA_DIR, {
  recursive: true
});

app.post("/progress", (req, res) => {

  const body = req.body;

  const uid =
    (body.uid || "guest")
      .replace(/[^a-zA-Z0-9._-]/g, "");

  const file =
    path.join(
      DATA_DIR,
      `${uid}.json`
    );

  let userData = {
    uid: body.uid,
    name: body.name,
    dept: body.dept,
    lectures: {}
  };

  if (fs.existsSync(file)) {

    userData =
      JSON.parse(
        fs.readFileSync(
          file,
          "utf8"
        )
      );

  }

  userData.uid = body.uid;
  userData.name = body.name;
  userData.dept = body.dept;

 userData.lectures[
  body.video_id
] = {

  program: body.program || '',

  lecture: body.lecture,
  total: body.total,

  done: body.done || [],
  seen: body.seen || [],

  scores: body.scores || {},

  updatedAt: body.updatedAt
};


  fs.writeFileSync(
    file,
    JSON.stringify(
      userData,
      null,
      2
    ),
    "utf8"
  );

  res.json({
    success: true
  });

});
app.get("/progress-list", (req,res)=>{

  const result = {};

  fs.readdirSync(DATA_DIR)
    .forEach(file=>{

      if(!file.endsWith(".json"))
        return;

      const data =
        JSON.parse(
          fs.readFileSync(
            path.join(DATA_DIR,file),
            "utf8"
          )
        );

      result[data.uid] =
        data;

    });

  res.json(result);

});

app.listen(3000, () => {
  console.log(
    "Server running: http://localhost:3000"
  );
});

app.use(express.static(__dirname));