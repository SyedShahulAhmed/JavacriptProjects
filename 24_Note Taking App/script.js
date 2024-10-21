const btn = document.querySelector('.btn');
const App = document.querySelector('.notes');

getnotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    App.insertBefore(noteEl, btn);
});

function createNoteEl(id, content) {
    const Ele = document.createElement("textarea");
    Ele.classList.add("note");
    Ele.placeholder = "Empty Note";
    Ele.value = content;

    Ele.addEventListener('dblclick', () => {
        const warn = confirm("Note will be deleted");
        if (warn) {
            deleteNote(id, Ele);
        }
    });

    Ele.addEventListener("input", () => {
        updatenote(id, Ele.value);
    });
    return Ele;
}

function deleteNote(id, Ele) {
    const notes = getnotes().filter((note) => note.id != id);
    savenote(notes);
    App.removeChild(Ele);
}

function updatenote(id, content) {
    const notes = getnotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    savenote(notes);
}

function addnote() {
    const notes = getnotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    App.insertBefore(noteEl, btn);
    notes.push(noteObj);
    savenote(notes);
}

function savenote(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getnotes() {
    return JSON.parse(localStorage.getItem("notes") || "[]");
}

btn.addEventListener("click", addnote);
