// function renderNotes(notesToRender = notes){
//     notesContainer.innerHTML = "";

//     notesToRender.forEach((note, index) => {
//         const noteElement = document.createElement("div");
//         noteElement.className = "note-card fade-in";
//         noteElement.innerHTML = `
//             <div class="note-content">
//                 <div class="note-header">
//                     <h3 class="note-title">${note.title}</h3>
//                     <div class="note-actions">
//                         <button class="delete-btn" data-id="${index}">
//                             <i class="fas fa-trash"></i>
//                         </button>
//                     </div>
//                 </div>
//                 <p class="note-text">${note.content}</p>
//                 <div class="note-footer">
//                     <span class="note-tag ${getTagClass(note.tag)}">
//                         ${getTagIcon(note.tag)} ${getTagName(note.tag)}
//                     </span>
//                     <span class="note-date">${formatDate(note.date)}</span>
//                 </div>
//             </div>
//         `;

//         notesContainer.appendChild(noteElement);
//     });

//     // Add delete event listener
//     document.querySelectorAll(".delete-btn").forEach((btn) => {
//         btn.addEventListener("click", function() {
//             noteToDeleteID = parseInt(this.getAttribute("data-id"));
//             openConfirmModal();
//         });
//     });
// }


// function getTagClass(tag){
//     const classes = {
//         work:"tag-work",
//         personal:"tag-personal",
//         ideas:"tag-ideas",
//         reminder:"tag-reminder",
//     };
//     return classes[tag] || "";
// }

// function getTagIcon(tag){
//     const icons = {
//         work:'<i<class="fans fa-briefcase"></i>',
//         personal: '<i class="fas fa-user"></i>',
//         ideas:'<i class="fas fa-ligthbulb"></i>',
//         reminder: '<i class="fas fa-bell"></i>',
//     };
//     return icons[tag] || "";
// }


// function getTagName(tag){
//     const names = {
//         work:"work",
//         personal:"personal",
//         ideas:"Ideas",
//         reminder:"Reminder",
//     };
//     return names[tag] || tag;
// }

// function formatDate(dateString){
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//         day:"2-digit",
//         month:"2-digit",
//         year:"numeric",
//         hour:"2-digit",
//         minute:"2-digit",
//     });
// }

// function opeAddNoteModal(){
//     opeAddNoteModal.classList.add("active");
//     document.body.style.overflow = "hidden";
// }

// function closeAddNoteModal(){
//     opeAddNoteModal.classList.remove("active");
//     document.body.style.overflow = "auto";
//     noteForm.reset();
// }

// function openConfirmModal(){
//     openConfirmModal.classList.add("active");
//     document.body.style.overflow = "hidden";
// }

// function colseConfirmModal(){
//     colseConfirmModal.classlist.remove("active");
//     document.body.style.overflow = "auto";
//     noteToDeleteID = null;
// }

// function handelNoteSubmit(e){
//     e.preventDefault();

//     const title = document.getElementById("notetitle").value;
//     const content = document.getElementById("noteContent").value;
//     const tag = document.querySelector(
//         'input[name="noteTag"]: checked'
//     ).value;

//     const newNote = {
//         title,
//         content,
//         tag,
//         date: new Date().toISOString(),
//     };

//     notes.unshift(newNote);
//     saveNotes();
//     renderNotes();
//     closeAddNoteModal();
//     updatemptyState();
//     filterNotes();
// }

// function confirmDeleteNote(){
//     if(noteToDeleteID !== null){
//         notes.splice(noteToDeleteId, 1);
//         saveNotes();
//         renderNotes();
//         updatemptyState();
//         filterNotes();
//         colseConfirmModal();
//     }
// }

// function saveNotes(){
//     localStorage.setItem("notes", JSON.stringify(notes));
// }

// function filterNotes(){
//     const searchTerm = searchInput.value.toLowerCase();
//     const filterValue = filterSelect.value;
//     let filteredNotes = notes;

//     if(searchTerm){
//         filteredNotes = filteredNotes.filter((note) => note.title.toLowerCase().includes(searchTerm)) || note.content.toLowerCase().includes(searchTerm);
//     }

//     if(filterValue !== "all"){
//         filteredNotes = filteredNotes.filter((note) => note.tag === filterValue);
//     }

//     renderNotes(filterNotes);
//     updatemptyState(filteredNotes);
// }

// function updatemptyState(notesToCheck = notes){
//     if(notesToCheck.length === 0){
//         emptyState.style.display = "block";
//     }else{
//         emptyState.style.display = "none";
//     }
// }


// ======= Select DOM Elements =======
const notesContainer = document.getElementById("notesContainer");
const addNoteBtn = document.getElementById("addNoteBtn");
const addNoteModal = document.getElementById("addNoteModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const noteForm = document.getElementById("noteForm");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const emptyState = document.getElementById("emptyState");
const confirmModal = document.getElementById("confirmModal");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let noteToDeleteID = null;

// ======= Render Notes =======
function renderNotes(notesToRender = notes) {
  notesContainer.innerHTML = "";

  notesToRender.forEach((note, index) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note-card fade-in";
    noteElement.innerHTML = `
      <div class="note-content">
        <div class="note-header">
          <h3 class="note-title">${note.title}</h3>
          <div class="note-actions">
            <button class="delete-btn" data-id="${index}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <p class="note-text">${note.content}</p>
        <div class="note-footer">
          <span class="note-tag ${getTagClass(note.tag)}">
            ${getTagIcon(note.tag)} ${getTagName(note.tag)}
          </span>
          <span class="note-date">${formatDate(note.date)}</span>
        </div>
      </div>
    `;
    notesContainer.appendChild(noteElement);
  });

  // Add delete listeners
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      noteToDeleteID = parseInt(this.getAttribute("data-id"));
      openConfirmModal();
    });
  });
}

// ======= Tag Helpers =======
function getTagClass(tag) {
  const classes = {
    work: "tag-work",
    personal: "tag-personal",
    ideas: "tag-ideas",
    reminders: "tag-reminders",
  };
  return classes[tag] || "";
}

function getTagIcon(tag) {
  const icons = {
    work: '<i class="fas fa-briefcase"></i>',
    personal: '<i class="fas fa-user"></i>',
    ideas: '<i class="fas fa-lightbulb"></i>',
    reminders: '<i class="fas fa-bell"></i>',
  };
  return icons[tag] || "";
}

function getTagName(tag) {
  const names = {
    work: "Work",
    personal: "Personal",
    ideas: "Ideas",
    reminders: "Reminders",
  };
  return names[tag] || tag;
}

// ======= Format Date =======
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ======= Modal Functions =======
function openAddNoteModal() {
  addNoteModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAddNoteModal() {
  addNoteModal.classList.remove("active");
  document.body.style.overflow = "auto";
  noteForm.reset();
}

function openConfirmModal() {
  confirmModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeConfirmModal() {
  confirmModal.classList.remove("active");
  document.body.style.overflow = "auto";
  noteToDeleteID = null;
}

// ======= Add Note =======
function handleNoteSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();
  const tagInput = document.querySelector('input[name="noteTag"]:checked');

  if (!title || !content || !tagInput) return;

  const newNote = {
    title,
    content,
    tag: tagInput.value,
    date: new Date().toISOString(),
  };

  notes.unshift(newNote);
  saveNotes();
  renderNotes();
  closeAddNoteModal();
  updateEmptyState();
  filterNotes();
}

// ======= Delete Note =======
function confirmDeleteNote() {
  if (noteToDeleteID !== null) {
    notes.splice(noteToDeleteID, 1);
    saveNotes();
    renderNotes();
    updateEmptyState();
    filterNotes();
    closeConfirmModal();
  }
}

// ======= LocalStorage =======
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// ======= Search & Filter =======
function filterNotes() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  let filteredNotes = notes;

  if (searchTerm) {
    filteredNotes = filteredNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm)
    );
  }

  if (filterValue !== "all") {
    filteredNotes = filteredNotes.filter((note) => note.tag === filterValue);
  }

  renderNotes(filteredNotes);
  updateEmptyState(filteredNotes);
}

// ======= Empty State =======
function updateEmptyState(notesToCheck = notes) {
  if (notesToCheck.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

// ======= Event Listeners =======
addNoteBtn.addEventListener("click", openAddNoteModal);
closeModalBtn.addEventListener("click", closeAddNoteModal);
noteForm.addEventListener("submit", handleNoteSubmit);
searchInput.addEventListener("input", filterNotes);
filterSelect.addEventListener("change", filterNotes);
confirmDelete.addEventListener("click", confirmDeleteNote);
cancelDeleteBtn.addEventListener("click", closeConfirmModal);

// ======= Init App =======
renderNotes();
updateEmptyState();
