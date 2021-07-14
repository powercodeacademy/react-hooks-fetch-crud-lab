import React from "react";

function QuestionItem({ deleteQuestion, question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ))

  const handleChangeAnswer = (event) => {
    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correctIndex: parseInt(event.target.value)})
    }

    fetch(`http://localhost:4000/questions/${id}`, configObject)
      .then(response => response.json())
      .then(data => { // `data` is the entire object that was just updated
        const updatedQuestions = questions.map(question => {
          if (question.id === data.id) {
            return data
          } else {
            return question
          }
        })
        setQuestions(updatedQuestions)
        alert(`The answer for question ${id} was changed to the index of ${event.target.value}!`)
      })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeAnswer}>{options}</select>
      </label>
      <button onClick={() => deleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
