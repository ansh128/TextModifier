import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enable', 'success');
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#585858'
      showAlert("Dark mode enable", 'success');
    }
  }
  return (
    <>
      <Navbar title="TextModifier" style={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-5">
        <TextForm heading="Enter Text to Transform" style={mode} showAlert={showAlert} />
        </div>      
    </>
  );
}

export default App;
