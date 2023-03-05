import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Signin from '../screens/SignInScreen';
import Signup from '../screens/SingUpScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BooksScreen from '../screens/BooksScreen/BooksScreen';
import LibraryScreen from '../screens/LibraryScreen/LibraryScreen';
import RewardsScreen from '../screens/RewardsScreen/RewardsScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen/BookDetailsScreen';
import BookListingScreen from '../screens/BookListingScreen/BookListingScreen';
import AppLayout from "../screens/AppLayout";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="*" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        
        <Route element={<AppLayout />}>
          <Route exact path="/home" element={<Private Item={HomeScreen} />} />

          <Route exact path="/books" element={<Private Item={BooksScreen} />} />
          <Route exact path="/library" element={<Private Item={LibraryScreen} />} />
          <Route exact path="/rewards" element={<Private Item={RewardsScreen} />} />
          <Route exact path="/book-details" element={<Private Item={BookDetailsScreen} />} />
          <Route exact path="library/livros-lidos" element={<Private Item={BookListingScreen} />} />
          <Route exact path="library/livros-a-ler" element={<Private Item={BookListingScreen} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesApp;