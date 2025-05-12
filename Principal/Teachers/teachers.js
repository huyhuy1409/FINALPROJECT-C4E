// Sample starting teacher data (your original 8 cards)
let teachers = [
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Dimitres Viga", subject: "Mathematics" },

];

let currentPage = 1;
const itemsPerPage = 12;

const teacherContainer = document.getElementById("teacherContainer");
const teacherTab = document.getElementById("teacherTab");

document.getElementById("openTabButton").addEventListener("click", function () {
  teacherTab.classList.toggle("hidden");
});

document.getElementById("saveButton").addEventListener("click", function () {
  const name = document.getElementById("teacherName").value.trim();
  const subject = document.getElementById("subject").value.trim();

  if (name && subject) {
    teachers.push({ name, subject });
    teacherTab.classList.add("hidden");
    document.getElementById("teacherName").value = "";
    document.getElementById("subject").value = "";
    renderTeachers();
    updatePagination();
  } else {
    alert("Please enter both teacher name and subject.");
  }
});

function renderTeachers() {
  teacherContainer.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedTeachers = teachers.slice(start, end);

  paginatedTeachers.forEach((teacher, indexOnPage) => {
    const index = start + indexOnPage;

    const card = document.createElement("div");
    card.className = "relative boxteacher bg-white flex flex-col rounded-[20px] gap-8 items-center justify-center p-6 w-full max-w-[338px] h-[352px]";

    card.innerHTML = `
            <div class="absolute top-4 right-4 text-gray-400 flex space-x-1 cursor-pointer" onclick="toggleMenu(this)">
        <span class="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        <span class="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        <span class="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
      </div>

      <div class="hidden dropdown-menu absolute top-12 right-4 bg-white shadow-lg rounded-md py-2 w-28 z-10">
        <button onclick="openEditModal(${index})" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
        <button onclick="deleteTeacher(${index})" class="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">Delete</button>
      </div>

      <div class="flex flex-col items-center justify-between h-[216px] w-full max-w-[168px]">
        <div class="h-[120px] w-[120px] rounded-full bg-[#C1BBEB]"></div>
        <p class="font-bold text-[24px] text-[#303972] text-center">${teacher.name}</p>
        <p class="font-normal text-[18px] text-[#A098AE] text-center">${teacher.subject}</p>
      </div>

      <div class="flex justify-between items-center w-[96px]">
        <div class="h-[40px] w-[40px] bg-[#4D44B5] rounded-full flex items-center justify-center">
          <img src="Vector (1).png" class="w-[20px] h-[20px]" alt="Social" />
        </div>
        <div class="h-[40px] w-[40px] bg-[#4D44B5] rounded-full flex items-center justify-center">
          <img src="Email.png" class="w-[20px] h-[20px]" alt="Email" />
        </div>
      </div>
    `;
    teacherContainer.appendChild(card);
  });
}
function updatePagination() {
  const totalPages = Math.ceil(teachers.length / itemsPerPage);
  const pagination = document.getElementById("paginationContainer");

  // Clear all except prev/next
  pagination.innerHTML = `
    <a href="#" class="p-2 text-gray-400 hover:text-gray-600" onclick="changePage('prev')">◀</a>
  `;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <a href="#" onclick="changePage(${i})"
        class="w-8 h-8 flex items-center justify-center border rounded-full ${
          i === currentPage ? "bg-[#4D44B5] text-white" : "bg-white text-gray-700 hover:bg-[#4D44B5] hover:text-white"
        }">${i}</a>
    `;
  }

  pagination.innerHTML += `
    <a href="#" class="p-2 text-gray-400 hover:text-gray-600" onclick="changePage('next')">▶</a>
  `;
}

function changePage(dir) {
  const totalPages = Math.ceil(teachers.length / itemsPerPage);
  if (dir === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (dir === 'next' && currentPage < totalPages) {
    currentPage++;
  } else if (typeof dir === 'number') {
    currentPage = dir;
  }
  renderTeachers();
  updatePagination();
}
let editIndex = null;

function openEditModal(index) {
  editIndex = index;
  document.getElementById("teacherNameInput").value = teachers[index].name;
  document.getElementById("teacherJobInput").value = teachers[index].subject;
  document.getElementById("editModal").classList.remove("hidden");
}

function closeEditModal() {
  document.getElementById("editModal").classList.add("hidden");
  editIndex = null;
}

function saveChanges() {
  const newName = document.getElementById("teacherNameInput").value.trim();
  const newSubject = document.getElementById("teacherJobInput").value.trim();

  if (editIndex !== null && newName && newSubject) {
    teachers[editIndex] = { name: newName, subject: newSubject };
    renderTeachers();
    closeEditModal();
  }
}
function deleteTeacher(index) {
  if (confirm("Delete this teacher?")) {
    teachers.splice(index, 1);
    if ((currentPage - 1) * itemsPerPage >= teachers.length) {
      currentPage = Math.max(1, currentPage - 1);
    }
    renderTeachers();
    updatePagination();
  }
}
function toggleMenu(button) {
  const menu = button.parentElement.querySelector(".dropdown-menu");
  menu.classList.toggle("hidden");
}
renderTeachers();
updatePagination();

