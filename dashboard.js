// dashboard.js - Logic for Dashboard Page

const studentsDB = {
  "242510010": {
    nama: "Bima Sena",
    kelas: "Kelas 11 — IPA",
    inisial: "BS",
    perkembangan_semester: [
      { semester: "Kelas 10 S1", rata_rata: 82 },
      { semester: "Kelas 10 S2", rata_rata: 86 },
      { semester: "Kelas 11 S1", rata_rata: 84 },
      { semester: "Kelas 11 S2", rata_rata: 90 }
    ],
    detail_nilai: [
      { mapel: "Matematika", nilai: 90 },
      { mapel: "B. Indonesia", nilai: 85 },
      { mapel: "B. Inggris", nilai: 78 },
      { mapel: "PAI", nilai: 92 },
      { mapel: "Tahfidz", nilai: 88 },
      { mapel: "PKK", nilai: 80 },
      { mapel: "PKN", nilai: 85 },
      { mapel: "PJOK", nilai: 95 },
      { mapel: "Informatika", nilai: 95 }
    ]
  },
  "242510023": {
    nama: "Aksajreno Fathukhotir Hayu",
    kelas: "Kelas 11 — IPS",
    inisial: "AH",
    perkembangan_semester: [
      { semester: "Kelas 10 S1", rata_rata: 78 },
      { semester: "Kelas 10 S2", rata_rata: 80 },
      { semester: "Kelas 11 S1", rata_rata: 85 },
      { semester: "Kelas 11 S2", rata_rata: 88 }
    ],
    detail_nilai: [
      { mapel: "Matematika", nilai: 82 },
      { mapel: "B. Indonesia", nilai: 88 },
      { mapel: "B. Inggris", nilai: 85 },
      { mapel: "PAI", nilai: 90 },
      { mapel: "Tahfidz", nilai: 85 },
      { mapel: "PKK", nilai: 88 },
      { mapel: "PKN", nilai: 90 },
      { mapel: "PJOK", nilai: 86 },
      { mapel: "Informatika", nilai: 84 }
    ]
  }
};

const currentNis = localStorage.getItem('cognitia_nis');
if (!currentNis || !studentsDB[currentNis]) {
  window.location.href = 'index.html'; // Redirect to login if invalid
}

const dataSiswa = studentsDB[currentNis];

// Colors matching the CSS variables — Natural Olive & Cream Palette
const colors = {
  primary: '#89986D',
  primaryLight: '#9CAB84',
  secondary: '#C5D89D',
  secondaryLight: '#D4E4B1',
  purple: '#8B7355',
  orange: '#B5944A',
  teal: '#6B8F71',
  pink: '#B07D6A',
  gray: '#D8D0B4',
  textMuted: '#6B7A54'
};

const mapelColors = [colors.primary, colors.purple, colors.teal, colors.orange];

document.addEventListener('DOMContentLoaded', () => {
  
  // Loader Logic
  const loader = document.getElementById('dashboard-loader');
  const isJustLoggedIn = localStorage.getItem('cognitia_loading');
  
  if (isJustLoggedIn === 'true') {
    // Show loader for 2 seconds to simulate fetching
    loader.classList.remove('hidden');
    setTimeout(() => {
      loader.classList.add('hidden');
      localStorage.removeItem('cognitia_loading');
    }, 2000);
  } else if (loader) {
    // Ensure hidden if not logged in just now
    loader.classList.add('hidden');
  }

  // Set Current Date
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('id-ID', options);
  }

  try {
    // Dynamically replace any hardcoded 'Bima Sena' with actual student name
    const allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = allTextNodes.nextNode())) {
      if (node.nodeValue.includes('Bima Sena')) {
        node.nodeValue = node.nodeValue.replace(/Bima Sena/g, dataSiswa.nama);
      }
    }

    // Set Student Name & Profile
    if(document.getElementById('header-student-name')) document.getElementById('header-student-name').textContent = dataSiswa.nama;
    if(document.getElementById('sb-student-name')) document.getElementById('sb-student-name').textContent = dataSiswa.nama;
    if(document.getElementById('sb-avatar')) document.getElementById('sb-avatar').textContent = dataSiswa.inisial;
    if(document.getElementById('sb-class')) document.getElementById('sb-class').textContent = dataSiswa.kelas;

    // Initialize UI Features
    setupSidebar();
    setupNavigation();
    
    // Process Data & Render
    calculateInsights();
    renderSummaryTable();
    renderGradesSection();
    renderReportSection();
    
    // Render Charts
    renderBarChart();
    renderLineChart();
    renderRadarChart();
    renderGradesBarChart();
    renderTrendLineChart();
    
    // Handle Resize for charts
    window.addEventListener('resize', () => {
      if (Chart && Chart.instances) {
        Object.values(Chart.instances).forEach(chart => {
          if (chart && typeof chart.resize === 'function') chart.resize();
        });
      }
    });
  } catch (error) {
    console.error("Dashboard Rendering Error:", error);
    alert("Terjadi kesalahan saat memuat data: " + error.message);
  }
});

// --- SIDEBAR & NAV LOGIC ---
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('sidebar-close');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  toggleBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
}

function setupNavigation() {
  const sbLinks = document.querySelectorAll('.sidebar-link[data-section]');
  const bnLinks = document.querySelectorAll('.bottom-nav-item[data-section]');
  const sections = document.querySelectorAll('.dash-section');

  function switchSection(sectionId) {
    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));
    // Show target section
    document.getElementById('section-' + sectionId).classList.add('active');

    // Update active state on Sidebar
    sbLinks.forEach(link => {
      if(link.getAttribute('data-section') === sectionId) link.classList.add('active');
      else link.classList.remove('active');
    });

    // Update active state on Bottom Nav
    bnLinks.forEach(link => {
      if(link.getAttribute('data-section') === sectionId) link.classList.add('active');
      else link.classList.remove('active');
    });
    
    // Auto close sidebar on mobile
    if(window.innerWidth < 992) {
      document.getElementById('sidebar').classList.remove('active');
      document.getElementById('sidebar-overlay').classList.remove('active');
    }
  }

  sbLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection(link.getAttribute('data-section'));
    });
  });

  bnLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection(link.getAttribute('data-section'));
    });
  });
}

// --- DATA PROCESSING ---
function calculateInsights() {
  const grades = dataSiswa.detail_nilai;
  const history = dataSiswa.perkembangan_semester;
  
  // Highest Grade
  let highest = grades[0];
  let lowest = grades[0];
  let total = 0;

  grades.forEach(g => {
    if (g.nilai > highest.nilai) highest = g;
    if (g.nilai < lowest.nilai) lowest = g;
    total += g.nilai;
  });

  const avgNow = (total / grades.length).toFixed(1);

  // Update UI Cards
  document.getElementById('val-highest').textContent = highest.nilai;
  document.getElementById('mapel-highest').textContent = highest.mapel;
  
  document.getElementById('val-lowest').textContent = lowest.nilai;
  document.getElementById('mapel-lowest').textContent = lowest.mapel;
  
  document.getElementById('val-avg').textContent = avgNow;
  
  document.getElementById('val-subjects').textContent = grades.length;
}

function renderSummaryTable() {
  const tbody = document.getElementById('summary-table-body');
  const history = dataSiswa.perkembangan_semester;
  
  history.forEach(item => {
    let badgeClass = 'fair';
    let ket = 'Cukup';
    
    if(item.rata_rata >= 90) { badgeClass = 'excellent'; ket = 'Sangat Baik'; }
    else if(item.rata_rata >= 85) { badgeClass = 'good'; ket = 'Baik'; }
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.semester}</td>
      <td><strong>${item.rata_rata}</strong></td>
      <td><span class="badge ${badgeClass}">${ket}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderGradesSection() {
  const container = document.getElementById('grades-grid');
  const grades = dataSiswa.detail_nilai;
  
  grades.forEach((g, index) => {
    const color = mapelColors[index % mapelColors.length];
    
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${g.mapel}</span>
        <span class="scard-score" style="color: ${color}">${g.nilai}</span>
      </div>
      <div class="scard-progress-bg">
        <div class="scard-progress-fill" style="width: ${g.nilai}%; background-color: ${color};"></div>
      </div>
    `;
    container.appendChild(tr = card); // intentional minor trick to append
  });
}

function renderReportSection() {
  const container = document.getElementById('report-grid');
  const grades = dataSiswa.detail_nilai;
  
  grades.forEach((g, index) => {
    const color = mapelColors[index % mapelColors.length];
    let desc = g.nilai >= 85 ? 'Pencapaian sangat memuaskan, pertahankan!' : 'Perlu ditingkatkan lagi pada semester berikutnya.';
    
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.borderLeft = `4px solid ${color}`;
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${g.mapel}</span>
        <span class="scard-score">${g.nilai}</span>
      </div>
      <p style="font-size:0.875rem; color:#6B7A54; margin-top:0.5rem;">${desc}</p>
    `;
    container.appendChild(card);
  });
}

// --- CHART.JS CONFIGURATIONS ---

// Global Defaults
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#6B7A54';
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(61, 74, 46, 0.9)';
Chart.defaults.plugins.tooltip.titleFont = { size: 13, family: "'Plus Jakarta Sans'" };
Chart.defaults.plugins.tooltip.bodyFont = { size: 14, weight: 'bold' };

function renderBarChart() {
  const ctx = document.getElementById('barChart').getContext('2d');
  const labels = dataSiswa.detail_nilai.map(g => g.mapel);
  const data = dataSiswa.detail_nilai.map(g => g.nilai);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nilai Semester Ini',
        data: data,
        backgroundColor: mapelColors,
        borderRadius: 6,
        barPercentage: 0.6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(216, 208, 180, 0.5)', drawBorder: false }
        },
        x: { grid: { display: false, drawBorder: false } }
      }
    }
  });
}

function renderLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const labels = dataSiswa.perkembangan_semester.map(h => h.semester);
  const data = dataSiswa.perkembangan_semester.map(h => h.rata_rata);

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(197, 216, 157, 0.4)');
  gradient.addColorStop(1, 'rgba(197, 216, 157, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Rata-rata Nilai',
        data: data,
        borderColor: colors.secondary,
        backgroundColor: gradient,
        borderWidth: 3,
        pointBackgroundColor: '#FFFDF5',
        pointBorderColor: colors.secondary,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
        tension: 0.4 // Smooth curve
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          min: 70, max: 100,
          grid: { color: 'rgba(216, 208, 180, 0.5)' }
        },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderRadarChart() {
  const ctx = document.getElementById('radarChart').getContext('2d');
  const labels = dataSiswa.detail_nilai.map(g => g.mapel);
  const data = dataSiswa.detail_nilai.map(g => g.nilai);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nilai',
        data: data,
        backgroundColor: [
          colors.primary, colors.secondary, colors.purple, colors.orange,
          colors.teal, colors.pink, colors.primaryLight, colors.secondaryLight, '#B5944A'
        ],
        borderWidth: 2,
        borderColor: '#FFFDF5',
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: { legend: { display: false } }
    }
  });
}

function renderGradesBarChart() {
  // Duplicate chart for the grades section
  const ctx = document.getElementById('gradesBarChart').getContext('2d');
  const labels = dataSiswa.detail_nilai.map(g => g.mapel);
  const data = dataSiswa.detail_nilai.map(g => g.nilai);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nilai',
        data: data,
        backgroundColor: mapelColors,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });
}

function renderTrendLineChart() {
  // Duplicate chart for the trend section
  const ctx = document.getElementById('trendLineChart').getContext('2d');
  const labels = dataSiswa.perkembangan_semester.map(h => h.semester);
  const data = dataSiswa.perkembangan_semester.map(h => h.rata_rata);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Rata-rata',
        data: data,
        borderColor: colors.primary,
        backgroundColor: 'rgba(30, 64, 175, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: colors.primary,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { min: 70, max: 100 } }
    }
  });
}
