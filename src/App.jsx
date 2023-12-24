import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/servicesOffered/Services';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <About />
    <Services />
    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;