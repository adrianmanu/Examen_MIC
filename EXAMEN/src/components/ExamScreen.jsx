import { useState, useEffect } from 'react'
import './ExamScreen.css'

function ExamScreen({ questions, currentIndex, onAnswerSubmit, onNext, onRestart }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answered, setAnswered] = useState(false)

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  useEffect(() => {
    // Reset cuando cambia la pregunta
    setSelectedAnswer(null)
    setShowFeedback(false)
    setAnswered(false)
  }, [currentIndex])

  const handleOptionClick = (index) => {
    if (answered) return
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correct
    onAnswerSubmit(selectedAnswer, isCorrect)
    setAnswered(true)
    setShowFeedback(true)
  }

  const handleContinue = () => {
    onNext()
  }

  const isCorrect = selectedAnswer === currentQuestion.correct

  return (
    <div className="screen exam-screen">
      <div className="exam-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="question-counter">
          <span>{currentIndex + 1}</span> / <span>{questions.length}</span>
        </div>
      </div>

      <div className="card exam-card">
        {!showFeedback ? (
          <>
            <div className="question-container">
              <h2 className="question-text">{currentQuestion.question}</h2>
              <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option ${selectedAnswer === index ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(index)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="buttons-container">
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={selectedAnswer === null}
              >
                Siguiente
              </button>
              <button
                className="btn btn-cancel"
                onClick={onRestart}
                title="Reiniciar examen desde el principio"
              >
                Reiniciar Examen
              </button>
            </div>
          </>
        ) : (
          <div className="feedback-container">
            <div className={`feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '✓' : '✗'}
            </div>
            <h3 className="feedback-title">
              {isCorrect ? '¡Correcto!' : 'Incorrecto'}
            </h3>
            <p className="feedback-message">
              {isCorrect 
                ? 'Has respondido correctamente.' 
                : 'Tu respuesta no es correcta.'}
            </p>
            {!isCorrect && (
              <p className="correct-answer">
                La respuesta correcta es: {currentQuestion.options[currentQuestion.correct]}
              </p>
            )}
            <button className="btn btn-primary" onClick={handleContinue}>
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExamScreen

