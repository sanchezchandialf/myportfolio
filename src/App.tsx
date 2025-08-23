import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <>
      <SocialSidebar />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
