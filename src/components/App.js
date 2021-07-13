import React, { useState, useEffect } from "react"

import AdminNavBar from "./AdminNavBar"
import QuestionForm from "./QuestionForm"
import QuestionList from "./QuestionList"

const App = () => {
  const [page, setPage] = useState("List")
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  const deleteQuestion = (id) => {
    const configObject = { method: "DELETE" }

    const updatedQuestionsList = questions.filter(question => question.id !== id)

    fetch(`http://localhost:4000/questions/${id}`, configObject)
      .then(setQuestions(updatedQuestionsList))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions} /> : <QuestionList deleteQuestion={deleteQuestion} questions={questions} />}
    </main>
  )
}

export default App
