const addNoteBtn = document.getElementsById("addNote");
const notesContainer = document.getElementById("notesContainer");

//Ambil catatan dari localstronge
function loadNotes(){
    const notes = JSON.parse(localStorange.getItem("notes")) || [];
    notes.forEach(note => createNote(note));
}