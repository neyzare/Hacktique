'use client';

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  index: number;
};

type QuizProps = {
  titre?: string;
  questions: Question[];
};

function Quiz({ titre = "Quiz", questions }: QuizProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectionOption, setSelectionOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizzFini, setQuizFini] = useState(false);

  function questionSuivante() {
    if (selectionOption === questions[questionIndex].index) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
      setSelectionOption(null);
    } else {
      setQuizFini(true);
    }
  }

  return (
    <>
      <div className="card lg:card-side bg-white border-2 border-black shadow-sm mt-7">
        <figure>

        </figure>
        <div className="card-body">
          <h2 className="card-title">Quiz</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary .bg-custom">Suivant</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Quiz