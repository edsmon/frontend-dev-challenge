import './App.css';
import Nav from './Components/navBar/nav';
import Hero from './Components/hero/Hero';
import Cta from './Components/callToAction/Cta';
import AdFrame from './Components/adFrame/AdFrame';
import Services from './Components/servicesFrame/Services';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Cta />
      <AdFrame />
      <Services />
    </>
  );
}

export default App;
