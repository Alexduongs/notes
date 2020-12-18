import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './components/List'
import Editor from './components/Editor'
import Form from './examples/Form'
import {getNotes} from './helpers/notes'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container>
      <Jumbotron>
        <h1>Notes</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={4}>
          <Button onClick={onClickNewNote} className="mb-4" variant="dark" block>
            New note
          </Button>
          <List notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>
        <Col xs={12} md={8}>
          {/*<Editor />*/}
          <Form refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
