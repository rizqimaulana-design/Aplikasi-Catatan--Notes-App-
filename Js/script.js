document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById("addNote");
    const notesContainer = document.getElementById("notesContainer");

    // Ambil catatan dari localStorage
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(note => createNote(note));
    }

    // Simpan semua catatan
    function saveNotes() {
        const notes = [];
        document.querySelectorAll(".note textarea").forEach(textarea => {
            notes.push(textarea.value);
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    // Buat catatan baru
    function createNote(text = "") {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.addEventListener("input", saveNotes);

        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "❌";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => {
            noteDiv.remove();
            saveNotes();
        };

        noteDiv.appendChild(textarea);
        noteDiv.appendChild(deleteBtn);
        notesContainer.appendChild(noteDiv);
    }

    // Tambah catatan baru
    addNoteBtn.addEventListener("click", () => {
        createNote();
        saveNotes();
    });

    // Load saat halaman dibuka
    loadNotes();
});
