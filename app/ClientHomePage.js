'use client';

import { useState, useRef } from 'react';

export default function ClientHomePage() {
  const audioRef = useRef(null);
  const [active, setActive] = useState(false);


  const handleDraClick = () => {
    // This function will play the audio on click.
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const handleProjectsClick = () => {
    setActive(!active);
  };

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', zIndex: 1 }}>
      <div className='left-wrap'>
        <div className='left'
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'CaniculeDisplay',
          }}
        >
          Researcher{' '}
          <img
            src="/star.png"
            alt="Star"
            style={{
              display: 'inline-block',
              width: '40px',
              height: 'auto',
              verticalAlign: 'middle',
            }}
          />{' '}
          Ritvaan
        </div>
      </div>
      <div className='right-wrap'>
        <div className='right'
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'Alkatra',
            textAlign: 'right',
          }}
        >
          सर्वं<br />
          खल्विदं<br />
          ब्रह्म ।<br />
          तज्जलानिति<br />
          शान्त<br />
          उपासीत ॥

        </div>
      </div>

      <div className={`mid ${active ? 'bottom' : ''}`}>
        <div className="projects-container"
          onClick={handleProjectsClick}
        >

          Pr
          <img
            src="/star.png"
            alt="Star"
            style={{
              display: 'inline-block',
              margin: '0 5px',
              width: '60px',
              height: 'auto',
              verticalAlign: 'middle',
            }}
          />
          jects
        </div>
      </div>

      {/*<img
        src="/ringb.png" 
        alt="Rotating Ring"
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: '400px',
          height: '400px',
          animation: 'spin 15s linear infinite',
          filter:' drop-shadow(5px 5px 50px rgba(236, 22, 7, 0.86))',
        }}
      />

      <img
        src="dra.png"
        alt="Description of your main image"
        onClick={handleDraClick}
        className="dra-image"
      />

      <audio ref={audioRef} src="/thumak.mp3" preload="auto" /> */}

      <div
        className={`lavender-layer ${active ? 'show' : ''}`}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'CaniculeDisplay',
          }}>
          <div style={{
            fontSize: '3em',
          }}>Projects</div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8vw',
              justifyItems: 'center',
              alignItems: 'center',
            }}>

            <img style={{ width: '20vw', height: 'auto', borderRadius: '10px 10px 10px 10px' }} src="/big.png" alt="Big 1" />
            <img style={{ width: '20vw', height: 'auto', borderRadius: '10px 10px 10px 10px' }} src="/big2.png" alt="Big 2" />
            <img style={{ width: '20vw', height: 'auto', borderRadius: '10px 10px 10px 10px' }} src="/big3.png" alt="Big 3" />
            <img style={{ width: '20vw', height: 'auto', borderRadius: '10px 10px 10px 10px' }} src="/big4.png" alt="Big 4" />
          </div>

        </div>
      </div>
    </main>
  );
}