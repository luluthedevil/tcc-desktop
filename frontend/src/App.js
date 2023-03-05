import './App.css';
import RoutesApp from "./routes";
import Warn from './components/warn';

import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <RoutesApp />
      <div className="container">
        <Warn />
      </div>
    </div>
  </AuthProvider>
  );
}

export default App;
