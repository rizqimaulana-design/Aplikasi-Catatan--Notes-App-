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