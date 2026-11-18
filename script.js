// CareerPath AI - Simple Logic

document.getElementById("findBtn").addEventListener("click", function() {
  
  // 1. User em type chesado theesukuntunnam
  let interest = document.getElementById("interestInput").value.toLowerCase();
  let resultBox = document.getElementById("result");
  let career = "";

  // 2. Logic - Interest ni batti Career cheppadam
  if (interest.includes("computer") || interest.includes("coding") || interest.includes("games")) {
    career = "💻 Software Engineer - Nuvvu Coding nerchuko, future super untundi!";
  } 
  else if (interest.includes("drawing") || interest.includes("design") || interest.includes("art")) {
    career = "🎨 UI/UX Designer - Nee creativity ki idi perfect!";
  }
  else if (interest.includes("business") || interest.includes("money") || interest.includes("shop")) {
    career = "📈 Businessman / MBA - Nuvvu pedda businessman avuthav!";
  }
  else if (interest.includes("doctor") || interest.includes("biology") || interest.includes("hospital")) {
    career = "🩺 Doctor - Nuvvu chala mandiki help chesthav!";
  }
  else if (interest === "") {
    career = "⚠️ Dayachesi oka interest type chey!";
  }
  else {
    career = "🔍 Nee interest ki thaggattu career kosam search chesthunnam... Try: computers, drawing, business";
  }

  // 3. Result ni screen meedha chupisthunnam
  resultBox.innerText = career;
});
async function findCourse() {
  let interest = document.getElementById("courseInput").value;
  let response = await fetch("http://localhost:3000/api/find-course", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ interest: interest })
  });
  let data = await response.json();
  document.getElementById("courseResult").innerText = data.course;
}