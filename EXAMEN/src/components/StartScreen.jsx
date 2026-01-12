import './StartScreen.css'

function StartScreen({ onStart, hasProgress, onContinue }) {
  return (
    <div className="screen start-screen">
      <div className="card">
        <h1>Simulador de Examen</h1>
        <p className="subtitle">Prepara tu examen de fin de carrera</p>
        {hasProgress && (
          <>
            <p className="progress-message">Tienes un examen en progreso</p>
            <button className="btn btn-secondary" onClick={onContinue}>
              Continuar Examen
            </button>
            <button className="btn btn-primary" onClick={onStart}>
              Comenzar Nuevo Examen
            </button>
          </>
        )}
        {!hasProgress && (
          <button className="btn btn-primary" onClick={onStart}>
            Comenzar Examen
          </button>
        )}
      </div>
    </div>
  )
}

export default StartScreen

