import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import About from "./About";
import Events from './components/Events';
import Operation from './components/Operation';
import OperationEdit from './components/OperationEdit';
import Home from "./Home"
import ProductDetails from './ProductDetail';
import NotFound from './components/PageNotFound/NotFound'


function App() {
  return (
    <Router>
      <nav id='topnav'>
          <Link className="navbar-brand" to="/">
            <img src='./img/cool.png' width={60} alt="nav brand"/>
          </Link>
        <Link to="/" className='mylink'>Home</Link> 
        <Link to="/about" className='mylink'>About</Link> 
        <Link to="/event" className='mylink'>Event</Link>
        <Link to="/operation" className='mylink'>Operation</Link>
      </nav>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product/:prodid" element={<ProductDetails/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path='/event' element={<Events/>}/>
          <Route exact path='/operation' element={<Operation/>}/>
          <Route exact path='/edit/:userid' element={<OperationEdit/>}/>
          <Route path="*" element={<NotFound statuscode="404" statusmsg="Page Not Found"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
