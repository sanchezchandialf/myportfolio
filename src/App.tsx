import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <SocialSidebar />
      <Navbar />
      <Home />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
