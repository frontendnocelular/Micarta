import React, { useState, useEffect } from 'react';
import { Heart, Mail } from 'lucide-react';
import './LoveLetter.css';

const LoveLetter = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showPoem, setShowPoem] = useState(false);

  const handleHeartClick = () => {
    setIsLetterOpen(true);
    setTimeout(() => {
      setShowPoem(true);
    }, 1000);
  };

  const poem = `Querida Adélia,

Como pétalas ao vento, meus pensamentos voam
Até encontrarem o jardim do teu sorriso.
Não ouso chamar-te minha, ainda não,
Mas permites que admire tua luz de longe?

Em cada flor que desabrocha vejo teu olhar,
Em cada raio de sol, tua alegria contagiante.
És como a primavera que desperta a terra—
Trazes vida onde antes havia apenas esperança.

Se Deus permite que caminhos se cruzem,
É porque há beleza no encontro de almas.
E eu, humildemente, agradeço por conhecer
Uma pessoa tão especial quanto tu.

Que este jardim de flores seja apenas
O começo de uma amizade sincera,
Onde o respeito floresça como estas pétalas,
E a admiração cresça como estas folhas.

Com carinho e respeito,
Alguém que te admira`;

  return (
    <div className="love-letter-container">
      {!isLetterOpen ? (
        <div className="envelope-container">
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body"></div>
            <div 
              className="heart-seal"
              onClick={handleHeartClick}
            >
              <Heart 
                className="heart-icon" 
                fill="#ff6b9d" 
                color="#ff6b9d"
                size={32}
              />
            </div>
          </div>
          <p className="instruction">Clique no coração para abrir a carta</p>
        </div>
      ) : (
        <div className={`letter-content ${showPoem ? 'show' : ''}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <Mail className="mail-icon" color="#8b4513" size={24} />
              <div className="decorative-line"></div>
            </div>
            
            {showPoem && (
              <div className="poem-text">
                {poem.split('\n').map((line, index) => (
                  <p key={index} className="poem-line" style={{ animationDelay: `${index * 0.1}s` }}>
                    {line}
                  </p>
                ))}
              </div>
            )}
            
            <div className="letter-footer">
              <div className="decorative-line"></div>
              <div className="signature-area">
                <div className="wax-seal"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;