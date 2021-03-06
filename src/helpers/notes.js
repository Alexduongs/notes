/*
C: create a note
R: Read (get) one note and all notes
U: Update a note
D: Delete a note
*/

const notes = getNotes()

function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

export function getNotes() {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    notes = initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function createNote(title, body) {
  const notes = getNotes()
  const newNote = {
    id: Date.now(),
    title,
    body,
  }
  notes.push(newNote)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getNote(id) {
  return notes.find((note) => note.id === id)
}

export function updateNote(id, title, body) {
  const notes = getNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }

  notes.splice(indexToUpdate, 1)
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return note
}

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return true
}
