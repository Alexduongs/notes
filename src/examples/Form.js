import React, {useState, useEffect} from 'react'
import BootstrapForm from 'react-bootstrap/Form'
import {createNote, getNotes, updateNote, deleteNote} from '../helpers/notes'

export default function Form({selectedNote, refreshList}) {
  const [title, setTitle] = useState('')
  const STATUS_INITIAL_VALUE = ''
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('')
  }, [selectedNote])

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 2000)
  }, [status])

  const onChangeTitle = (e) => setTitle(e.target.value)

  const onSave = (e) => {
    e.preventDefault()
    setTitle('')
    setStatus('SAVED!')
    if (selectedNote) {
      updateNote(selectedNote.id, title)
      return refreshList()
    }

    createNote(title, '')
    refreshList()
  }

  const onDelete = (e) => {
    e.preventDefault()
    setStatus('DELETED!')
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    setTitle('')
  }

  return (
    <BootstrapForm>
      <BootstrapForm.Group>
        <BootstrapForm.Control className="mb-4" size="lg" value={title} onChange={onChangeTitle} />
      </BootstrapForm.Group>
      <button style={{marginRight: 10}} onClick={onSave}>
        Save
      </button>
      {selectedNote && <button onClick={onDelete}>Delete</button>}
      {status && <p>{status}</p>}
    </BootstrapForm>
  )
}
