import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Safety check: Does the root element exist?
const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = '<div style="color:red; background:black; height:100vh; padding:20px;">CRITICAL ERROR: The id="root" was not found in index.html.</div>';
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } catch (err) {
    // If React crashes, show the error on screen
    document.body.innerHTML = `<div style="color:red; background:black; height:100vh; padding:20px;">APP CRASHED:<br/>${err.message}</div>`;
  }
}

