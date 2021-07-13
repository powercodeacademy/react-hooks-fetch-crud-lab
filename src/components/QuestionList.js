import React from "react"

import QuestionItem from "./QuestionItem"

function QuestionList({ questions }) {
  const questionComponents = questions.map(question => (
    <QuestionItem
        key={question.id}
        question={question}
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
