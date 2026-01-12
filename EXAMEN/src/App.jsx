import { useState, useEffect } from 'react'
import StartScreen from './components/StartScreen'
import ExamScreen from './components/ExamScreen'
import ResultsScreen from './components/ResultsScreen'
import questionsData from '../questions.json'
import './App.css'

const STORAGE_KEY = 'simulador-examen-progress'

function App() {
  const [screen, setScreen] = useState('start') // 'start', 'exam', 'results'
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [correctCount, setCorrectCount] = useState(0)

  // Cargar progreso guardado al iniciar
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY)
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress)
        if (progress.screen && progress.currentQuestionIndex !== undefined) {
          setScreen(progress.screen)
          setCurrentQuestionIndex(progress.currentQuestionIndex)
          setUserAnswers(progress.userAnswers || [])
          setCorrectCount(progress.correctCount || 0)
        }
      } catch (e) {
        console.error('Error al cargar progreso guardado:', e)
      }
    }
    // Cargar preguntas
    setQuestions(questionsData)
  }, [])

  // Guardar progreso cuando cambie el estado del examen
  useEffect(() => {
    if (screen === 'exam' || screen === 'results') {
      const progress = {
        screen,
        currentQuestionIndex,
        userAnswers,
        correctCount
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } else if (screen === 'start') {
      // Limpiar progreso cuando vuelve al inicio
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [screen, currentQuestionIndex, userAnswers, correctCount])

  const startExam = () => {
    // Limpiar progreso anterior si inicia un examen nuevo
    localStorage.removeItem(STORAGE_KEY)
    setScreen('exam')
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setCorrectCount(0)
  }

  const handleAnswerSubmit = (selectedIndex, isCorrect) => {
    const newAnswers = [...userAnswers, { selectedIndex, isCorrect }]
    setUserAnswers(newAnswers)
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
    }
  }

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setScreen('results')
    }
  }

  const restartExam = () => {
    // Limpiar progreso al reiniciar
    localStorage.removeItem(STORAGE_KEY)
    setScreen('start')
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setCorrectCount(0)
  }

  // Función para continuar examen guardado
  const continueExam = () => {
    const savedProgress = localStorage.getItem(STORAGE_KEY)
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress)
        setScreen(progress.screen)
        setCurrentQuestionIndex(progress.currentQuestionIndex)
        setUserAnswers(progress.userAnswers || [])
        setCorrectCount(progress.correctCount || 0)
      } catch (e) {
        console.error('Error al cargar progreso:', e)
      }
    }
  }

  const hasProgress = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) !== null

  return (
    <div className="app-container">
      {screen === 'start' && (
        <StartScreen 
          onStart={startExam} 
          hasProgress={hasProgress}
          onContinue={continueExam}
        />
      )}
      {screen === 'exam' && questions.length > 0 && (
        <ExamScreen
          questions={questions}
          currentIndex={currentQuestionIndex}
          onAnswerSubmit={handleAnswerSubmit}
          onNext={moveToNextQuestion}
          onRestart={() => {
            if (window.confirm('¿Estás seguro de que quieres reiniciar el examen? Perderás todo tu progreso.')) {
              localStorage.removeItem(STORAGE_KEY)
              setScreen('exam')
              setCurrentQuestionIndex(0)
              setUserAnswers([])
              setCorrectCount(0)
            }
          }}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          correctCount={correctCount}
          totalCount={questions.length}
          onRestart={restartExam}
        />
      )}
    </div>
  )
}

export default App

