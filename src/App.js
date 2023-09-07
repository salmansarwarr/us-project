import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/dashboard' Component={Dashboard}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
