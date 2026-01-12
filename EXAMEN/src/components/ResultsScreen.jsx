import './ResultsScreen.css'

function ResultsScreen({ correctCount, totalCount, onRestart }) {
  const percentage = Math.round((correctCount / totalCount) * 100)

  return (
    <div className="screen results-screen">
      <div className="card results-card">
        <div className="results-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1>Examen Completado</h1>
        <div className="score-container">
          <div className="score-circle">
            <span>{percentage}%</span>
          </div>
          <p className="score-text">
            Respondiste correctamente <strong>{correctCount}</strong> de <strong>{totalCount}</strong> preguntas
          </p>
        </div>
        <div className="results-actions">
          <button className="btn btn-primary" onClick={onRestart}>
            Volver a Intentar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultsScreen

