
function runScan() {
  alert("Running scan...");
}

function getReports() {
  alert("Getting reports...");
}

function sendPhoto() {
  alert("Sending photo...");
}

function openSettings() {
  alert("Opening settings...");
}

window.onload = function () {
  const ctx = document.getElementById('scanChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Safe', 'Warnings', 'Critical'],
      datasets: [{
        label: 'Scan Results',
        data: [60, 25, 15],
        backgroundColor: ['#00e676', '#ffeb3b', '#f44336'],
      }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
};
