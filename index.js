
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#222', color: 'white' }}>
      <h1>Nobalits Data - Student & Fee Management</h1>
      <p>Welcome to the multi-center data management portal.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
