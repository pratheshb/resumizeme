import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Main />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
