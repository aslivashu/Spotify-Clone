const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');

progressBar.addEventListener('click', function(e) {
   const clickX = e.offsetX;
   const width = progressBar.offsetWidth;
   const percentage = (clickX / width) * 100;
   
   progressFill.style.width = percentage + '%';
});

// Optional: Add dragging functionality
let isDragging = false;

progressBar.addEventListener('mousedown', function(e) {
   isDragging = true;
   updateProgress(e);
});

document.addEventListener('mousemove', function(e) {
   if (isDragging) {
      updateProgress(e);
   }
});

document.addEventListener('mouseup', function() {
   isDragging = false;
});

function updateProgress(e) {
   const rect = progressBar.getBoundingClientRect();
   const clickX = e.clientX - rect.left;
   const width = progressBar.offsetWidth;
   const percentage = Math.max(0, Math.min(100, (clickX / width) * 100));
   
   progressFill.style.width = percentage + '%';
}

// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('show');
});

sidebarOverlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 420) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        }
    }
});