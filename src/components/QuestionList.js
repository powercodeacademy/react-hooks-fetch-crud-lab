import React from "react"

import QuestionItem from "./QuestionItem"

function QuestionList({ deleteQuestion, questions, setQuestions }) {
  const questionComponents = questions.map(question => (
    <QuestionItem
        key={question.id}
        deleteQuestion={deleteQuestion}
        question={question}
        questions={questions}
        setQuestions={setQuestions}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionComponents}</ul>
    </section>
  );
}

export default QuestionList;
