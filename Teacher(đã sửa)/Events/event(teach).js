const menuButton = document.getElementById('menuButton');
                    const dropdownMenu = document.getElementById('dropdownMenu');
                  
                    menuButton.addEventListener('click', () => {
                      dropdownMenu.classList.toggle('hidden');
                    });
                  
                    // Optional: hide dropdown if click outside
                    window.addEventListener('click', (e) => {
                      if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                        dropdownMenu.classList.add('hidden');
                      }
                    });
                    const bellButton = document.getElementById('bellButton');
                    const newsBoard = document.getElementById('newsBoard');
                    const viewMoreModal = document.getElementById('modalOverlay');
                    const closeModal = document.getElementById('closeModal');
                    const viewAll = document.getElementById('viewAll');
                  
                    bellButton.addEventListener('click', () => {
                      newsBoard.classList.toggle('hidden');
                    });
                  
                    window.addEventListener('click', (e) => {
                      if (!bellButton.contains(e.target) && !newsBoard.contains(e.target)) {
                        newsBoard.classList.add('hidden');
                      }
                    });
                  
                    viewAll.addEventListener('click', () => {
                      viewMoreModal.classList.remove('hidden');
                    });
                  
                    closeModal.addEventListener('click', () => {
                      viewMoreModal.classList.add('hidden');
                    });
                    // Modal elements
const openModalBtn = document.getElementById('newScheduleButton');
const modal = document.getElementById('newScheduleModal');
const closeModalBtn = document.getElementById('closeScheduleBtn');
const saveBtn = document.getElementById('saveScheduleBtn');

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
  const title = document.getElementById('scheduleTitle').value.trim();
  const day = document.getElementById('scheduleDay').value.trim();

  if (!title || !day || day < 1 || day > 31) {
    alert("Please enter a valid title and day (1–31).");
    return;
  }

  // Find all day boxes in the calendar
  const dayBoxes = document.querySelectorAll('.grid.grid-cols-7 > div');
  for (const box of dayBoxes) {
    const dateEl = box.querySelector('div');
    if (dateEl && dateEl.textContent.trim() === day) {
      // Make sure parent is relative for absolute positioning
      box.classList.add('relative');

      // Look for or create a label stack container
      let stack = box.querySelector('.schedule-label-stack');
      if (!stack) {
        stack = document.createElement('div');
        stack.className = 'schedule-label-stack absolute bottom-2 left-2 flex flex-col space-y-1';
        box.appendChild(stack);
      }

      // Create new label
      const label = document.createElement('div');
      label.className = 'bg-[#4D44B5] text-white text-xs px-2 py-[2px] rounded';
      label.textContent = title;

      stack.appendChild(label);
      break;
    }
  }

  modal.classList.add('hidden');
  document.getElementById('scheduleTitle').value = '';
  document.getElementById('scheduleDay').value = '';
});