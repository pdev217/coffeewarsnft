// import logo from './logo.svg';
import './App.css';
import 'animate.css';
import $ from 'jquery';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import Faq from './components/faq';
import Footer from './components/footer';
const QuadShot = lazy(()=>import('./components/quadshot'));

function App() {
  return (
    <div className="App">
          <Home />
          <Faq />
          <Footer />
    </div>
  );
}

export default App;
