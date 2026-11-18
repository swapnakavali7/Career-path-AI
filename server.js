const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');


app.use(cors());
app.use(express.json());

// Manam data ikkada pedtham
const courses = {
  computers: "B.Tech Computer Science, BCA",
  drawing: "B.Des, Fine Arts, Animation",
  business: "BBA, MBA, Commerce",
  biology: "MBBS, B.Sc Nursing, Biotechnology"
};

app.post('/api/find-course', (req, res) => {
  const interest = req.body.interest.toLowerCase();
  let result = "Sorry, course dorakaledu. Vere interest try chey!";
  for (let key in courses) {
    if (interest.includes(key)) {
      result = courses[key];
    }
  }
    // DATABASE - search ni save chesthunnam
  let history = [];
  try { history = JSON.parse(fs.readFileSync('database.json', 'utf8')); } catch(e) { history = []; }
  history.push({ interest: interest, course: result, time: new Date() });
  fs.writeFileSync('database.json', JSON.stringify(history, null, 2));
  res.json({ course: result });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});