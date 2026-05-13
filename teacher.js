// teacher.js

document.addEventListener("DOMContentLoaded", () => {

  // DATE
  const currentDate = document.getElementById("current-date");

  const today = new Date();

  currentDate.innerText = today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // CHART
  const ctx = document.getElementById("teacherChart");

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: [
        "Matematika",
        "Fisika",
        "Kimia",
        "Biologi",
        "Bahasa Inggris"
      ],

      datasets: [{
        label: "Rata-rata Nilai",

        data: [
          88,
          82,
          90,
          85,
          91
        ],

        borderWidth: 1,
        borderRadius: 10
      }]
    },

    options: {
      responsive: true,

      plugins: {
        legend: {
          display: false
        }
      },

      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

});