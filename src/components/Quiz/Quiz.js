
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function QuestionComponent() {
  const questionObject = useLoaderData()
  //console.log(questionObject)

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedAnswers(prevSelectedAnswers => ({
      ...prevSelectedAnswers,
      [questionId]: selectedOption
    }));
  };

  const checkAnswer = (questionId) => {
    const selectedOption = selectedAnswers[questionId];
    const correctAnswer = questionObject.data.questions.find(q => q.id === questionId).correctAnswer;

    if (selectedOption === correctAnswer) {
      alert("Correct answer!");
    } else {
      alert("Wrong answer. Please try again.");
    }
  };

  return (
    <div className=' mt-9'>
      {questionObject.data.questions.map((question) => (
        <div className=' w-100 h-50 bg-lime-500 rounded-md border-2 border-red-500 border-solid mt-3' key={question.id}>
          <div  dangerouslySetInnerHTML={{ __html: question.question }} />
          {question.options.map((option, index) => (
            <div className='rounded-md border-2 border-red border-solid m-10' key={index}>
              <input g-gradient-to-br from-pink-500 to-orange-400
                type="radio"
                name={`question_${question.id}`}
                value={option}
                onChange={() => handleOptionSelect(question.id, option)}
                checked={selectedAnswers[question.id] === option}
              />
              {option}
            </div>
          ))}
          
          <button onClick={() => checkAnswer(question.id)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2">Check Answer</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionComponent;










