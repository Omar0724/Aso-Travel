import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

export default function HomePage() {
  return (
    <div className='Home-Page'>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}
