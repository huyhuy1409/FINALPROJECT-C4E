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

                  function toggleChat(show) {
                    const chatbox = document.getElementById('chatbox');
                    if (show) {
                      chatbox.classList.remove('hidden');
                      chatbox.classList.add('flex');
                    } else {
                      chatbox.classList.remove('flex');
                      chatbox.classList.add('hidden');
                    }
                  }
                

  function toggleModal(show) {
    const modal = document.getElementById('studentModal');
    if (show) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  }

