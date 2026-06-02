// dashboard.js - Logic for Dashboard Page (FIXED FILTER & HTML SYNC)

const studentsDB = {
  242510010: {
    nama: "Bima Sena",
    kelas: "Kelas 12 — IPA",
    inisial: "BS",
    perkembangan_semester: [
      { semester: "Kelas 10 S1", rata_rata: 78.5 },
      { semester: "Kelas 10 S2", rata_rata: 83.2 },
      { semester: "Kelas 11 S1", rata_rata: 88.0 },
      { semester: "Kelas 11 S2", rata_rata: 90.7 },
      { semester: "Kelas 12 S1", rata_rata: 92.5 },
      { semester: "Kelas 12 S2", rata_rata: 95.0 },
    ],
    semester_data: {
      s10s1: [
        { mapel: "Matematika", nilai: 75 },
        { mapel: "B. Indonesia", nilai: 80 },
        { mapel: "B. Inggris", nilai: 72 },
        { mapel: "PAI", nilai: 85 },
        { mapel: "Tahfidz", nilai: 80 },
        { mapel: "PKN", nilai: 78 },
        { mapel: "PJOK", nilai: 82 },
        { mapel: "Informatika", nilai: 76 },
      ],
      s10s2: [
        { mapel: "Matematika", nilai: 82 },
        { mapel: "B. Indonesia", nilai: 80 },
        { mapel: "B. Inggris", nilai: 78 },
        { mapel: "PAI", nilai: 88 },
        { mapel: "Tahfidz", nilai: 85 },
        { mapel: "PKN", nilai: 82 },
        { mapel: "PJOK", nilai: 85 },
        { mapel: "Informatika", nilai: 86 },
      ],
      s11s1: [
        { mapel: "Matematika", nilai: 85 },
        { mapel: "B. Indonesia", nilai: 88 },
        { mapel: "B. Inggris", nilai: 80 },
        { mapel: "PAI", nilai: 90 },
        { mapel: "Tahfidz", nilai: 85 },
        { mapel: "PKN", nilai: 86 },
        { mapel: "PJOK", nilai: 92 },
        { mapel: "Informatika", nilai: 98 },
      ],
      s11s2: [
        { mapel: "Matematika", nilai: 98 },
        { mapel: "B. Indonesia", nilai: 88 },
        { mapel: "B. Inggris", nilai: 85 },
        { mapel: "PAI", nilai: 92 },
        { mapel: "Tahfidz", nilai: 85 },
        { mapel: "PKN", nilai: 88 },
        { mapel: "PJOK", nilai: 92 },
        { mapel: "Informatika", nilai: 98 },
      ],
      s12s1: [
        { mapel: "Matematika", nilai: 98 },
        { mapel: "B. Indonesia", nilai: 92 },
        { mapel: "B. Inggris", nilai: 88 },
        { mapel: "PAI", nilai: 92 },
        { mapel: "Tahfidz", nilai: 90 },
        { mapel: "PKN", nilai: 90 },
        { mapel: "PJOK", nilai: 92 },
        { mapel: "Informatika", nilai: 98 },
      ],
      s12s2: [
        { mapel: "Matematika", nilai: 100 },
        { mapel: "B. Indonesia", nilai: 95 },
        { mapel: "B. Inggris", nilai: 92 },
        { mapel: "PAI", nilai: 95 },
        { mapel: "Tahfidz", nilai: 90 },
        { mapel: "PKN", nilai: 94 },
        { mapel: "PJOK", nilai: 94 },
        { mapel: "Informatika", nilai: 100 },
      ],
    }
  },
  242510023: {
    nama: "Aksajreno Fathukhotir Hayu",
    kelas: "Kelas 12 — IPS",
    inisial: "AH",
    perkembangan_semester: [
      { semester: "Kelas 10 S1", rata_rata: 85.0 },
      { semester: "Kelas 10 S2", rata_rata: 74.2 },
      { semester: "Kelas 11 S1", rata_rata: 84.0 },
      { semester: "Kelas 11 S2", rata_rata: 77.7 },
      { semester: "Kelas 12 S1", rata_rata: 91.3 },
      { semester: "Kelas 12 S2", rata_rata: 71.2 },
    ],
    semester_data: {
      s10s1: [
        { mapel: "Matematika", nilai: 88 },
        { mapel: "B. Indonesia", nilai: 82 },
        { mapel: "B. Inggris", nilai: 85 },
        { mapel: "PAI", nilai: 90 },
        { mapel: "Tahfidz", nilai: 80 },
        { mapel: "PKN", nilai: 84 },
        { mapel: "PJOK", nilai: 86 },
        { mapel: "Informatika", nilai: 85 },
      ],
      s10s2: [
        { mapel: "Matematika", nilai: 70 }, 
        { mapel: "B. Indonesia", nilai: 72 },
        { mapel: "B. Inggris", nilai: 65 },
        { mapel: "PAI", nilai: 80 },
        { mapel: "Tahfidz", nilai: 74 },
        { mapel: "PKN", nilai: 76 },
        { mapel: "PJOK", nilai: 82 },
        { mapel: "Informatika", nilai: 75 },
      ],
      s11s1: [
        { mapel: "Matematika", nilai: 78 },
        { mapel: "B. Indonesia", nilai: 90 },
        { mapel: "B. Inggris", nilai: 70 },
        { mapel: "PAI", nilai: 92 },
        { mapel: "Tahfidz", nilai: 75 },
        { mapel: "PKN", nilai: 84 },
        { mapel: "PJOK", nilai: 95 },
        { mapel: "Informatika", nilai: 88 },
      ],
      s11s2: [
        { mapel: "Matematika", nilai: 95 }, 
        { mapel: "B. Indonesia", nilai: 68 },
        { mapel: "B. Inggris", nilai: 88 },
        { mapel: "PAI", nilai: 65 },
        { mapel: "Tahfidz", nilai: 90 },
        { mapel: "PKN", nilai: 65 },
        { mapel: "PJOK", nilai: 84 },
        { mapel: "Informatika", nilai: 67 },
      ],
      s12s1: [
        { mapel: "Matematika", nilai: 92 },
        { mapel: "B. Indonesia", nilai: 94 },
        { mapel: "B. Inggris", nilai: 89 },
        { mapel: "PAI", nilai: 95 },
        { mapel: "Tahfidz", nilai: 87 },
        { mapel: "PKN", nilai: 90 },
        { mapel: "PJOK", nilai: 93 },
        { mapel: "Informatika", nilai: 91 },
      ],
      s12s2: [
        { mapel: "Matematika", nilai: 65 }, 
        { mapel: "B. Indonesia", nilai: 70 },
        { mapel: "B. Inggris", nilai: 60 },
        { mapel: "PAI", nilai: 85 },
        { mapel: "Tahfidz", nilai: 68 },
        { mapel: "PKN", nilai: 72 },
        { mapel: "PJOK", nilai: 80 },
        { mapel: "Informatika", nilai: 70 },
      ],
    }
  },
};

const currentNis = localStorage.getItem("cognitia_nis") || "242510010"; // Fallback agar jika diklik langsung tidak crash
const dataSiswa = studentsDB[currentNis];

// Variabel penampung data dinamis aktif awal (Default ke s12s2 sesuai setting class active HTML)
let currentSemesterGrades = dataSiswa.semester_data["s12s2"] || [];

// Menampung instance chart agar bisa di-destroy dengan aman tanpa error canvas tumpang tindih
let gradesBarChartInstance = null;
let pieChartInstance = null;
let trendLineChartInstance = null;

const colors = {
  primary: "#66B8D4",
  primaryLight: "#8ecce0",
  secondary: "#3a97b5",
  secondaryLight: "#bde7f7",
  purple: "#8b5cf6",
  orange: "#f59e0b",
  teal: "#10b981",
  pink: "#ec4899",
  gray: "#94a3b8",
  textMuted: "#64748b",
};

const mapelColors = [
  "#66B8D4",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#3a97b5",
  "#06b6d4",
  "#6366f1",
  "#14b8a6",
];

document.addEventListener("DOMContentLoaded", () => {
  // Loader Logic
  const loader = document.getElementById("dashboard-loader");
  const isJustLoggedIn = localStorage.getItem("cognitia_loading");

  if (isJustLoggedIn === "true") {
    loader.classList.remove("hidden");
    setTimeout(() => {
      loader.classList.add("hidden");
      localStorage.removeItem("cognitia_loading");
    }, 2000);
  } else if (loader) {
    loader.classList.add("hidden");
  }

  // Dropdown Filter Custom Handler
  const dropdownContainer = document.querySelector('.custom-dropdown-container');
  const dropdownBtn = document.getElementById('semester-dropdown-btn');
  const selectedSemesterText = document.getElementById('selected-semester');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  const filterElement = {
    value: "s12s2",
    dispatchEvent: function(event) {
      if (this.onChangeCallback) this.onChangeCallback(event);
    },
    addEventListener: function(type, callback) {
      if (type === 'change') this.onChangeCallback = callback;
    }
  };

  if(dropdownBtn && dropdownContainer) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownContainer.classList.toggle('open');
    });

    dropdownItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();

        const activeNow = document.querySelector('.dropdown-item.active');
        if(activeNow) activeNow.classList.remove('active');
        item.classList.add('active');

        selectedSemesterText.textContent = item.textContent;
        const selectedValue = item.getAttribute('data-value');
        filterElement.value = selectedValue;

        dropdownContainer.classList.remove('open');

        console.log("Filter changed to:", filterElement.value);
        handleFilterChange(filterElement.value);
      });
    });

    document.addEventListener('click', () => {
      dropdownContainer.classList.remove('open');
    });
  }

  // Date Badge
  const dateElement = document.getElementById("current-date");
  if (dateElement) {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = new Date().toLocaleDateString("id-ID", options);
  }

  try {
    // Inisialisasi Profil Siswa
    if (document.getElementById("header-student-name"))
      document.getElementById("header-student-name").textContent = dataSiswa.nama;
    if (document.getElementById("sb-student-name"))
      document.getElementById("sb-student-name").textContent = dataSiswa.nama;
    if (document.getElementById("sb-avatar"))
      document.getElementById("sb-avatar").textContent = dataSiswa.inisial;
    if (document.getElementById("sb-class"))
      document.getElementById("sb-class").textContent = dataSiswa.kelas;

    setupSidebar();
    setupNavigation();

    // Render Awal Seluruh Komponen Dashboard
    renderSummaryTable(); // Tabel rekap hanya di-render sekali karena merekam semua riwayat
    refreshDashboardView();
    renderTrendLineChart(); // Tren grafik garis tidak ikut terfilter karena merekam histori keseluruhan

    window.addEventListener("resize", () => {
      if (Chart && Chart.instances) {
        Object.values(Chart.instances).forEach((chart) => {
          if (chart && typeof chart.resize === "function") chart.resize();
        });
      }
    });
  } catch (error) {
    console.error("Dashboard Rendering Error:", error);
  }
});

// --- FILTER ACTION MANAGER ---
function handleFilterChange(selectedValue) {
  // Update data array aktif yang digunakan fungsi pendukung
  currentSemesterGrades = dataSiswa.semester_data[selectedValue] || [];

  // Update tulisan sub info card rata-rata
  const subAvgElement = document.querySelector("#card-avg .icard-sub");
  if(subAvgElement) {
    const activeItemTxt = document.querySelector('.dropdown-item[data-value="' + selectedValue + '"]')?.textContent;
    subAvgElement.textContent = activeItemTxt || "Semester Terpilih";
  }

  // Kosongkan kontainer lama agar tidak menumpuk duplikat data teks
  document.getElementById("grades-grid").innerHTML = "";
  document.getElementById("report-grid").innerHTML = "";

  // Gambar ulang layout & grafik
  refreshDashboardView();
}

function refreshDashboardView() {
  calculateInsights();
  renderGradesSection();
  renderReportSection();
  renderLeaderboard();

  // Render Grafik secara aman
  renderGradesBarChart();
  renderPieChart();
}

// --- SIDEBAR & NAVIGATION ---
function setupSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const toggleBtn = document.getElementById("sidebar-toggle");
  const closeBtn = document.getElementById("sidebar-close");

  if(!sidebar || !overlay || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  const closeSidebar = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  };

  if(closeBtn) closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
}

function setupNavigation() {
  const sbLinks = document.querySelectorAll(".sidebar-link[data-section]");
  const bnLinks = document.querySelectorAll(".bottom-nav-item[data-section]");
  const sections = document.querySelectorAll(".dash-section");

  function switchSection(sectionId) {
    sections.forEach((sec) => sec.classList.remove("active"));
    const targetSection = document.getElementById("section-" + sectionId);
    if(targetSection) targetSection.classList.add("active");

    sbLinks.forEach((link) => {
      if (link.getAttribute("data-section") === sectionId) link.classList.add("active");
      else link.classList.remove("active");
    });

    if (window.innerWidth < 992) {
      document.getElementById("sidebar").classList.remove("active");
      document.getElementById("sidebar-overlay").classList.remove("active");
    }
  }

  sbLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchSection(link.getAttribute("data-section"));
    });
  });
}

// --- DATA LIST GENERATORS ---
function calculateInsights() {
  const grades = currentSemesterGrades;
  
  if(!grades || grades.length === 0) {
    document.getElementById("val-highest").textContent = "—";
    document.getElementById("mapel-highest").textContent = "Data Kosong";
    document.getElementById("val-lowest").textContent = "—";
    document.getElementById("mapel-lowest").textContent = "Data Kosong";
    document.getElementById("val-avg").textContent = "0";
    document.getElementById("val-subjects").textContent = "0";
    return;
  }

  let highest = grades[0];
  let lowest = grades[0];
  let total = 0;

  grades.forEach((g) => {
    if (g.nilai > highest.nilai) highest = g;
    if (g.nilai < lowest.nilai) lowest = g;
    total += g.nilai;
  });

  document.getElementById("val-highest").textContent = highest.nilai;
  document.getElementById("mapel-highest").textContent = highest.mapel;
  document.getElementById("val-lowest").textContent = lowest.nilai;
  document.getElementById("mapel-lowest").textContent = lowest.mapel;
  document.getElementById("val-avg").textContent = (total / grades.length).toFixed(1);
  document.getElementById("val-subjects").textContent = grades.length;
}

function renderSummaryTable() {
  const tbody = document.getElementById("summary-table-body");
  if(!tbody) return;
  tbody.innerHTML = "";
  
  dataSiswa.perkembangan_semester.forEach((item) => {
    let badgeClass = "fair";
    let ket = "Cukup";
    if (item.rata_rata >= 90) {
      badgeClass = "excellent";
      ket = "Sangat Baik";
    } else if (item.rata_rata >= 85) {
      badgeClass = "good";
      ket = "Baik";
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.semester}</td>
      <td><strong>${item.rata_rata}</strong></td>
      <td><span class="badge ${badgeClass}">${ket}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderGradesSection() {
  const container = document.getElementById("grades-grid");
  if(!container) return;

  currentSemesterGrades.forEach((g, index) => {
    const color = mapelColors[index % mapelColors.length];
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${g.mapel}</span>
        <span class="scard-score" style="color: ${color}">${g.nilai}</span>
      </div>
      <div class="scard-progress-bg">
        <div class="scard-progress-fill" style="width: ${g.nilai}%; background-color: ${color};"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderReportSection() {
  const container = document.getElementById("report-grid");
  if(!container) return;

  currentSemesterGrades.forEach((g, index) => {
    const color = mapelColors[index % mapelColors.length];
    let desc = g.nilai >= 85 ? "Pencapaian sangat memuaskan, pertahankan!" : "Perlu ditingkatkan lagi pada semester berikutnya.";
    const card = document.createElement("div");
    card.className = "subject-card";
    card.style.borderLeft = `4px solid ${color}`;
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${g.mapel}</span>
        <span class="scard-score">${g.nilai}</span>
      </div>
      <p class="scard-desc">${desc}</p>
    `;
    container.appendChild(card);
  });
}

function renderLeaderboard() {
  const container = document.getElementById("leaderboard-list");
  if(!container) return;
  container.innerHTML = ""; 

  const sorted = [...currentSemesterGrades].sort((a, b) => b.nilai - a.nilai);
  const top3 = sorted.slice(0, 3); // Mengambil peringkat 3 besar teratas

  top3.forEach((g, idx) => {
    const medali = ["🥇", "🥈", "🥉"];
    const item = document.createElement("div");
    item.className = "lb-item";
    item.innerHTML = `
      <div class="lb-left">
        <span class="lb-medal">${medali[idx]}</span>
        <span class="lb-mapel">${g.mapel}</span>
      </div>
      <span class="lb-score">${g.nilai}</span>
    `;
    container.appendChild(item);
  });
}

// --- CHART.JS CONFIGURATIONS ---
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = "#64748b";

function renderGradesBarChart() {
  const canvasEl = document.getElementById("gradesBarChart");
  if(!canvasEl) return;
  const ctx = canvasEl.getContext("2d");

  // Destroy instance lama jika ada, mencegah glitch penumpukan Chart.js
  if (gradesBarChartInstance) {
    gradesBarChartInstance.destroy();
  }

  const labels = currentSemesterGrades.map((g) => g.mapel);
  const data = currentSemesterGrades.map((g) => g.nilai);

  gradesBarChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Nilai Siswa",
          data: data,
          backgroundColor: mapelColors,
          borderRadius: 6,
          barPercentage: 0.6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 100, grid: { color: "rgba(102, 184, 212, 0.1)" } },
        x: { grid: { display: false } },
      },
    },
  });
}

function renderPieChart() {
  const canvasEl = document.getElementById("pieChart");
  if(!canvasEl) return;
  const ctx = canvasEl.getContext("2d");

  if (pieChartInstance) {
    pieChartInstance.destroy();
  }

  const labels = currentSemesterGrades.map((g) => g.mapel);
  const data = currentSemesterGrades.map((g) => g.nilai);

  const legendEl = document.getElementById("pie-legend-list");
  if (legendEl) {
    legendEl.innerHTML = "";
    currentSemesterGrades.forEach((g, i) => {
      const color = mapelColors[i % mapelColors.length];
      const total = data.reduce((a, b) => a + b, 0);
      const pct = total > 0 ? ((g.nilai / total) * 100).toFixed(1) : 0;
      
      const item = document.createElement("div");
      item.className = "pie-legend-item";
      item.innerHTML = `
        <span class="pie-legend-dot" style="background:${color};"></span>
        <span class="pie-legend-name">${g.mapel}</span>
        <span class="pie-legend-score">${g.nilai}</span>
        <span class="pie-legend-pct">${pct}%</span>
      `;
      legendEl.appendChild(item);
    });
  }

  pieChartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{ data: data, backgroundColor: mapelColors, borderWidth: 2, borderColor: "#ffffff" }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
    },
  });
}

function renderTrendLineChart() {
  const canvasEl = document.getElementById("trendLineChart");
  if(!canvasEl) return;
  const ctx = canvasEl.getContext("2d");

  const labels = dataSiswa.perkembangan_semester.map((h) => h.semester);
  const data = dataSiswa.perkembangan_semester.map((h) => h.rata_rata);

  if (trendLineChartInstance) {
    trendLineChartInstance.destroy();
  }

  trendLineChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Rata-rata",
          data: data,
          borderColor: colors.primary,
          backgroundColor: "rgba(102, 184, 212, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: colors.primary,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { 
        y: { min: 70, max: 100, grid: { color: "rgba(102, 184, 212, 0.1)" } },
        x: { grid: { display: false } }
      },
    },
  });
}