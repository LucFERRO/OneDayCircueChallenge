import { BrowserRouter as  Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Staff from './components/Staff';
import Pricing from './components/Pricing';
import Agenda from './components/Agenda';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/staff' element={<Staff/>} />
                    <Route path='/pricing' element={<Pricing/>} />
                    <Route path='/agenda' element={<Agenda/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
