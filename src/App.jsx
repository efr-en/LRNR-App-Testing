import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Account from './pages/Account'; // Account component
import QuizGenerator from './pages/Quiz'; // QuizGenerator component
import Home from './pages/Home'; // Optional: Import a Home component

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home route */}
                <Route path="/account" element={<Account />} /> {/* Account route */}
                <Route path="/quiz-generator" element={<Quiz />} /> {/* Quiz route */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;