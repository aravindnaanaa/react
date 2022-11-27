import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Home from './components/Home'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Employee from './components/Employee'


function App() {
  return (
    <div>
      <div className="d-grid gap-2">
            <button variant="primary" size="lg"> My info </button>
            </div>
      <Navbar /> 
      <Header />
      <Home/>
      <Container />
      <Footer /> 
	    <Employee /> 
      
    </div>
  );
}

export default App;
