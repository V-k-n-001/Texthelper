import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/textForm';
import Alert from './Component/Alert';
import React ,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether Dark mode is enabled or not.
  const[alert, setAlert]= useState(null)

  const showAlert=(message, type) =>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode ('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      
    }
  
  }
  return (
    <>
    <Router>
     <Navbar title = "TextHelper"  mode={mode} toggleMode ={toggleMode} />
     <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element ={<TextForm  heading ="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
