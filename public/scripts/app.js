const alumniForm = document.getElementById("alumniForm");
alumniForm.addEventListener("submit", (e) => {
  sendAlumniData(e);
});

async function sendAlumniData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch("http://localhost:5000/api/alumni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Alumni added successfully!");
      event.target.reset();
    } else {
      console.log("Failed to add alumni.");
    }
  } catch (error) {
    console.error("Error:", error);
    console.log("An error occurred.\nCould not connect to Database.");
  }
}
