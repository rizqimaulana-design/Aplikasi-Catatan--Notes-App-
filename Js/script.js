const addNoteBtn = document.getElementsById("addNote");
const notesContainer = document.getElementById("notesContainer");

//Ambil catatan dari localstronge
function loadNotes(){
    const notes = JSON.parse(localStorange.getItem("notes")) || [];
    notes.forEach(note => createNote(note));
}

//simpan semua catatan
function saveNotes(){
    const notes = [];
    document.querySelectorAll(".note textarea").forEach(textarea => {
        notes.push(textarea.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

//buat catatan baru
function createNote(text = ""){
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const textarea = document.createElement(textarea);
    textarea.value = text;

    const deleteBtn = ducument.createElement("span");
    deleteBtn.innerHTML = "❌";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => {
       noteDiv.remove();
       saveNotes(); 
    };

    noteDiv.appendChild(deleteBtn);
    noteDiv.appendChild(textarea);
    notesContainer.appendChild(noteDiv);
}