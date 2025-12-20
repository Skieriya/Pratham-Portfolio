import Spline from '@splinetool/react-spline/next';
import ClientHomePage from './ClientHomePage';

export default function Home() {
  return (
    <>

      <div className='spline-bg'>
        <Spline
          scene="https://prod.spline.design/siMFSICTDDQX8JsR/scene.splinecode"
        />
      </div>
      <ClientHomePage />
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Your global styles here */
        @font-face {
          font-family: 'CaniculeDisplay';
          src: url('/CaniculeDisplayv0.4-Regular.Trial.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        html, body, #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          font-family: 'CaniculeDisplay', sans-serif;
        }
        .projects-container {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: black;
          font-size: 2em;
          font-weight: bold;
          font-family: 'CaniculeDisplay';
          text-align: center;
          border: 1px solid black;
          border-radius: 30px;
          width: 200px;
          transition: transform 0.3s ease-in-out;
        }
        .projects-container:hover {
          transform: translateX(-50%) scale(1.1);
        }
        .dra-image {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          z-index: 2;
          max-width: 200px;
          height: auto;
          border-radius: 50%;
          filter: drop-shadow(0px 0px 100px rgba(253, 101, 0, 0.5));
          transition: transform 0.2s ease-out; /* Adjusted transition speed */
          cursor: pointer;
        }
        /* New: Scale up on hover */
        .dra-image:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
        /* New: Scale down and play song on click (mouse down) */
        .dra-image:active {
          transform: translate(-50%, -50%) scale(0.95);
          filter: drop-shadow(0px 0px 50px rgba(253, 101, 0, 0.8));
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}} />
    </>
  );
}