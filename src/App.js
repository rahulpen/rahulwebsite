import React from 'react';
import './App.css';
import linkedinLogo from './img/LI-In-Bug.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rahul Pendyala</h1>
        <h4>Software Engineer</h4>
      </header>

      <body className="App-body">
        

      </body>

      <div className="App-footer">
        <p> 
          <a href = "mailto: rahul.pen24@gmail.com">
            <svg href="mailto: rahul.pen24@gmail.com" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>

          <a style={{paddingLeft: "1%"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rahul-pendyala-4a4060163/">
            <img className="linkedinIcon" src={linkedinLogo}></img>  
          </a>

          <a style={{paddingLeft: "1%"}} target="_blank" rel="noopener noreferrer" href="https://github.com/rahulpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
        </p>  
        <p>Under Construction</p>
      </div>
    </div>
  );
}

export default App;
