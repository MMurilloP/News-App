import './App.css';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main'
import Footer from './componets/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
