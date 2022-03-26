import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
  <>
    <Header/>
      <div className="container"> 
        <Products/>
        <Footer/>
      </div>
  </>
  
  );
}

export default App;
