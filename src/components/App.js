import React from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <AdminNavBar />
          <Route path="/question-form">
            <QuestionForm />
          </Route>
          <Route path="/question-list">
            <QuestionList />
          </Route>
          <Route exact path="/">
            <Redirect to="/question-list" />
          </Route>
        </BrowserRouter>
    </main>
  );
}

export default App;
