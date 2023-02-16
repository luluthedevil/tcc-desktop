import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BooksScreen from './screens/BooksScreen/BooksScreen';
import LibraryScreen from './screens/LibraryScreen/LibraryScreen';
import PoliticsScreen from './screens/PoliticsScreen/PoliticsScreen';
import RewardsScreen from './screens/RewardsScreen/RewardsScreen';
import TermsScreen from './screens/TermsScreen/TermsScreen';
import Warn from './components/warn';
import BookDetailsScreen from './screens/BookDetailsScreen/BookDetailsScreen';
import BookListingScreen from './screens/BookListingScreen/BookListingScreen';
require('dotenv').config();

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Warn />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/books" element={<BooksScreen />} />
            <Route path="/library" element={<LibraryScreen />} />
            <Route path="/politcs" element={<PoliticsScreen />} />
            <Route path="/rewards" element={<RewardsScreen />} />
            <Route path="/terms" element={<TermsScreen />} />
            <Route path="/book-details" element={<BookDetailsScreen />} />
            <Route path="library/livros-lidos" element={<BookListingScreen />} />
            <Route path="library/livros-a-ler" element={<BookListingScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
