
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import Team from './Pgaes/Teams Page/Team';
import Blogs from './Pgaes/Blogs Page/Blogs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
      {/* <Team /> */}
      
    </div>
  );
}

export default App;
