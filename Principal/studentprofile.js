function updateProfilePic(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profileImage').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
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
                
                  bellButton.addEventListener('click', () => {
                    newsBoard.classList.toggle('hidden');
                  });
                
                  // Optional: close when clicking outside
                  window.addEventListener('click', (e) => {
                    if (!bellButton.contains(e.target) && !newsBoard.contains(e.target)) {
                      newsBoard.classList.add('hidden');
                    }
                  });