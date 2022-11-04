import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import NotFound from './components/layout/pages/NotFound';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <Router>
       <div className='flex flex-col justify-between h-screen'>
        <Navbar title='Github-Finder'/>
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route  path='/' element={<Home/>} />
              <Route  path='/about' element={<About/>}/>
              <Route  path='/*' element={<NotFound/>}/>
            </Routes>
          </main>
        <Footer/>
        </div>  
    </Router> 
  );
}

export default App;
