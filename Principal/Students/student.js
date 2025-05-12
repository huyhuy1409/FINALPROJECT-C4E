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
const students = [
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  },
  {
    name: "Samanta William",
    id: "123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A"
  }
];

const itemsPerPage = 7;
let currentPage = 1;

// Elements
const tableBody = document.querySelector("tbody");
const paginationContainer = document.querySelector(".flex.flex-col.md\\:flex-row.items-center.justify-between.p-4.gap-4");
const teacherTab = document.getElementById("teacherTab");

document.getElementById("openTabButton").addEventListener("click", function() {
    teacherTab.classList.toggle("hidden");
});

document.getElementById("saveButton").addEventListener("click", function() {
    const name = document.getElementById("teacherName").value;
    const id = document.getElementById("subject").value;

    if (name && id) {
        students.push({
            name,
            id,
            date: new Date().toLocaleDateString(),
            parent: "N/A",
            city: "N/A",
            grade: "VII A"
        });
        document.getElementById("teacherName").value = "";
        document.getElementById("subject").value = "";
        teacherTab.classList.add("hidden");

        renderTable();
        updatePagination();
    } else {
        alert("Please enter both student name and ID.");
    }
});

function renderTable() {
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentStudents = students.slice(start, end);

    for (let student of currentStudents) {
        const row = document.createElement("tr");
        row.className = "bg-white border-b hover:bg-blue-50 cursor-pointer";

        row.innerHTML = `
            <td class="p-3"><input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" /></td>
            <td class="flex items-center px-4 py-3 whitespace-nowrap">
                <div class="w-10 h-10 rounded-full bg-purple-300 mr-3"></div>
                <div class="font-medium">${student.name}</div>
            </td>
            <td class="px-4 py-3 hidden md:table-cell text-blue-600 font-semibold">#${student.id}</td>
            <td class="px-4 py-3 hidden lg:table-cell">${student.date}</td>
            <td class="px-4 py-3 hidden md:table-cell">${student.parent}</td>
            <td class="px-4 py-3 hidden lg:table-cell">${student.city}</td>
            <td class="px-4 py-3 flex items-center space-x-2">
                <button class="bg-purple-100 p-2 rounded-full text-purple-500">📞</button>
                <button class="bg-purple-100 p-2 rounded-full text-purple-500">✉️</button>
            </td>
            <td class="px-4 py-3">
                <span class="bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">${student.grade}</span>
            </td>
            <td class="px-4 py-3 text-right relative">
                <button onclick="toggleMenu(this)" class="text-gray-400 hover:text-gray-600 focus:outline-none">⋮</button>
                <div class="hidden absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-10">
                    <a href="#" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                    <button class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    }
}

function updatePagination() {
    const totalPages = Math.ceil(students.length / itemsPerPage);
    const paginationButtons = paginationContainer.querySelectorAll("a[id^='page']");
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    paginationButtons.forEach(btn => btn.remove());

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("a");
        btn.href = "#";
        btn.id = "page" + i;
        btn.textContent = i;
        btn.className = `w-8 h-8 flex items-center justify-center border rounded-full ${i === currentPage ? 'bg-[#4D44B5] text-white' : 'bg-white text-gray-700 hover:bg-[#4D44B5] hover:text-white'}`;
        btn.addEventListener("click", () => {
            currentPage = i;
            renderTable();
            updatePagination();
        });
        nextBtn.before(btn);
    }

    prevBtn.classList.toggle("disabled", currentPage === 1);
    nextBtn.classList.toggle("disabled", currentPage === totalPages || totalPages === 0);
}

// Pagination control functions
function changePage(direction) {
    const totalPages = Math.ceil(students.length / itemsPerPage);
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    renderTable();
    updatePagination();
}

// Hook prev/next to global scope
window.changePage = changePage;
window.toggleMenu = function(button) {
    const menu = button.nextElementSibling;
    menu.classList.toggle("hidden");
};

// Initial render
renderTable();
updatePagination();

