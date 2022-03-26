import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
  <>
    <Header/>
      <div className="container"> 
        <Products/>
      </div>
  </>
  
  );
}

export default App;
