import React, { useState } from 'react';
import questions from './data';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';


function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className='container'>
      <h3>questions and answers</h3>
      <section className='info'>
        {questions.map(ques => {
          return <Question key={ques.id} {...ques}/>
        })}
      </section>
    </div>
    );
}

export default App;


//iterate over list of questions