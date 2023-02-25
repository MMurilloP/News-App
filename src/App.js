import './App.css';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main'
import Footer from './componets/Footer/Footer'
import userContext  from './context/userContext'; // contexto
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(""); // state para componente funcional

  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>

        <Header/>
        <Main/>
        </userContext.Provider>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
