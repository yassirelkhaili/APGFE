import React from 'react';
import "../styles/StyleForm.css"
function Progress() {
  return (
    
    <div className="progress">
        <div className="container">
            <p className="prg">
                    Votre Progress De votre Project
                </p>
            <div className="prg">
                <div className='div'>
                    <p className="proposition active">
                        Proposer l'idée
                    </p>
                </div>
                <div className='div'>
                    <p className="proposition">
                        Phase préparatoire
                    </p>
                </div>
                <div className='div'>
                    <p className="proposition">
                        Phase de réalisation
                    </p>
                </div>
                <div className='div'>
                    <p className="proposition">
                        Phase de fin de projet
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress
