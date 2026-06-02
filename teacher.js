// teacher.js - Logic for Teacher Dashboard
const teacherData = {
  nama: "Pak Budi",
  inisial: "PB",
  jabatan: "Wali Kelas X-1",
  avatar: "PB"
};

// 20 Hardcoded Students Data
const studentsData = [
  { nis: "242501001", nama: "Aditya Pratama", grades: { "Matematika": 88, "B. Indonesia": 85, "B. Inggris": 82, "PAI": 90, "Tahfidz": 85, "PKK": 80, "PKN": 88, "PJOK": 92, "Informatika": 95 }, history: [82, 85, 84, 88] },
  { nis: "242501002", nama: "Anisa Rahmawati", grades: { "Matematika": 92, "B. Indonesia": 90, "B. Inggris": 88, "PAI": 95, "Tahfidz": 92, "PKK": 85, "PKN": 90, "PJOK": 88, "Informatika": 90 }, history: [85, 88, 90, 91] },
  { nis: "242501003", nama: "Bagas Saputra", grades: { "Matematika": 78, "B. Indonesia": 80, "B. Inggris": 75, "PAI": 85, "Tahfidz": 80, "PKK": 78, "PKN": 82, "PJOK": 90, "Informatika": 85 }, history: [75, 78, 77, 80] },
  { nis: "242501004", nama: "Citra Lestari", grades: { "Matematika": 85, "B. Indonesia": 88, "B. Inggris": 90, "PAI": 92, "Tahfidz": 88, "PKK": 82, "PKN": 85, "PJOK": 85, "Informatika": 88 }, history: [80, 82, 85, 87] },
  { nis: "242501005", nama: "Dedi Kurniawan", grades: { "Matematika": 80, "B. Indonesia": 82, "B. Inggris": 78, "PAI": 88, "Tahfidz": 82, "PKK": 80, "PKN": 80, "PJOK": 95, "Informatika": 82 }, history: [78, 80, 81, 82] },
  { nis: "242501006", nama: "Eka Putri", grades: { "Matematika": 95, "B. Indonesia": 92, "B. Inggris": 94, "PAI": 98, "Tahfidz": 95, "PKK": 90, "PKN": 92, "PJOK": 90, "Informatika": 96 }, history: [88, 90, 92, 94] },
  { nis: "242501007", nama: "Fajar Ramadhan", grades: { "Matematika": 75, "B. Indonesia": 78, "B. Inggris": 70, "PAI": 82, "Tahfidz": 75, "PKK": 72, "PKN": 78, "PJOK": 88, "Informatika": 80 }, history: [70, 72, 74, 76] },
  { nis: "242501008", nama: "Gita Permata", grades: { "Matematika": 82, "B. Indonesia": 85, "B. Inggris": 80, "PAI": 90, "Tahfidz": 85, "PKK": 82, "PKN": 84, "PJOK": 82, "Informatika": 85 }, history: [78, 80, 81, 83] },
  { nis: "242501009", nama: "Hendra Wijaya", grades: { "Matematika": 88, "B. Indonesia": 82, "B. Inggris": 85, "PAI": 88, "Tahfidz": 80, "PKK": 84, "PKN": 86, "PJOK": 90, "Informatika": 92 }, history: [82, 84, 85, 87] },
  { nis: "242501010", nama: "Indah Cahyani", grades: { "Matematika": 90, "B. Indonesia": 92, "B. Inggris": 95, "PAI": 96, "Tahfidz": 94, "PKK": 88, "PKN": 90, "PJOK": 85, "Informatika": 94 }, history: [86, 88, 90, 92] },
  { nis: "242501011", nama: "Joko Susilo", grades: { "Matematika": 72, "B. Indonesia": 75, "B. Inggris": 70, "PAI": 80, "Tahfidz": 72, "PKK": 70, "PKN": 75, "PJOK": 85, "Informatika": 78 }, history: [68, 70, 72, 73] },
  { nis: "242501012", nama: "Kartika Sari", grades: { "Matematika": 86, "B. Indonesia": 84, "B. Inggris": 82, "PAI": 92, "Tahfidz": 88, "PKK": 80, "PKN": 85, "PJOK": 88, "Informatika": 90 }, history: [80, 82, 84, 86] },
  { nis: "242501013", nama: "Lucky Firman", grades: { "Matematika": 80, "B. Indonesia": 78, "B. Inggris": 75, "PAI": 85, "Tahfidz": 80, "PKK": 78, "PKN": 82, "PJOK": 92, "Informatika": 84 }, history: [75, 77, 79, 81] },
  { nis: "242501014", nama: "Maya Audina", grades: { "Matematika": 94, "B. Indonesia": 95, "B. Inggris": 92, "PAI": 96, "Tahfidz": 95, "PKK": 90, "PKN": 94, "PJOK": 88, "Informatika": 96 }, history: [88, 91, 93, 94] },
  { nis: "242501015", nama: "Naufal Aziz", grades: { "Matematika": 82, "B. Indonesia": 80, "B. Inggris": 85, "PAI": 88, "Tahfidz": 82, "PKK": 84, "PKN": 80, "PJOK": 95, "Informatika": 88 }, history: [80, 82, 83, 85] },
  { nis: "242501016", nama: "Olivia Zalianty", grades: { "Matematika": 88, "B. Indonesia": 90, "B. Inggris": 86, "PAI": 94, "Tahfidz": 90, "PKK": 85, "PKN": 88, "PJOK": 82, "Informatika": 90 }, history: [82, 85, 87, 88] },
  { nis: "242501017", nama: "Putra Bangsa", grades: { "Matematika": 76, "B. Indonesia": 80, "B. Inggris": 72, "PAI": 84, "Tahfidz": 78, "PKK": 75, "PKN": 80, "PJOK": 90, "Informatika": 82 }, history: [72, 75, 77, 79] },
  { nis: "242501018", nama: "Qonita Syahidah", grades: { "Matematika": 96, "B. Indonesia": 94, "B. Inggris": 98, "PAI": 100, "Tahfidz": 98, "PKK": 95, "PKN": 96, "PJOK": 92, "Informatika": 98 }, history: [90, 93, 95, 96] },
  { nis: "242501019", nama: "Rizky Ramadhan", grades: { "Matematika": 84, "B. Indonesia": 82, "B. Inggris": 80, "PAI": 88, "Tahfidz": 84, "PKK": 82, "PKN": 84, "PJOK": 94, "Informatika": 88 }, history: [78, 81, 83, 85] },
  { nis: "242501020", nama: "Siti Aminah", grades: { "Matematika": 90, "B. Indonesia": 88, "B. Inggris": 85, "PAI": 95, "Tahfidz": 92, "PKK": 88, "PKN": 90, "PJOK": 85, "Informatika": 92 }, history: [84, 87, 89, 90] }
];

const subjects = ["Matematika", "B. Indonesia", "B. Inggris", "PAI", "Tahfidz", "PKK", "PKN", "PJOK", "Informatika"];

const colors = {
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  secondary: '#93C5FD',
  secondaryLight: '#DBEAFE',
  purple: '#8B5CF6',
  orange: '#F59E0B',
  teal: '#10B981',
  pink: '#EC4899',
  gray: '#94A3B8',
  textMuted: '#64748B',
  accentRed: '#EF4444'
};

const mapelColors = [colors.primary, colors.purple, colors.teal, colors.orange, colors.pink, colors.secondary, colors.primaryLight, colors.purple, colors.teal];

let charts = {}; // Store chart instances

document.addEventListener('DOMContentLoaded', () => {
  // Set Teacher Profile
  document.getElementById('sb-teacher-name').textContent = teacherData.nama;
  document.getElementById('sb-avatar').textContent = teacherData.avatar;
  document.getElementById('sb-class').textContent = teacherData.jabatan;
  document.getElementById('header-teacher-name').textContent = teacherData.nama;

  // Set Date
  const dateElement = document.getElementById('current-date');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = new Date().toLocaleDateString('id-ID', options);

  // Initialize UI
  setupSidebar();
  setupNavigation();
  
  // Calculate and Render
  const classStats = calculateClassStats();
  renderDashboardInsights(classStats);
  renderDashboardCharts(classStats);
  renderSummaryTable();
  renderStudentCards();
  renderRanking();

  // Detail Panel Back Button
  document.getElementById('detail-back-btn').addEventListener('click', () => {
    document.getElementById('student-detail-panel').style.display = 'none';
    document.getElementById('student-cards-grid').style.display = 'grid';
  });

  // Scroll-reveal Intersection Observer
  const animateElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animateElements.forEach(el => observer.observe(el));
});

function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('sidebar-close');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
}

function setupNavigation() {
  const links = document.querySelectorAll('.sidebar-link[data-section], .bottom-nav-item[data-section]');
  const sections = document.querySelectorAll('.dash-section');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-section');
      
      sections.forEach(s => s.classList.remove('active'));
      document.getElementById('section-' + target).classList.add('active');

      links.forEach(l => l.classList.remove('active'));
      document.querySelectorAll(`[data-section="${target}"]`).forEach(l => l.classList.add('active'));

      // If switching to students, reset detail view
      if (target === 'students') {
        document.getElementById('student-detail-panel').style.display = 'none';
        document.getElementById('student-cards-grid').style.display = 'grid';
      }

      // Close sidebar on mobile
      if (window.innerWidth < 992) {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
      }
    });
  });
}

function calculateClassStats() {
  const stats = {
    totalStudents: studentsData.length,
    subjectAverages: {},
    semesterAverages: [0, 0, 0, 0],
    highest: { score: 0, mapel: "", student: "" },
    lowest: { score: 100, mapel: "", student: "" },
    classAvg: 0
  };

  subjects.forEach(s => stats.subjectAverages[s] = 0);

  let totalAll = 0;
  studentsData.forEach(student => {
    let studentTotal = 0;
    subjects.forEach(s => {
      const score = student.grades[s];
      stats.subjectAverages[s] += score;
      studentTotal += score;
      if (score > stats.highest.score) stats.highest = { score, mapel: s, student: student.nama };
      if (score < stats.lowest.score) stats.lowest = { score, mapel: s, student: student.nama };
    });
    totalAll += (studentTotal / subjects.length);
    student.history.forEach((h, i) => stats.semesterAverages[i] += h);
  });

  subjects.forEach(s => stats.subjectAverages[s] = (stats.subjectAverages[s] / stats.totalStudents).toFixed(1));
  stats.semesterAverages = stats.semesterAverages.map(avg => (avg / stats.totalStudents).toFixed(1));
  stats.classAvg = (totalAll / stats.totalStudents).toFixed(1);

  return stats;
}

function renderDashboardInsights(stats) {
  document.getElementById('val-total').textContent = stats.totalStudents;
  document.getElementById('val-class-avg').textContent = stats.classAvg;
  document.getElementById('val-class-highest').textContent = stats.highest.score;
  document.getElementById('sub-class-highest').textContent = `${stats.highest.mapel} (${stats.highest.student})`;
  document.getElementById('val-class-lowest').textContent = stats.lowest.score;
  document.getElementById('sub-class-lowest').textContent = `${stats.lowest.mapel} (${stats.lowest.student})`;
}

function renderDashboardCharts(stats) {
  // Bar Chart
  const barCtx = document.getElementById('teacherBarChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: subjects,
      datasets: [{
        label: 'Rata-rata Kelas',
        data: subjects.map(s => stats.subjectAverages[s]),
        backgroundColor: mapelColors,
        borderRadius: 8,
        barThickness: 20
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { 
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 10,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: { 
        y: { 
          beginAtZero: true, 
          max: 100,
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#94A3B8' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#64748B' }
        }
      }
    }
  });

  // Line Chart
  const lineCtx = document.getElementById('teacherLineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
      datasets: [{
        label: 'Rata-rata Kelas',
        data: stats.semesterAverages,
        borderColor: '#2563EB',
        borderWidth: 3,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#2563EB',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#2563EB',
        pointHoverBorderColor: '#FFFFFF',
        pointHoverBorderWidth: 2,
        backgroundColor: 'rgba(37, 99, 235, 0.04)',
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { 
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 10,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: { 
        y: { 
          min: 70, 
          max: 100,
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#94A3B8' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#64748B' }
        }
      }
    }
  });

  // Pie Chart (matching dashboard.html style)
  const pieCtx = document.getElementById('teacherPieChart').getContext('2d');
  const pieData = subjects.map((s, i) => ({
    name: s,
    avg: parseFloat(stats.subjectAverages[s]),
    color: mapelColors[i % mapelColors.length]
  }));

  // Build custom legend
  const legendEl = document.getElementById('teacher-pie-legend-list');
  if (legendEl) {
    legendEl.innerHTML = '';
    const total = pieData.reduce((sum, d) => sum + d.avg, 0);
    pieData.forEach(d => {
      const pct = ((d.avg / total) * 100).toFixed(1);
      const item = document.createElement('div');
      item.className = 'pie-legend-item';
      item.innerHTML = `
        <span class="pie-legend-dot" style="background:${d.color};"></span>
        <span class="pie-legend-name">${d.name}</span>
        <span class="pie-legend-score">${d.avg}</span>
        <span class="pie-legend-pct">${pct}%</span>
      `;
      legendEl.appendChild(item);
    });
  }

  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: pieData.map(d => d.name),
      datasets: [{
        label: 'Rata-rata',
        data: pieData.map(d => d.avg),
        backgroundColor: pieData.map(d => d.color),
        borderWidth: 2,
        borderColor: '#FFFFFF',
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(30, 41, 59, 0.97)',
          titleColor: '#FFFFFF',
          bodyColor: '#93C5FD',
          borderColor: '#3B82F6',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            title: function(items) {
              return items[0].label;
            },
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((context.raw / total) * 100).toFixed(1);
              return `  Rata-rata: ${context.raw}  (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

function renderSummaryTable() {
  const stats = calculateClassStats();
  const tbody = document.getElementById('summary-table-body');
  const semesters = ["Semester 1 (Ganjil)", "Semester 2 (Genap)", "Semester 3 (Ganjil)", "Semester 4 (Genap)"];
  
  stats.semesterAverages.forEach((avg, i) => {
    const tr = document.createElement('tr');
    let badgeClass = avg >= 85 ? 'excellent' : 'good';
    let status = avg >= 85 ? 'Sangat Baik' : 'Baik';
    tr.innerHTML = `
      <td>${semesters[i]}</td>
      <td><strong>${avg}</strong></td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderStudentCards() {
  const grid = document.getElementById('student-cards-grid');
  grid.innerHTML = '';

  studentsData.forEach(student => {
    const avg = (subjects.reduce((sum, s) => sum + student.grades[s], 0) / subjects.length).toFixed(1);
    const card = document.createElement('div');
    card.className = 'student-card reveal';
    card.innerHTML = `
      <div class="scard-header">
        <div class="scard-avatar">${student.nama.split(' ').map(n => n[0]).join('')}</div>
        <div class="scard-info">
          <span class="scard-name">${student.nama}</span>
          <span class="scard-nis">${student.nis}</span>
        </div>
      </div>
      <div class="scard-avg">
        <span class="scard-avg-label">Rata-rata</span>
        <span class="scard-avg-val">${avg}</span>
      </div>
    `;
    card.addEventListener('click', () => showStudentDetail(student.nis));
    grid.appendChild(card);
  });
}

function showStudentDetail(nis) {
  const student = studentsData.find(s => s.nis === nis);
  if (!student) return;

  document.getElementById('student-cards-grid').style.display = 'none';
  document.getElementById('student-detail-panel').style.display = 'block';

  // Update Profile
  document.getElementById('detail-name').textContent = student.nama;
  document.getElementById('detail-nis').textContent = `NIS: ${student.nis}`;
  document.getElementById('detail-avatar').textContent = student.nama.split(' ').map(n => n[0]).join('');
  const avg = (subjects.reduce((sum, s) => sum + student.grades[s], 0) / subjects.length).toFixed(1);
  document.getElementById('detail-avg').textContent = avg;

  // Best Subject
  let best = { name: subjects[0], score: student.grades[subjects[0]] };
  subjects.forEach(s => {
    if (student.grades[s] > best.score) best = { name: s, score: student.grades[s] };
  });
  document.getElementById('best-subject-name').textContent = best.name;
  document.getElementById('best-subject-score').textContent = best.score;

  // Render Charts & Grids
  renderDetailBarChart(student);
  renderDetailGrades(student);
  renderDetailReports(student);
}

function renderDetailBarChart(student) {
  const ctx = document.getElementById('detailBarChart').getContext('2d');
  if (charts.detailBar) charts.detailBar.destroy();

  charts.detailBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: subjects,
      datasets: [{
        label: 'Nilai Siswa',
        data: subjects.map(s => student.grades[s]),
        backgroundColor: mapelColors,
        borderRadius: 8,
        barThickness: 20
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { 
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          padding: 10,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: { 
        y: { 
          beginAtZero: true, 
          max: 100,
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#94A3B8' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#64748B' }
        }
      }
    }
  });
}

function renderDetailGrades(student) {
  const grid = document.getElementById('detail-grades-grid');
  grid.innerHTML = '';
  subjects.forEach((s, i) => {
    const score = student.grades[s];
    const card = document.createElement('div');
    card.className = 'subject-card reveal visible'; // add visible immediately since detail view doesn't scroll much initially
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${s}</span>
        <span class="scard-score" style="color: ${mapelColors[i]}">${score}</span>
      </div>
      <div class="scard-progress-bg">
        <div class="scard-progress-fill" style="width: ${score}%; background-color: ${mapelColors[i]}"></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderDetailReports(student) {
  const grid = document.getElementById('detail-report-grid');
  grid.innerHTML = '';
  subjects.forEach((s, i) => {
    const score = student.grades[s];
    const card = document.createElement('div');
    card.className = 'subject-card reveal visible'; // add visible immediately
    card.style.borderLeft = `4px solid ${mapelColors[i]}`;
    const desc = score >= 85 ? "Sangat Memuaskan. Pertahankan prestasimu!" : (score >= 75 ? "Hasil cukup baik. Tingkatkan lagi di semester depan." : "Perlu bimbingan lebih lanjut.");
    card.innerHTML = `
      <div class="scard-header">
        <span class="scard-title">${s}</span>
        <span class="scard-score">${score}</span>
      </div>
      <p style="font-size:0.875rem; color:#64748B; margin-top:0.5rem;">${desc}</p>
    `;
    grid.appendChild(card);
  });
}

function renderRanking() {
  const rankedStudents = studentsData.map(s => {
    const total = subjects.reduce((sum, sub) => sum + s.grades[sub], 0);
    const avg = parseFloat((total / subjects.length).toFixed(1));
    return { ...s, total, avg };
  }).sort((a, b) => b.avg - a.avg);

  // Podium
  const podiumContainer = document.getElementById('podium-container');
  const top5 = rankedStudents.slice(0, 5);
  // Reorder for podium visual: 4, 2, 1, 3, 5
  const visualTop5 = [top5[3], top5[1], top5[0], top5[2], top5[4]];
  
  podiumContainer.innerHTML = visualTop5.map((s, i) => {
    const rank = rankedStudents.indexOf(s) + 1;
    const heights = { 1: '80%', 2: '70%', 3: '60%', 4: '50%', 5: '40%' };
    const colors = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32', 4: '#60A5FA', 5: '#94A3B8' };
    return `
      <div class="podium-item" style="height: ${heights[rank]}">
        <span class="podium-rank">${rank}</span>
        <div class="podium-bar" style="background: ${colors[rank]}">
          <span class="podium-name">${s.nama.split(' ')[0]}</span>
          <span class="podium-avg">${s.avg}</span>
        </div>
      </div>
    `;
  }).join('');

  // Table
  const tbody = document.getElementById('ranking-table-body');
  rankedStudents.forEach((s, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${s.nama}</td>
      <td>${s.total}</td>
      <td><strong>${s.avg}</strong></td>
      <td><span class="badge ${s.avg >= 85 ? 'excellent' : 'good'}">${s.avg >= 85 ? 'Lulus (Baik)' : 'Lulus'}</span></td>
    `;
    tbody.appendChild(tr);
  });
}