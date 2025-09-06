import React, { useState } from 'react';


import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#032744';
      showAlert('Dark mode enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" Mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtil - word counter,character counter,reverse characters"
          mode={mode}
        />
        {/* If you want to display About component too: */}
         <About mode={mode} /> 
      </div>
    </>
  );
}export default App;