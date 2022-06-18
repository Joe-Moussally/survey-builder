import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import AddSurvey from './components/AddSurvey';
import MySurveys from './components/MySurveys';

function App() {
  return (
    <>
      <Router>
        <Nav />
        

        {/* Adding Routes routes */}

        <Routes>
          <Route path="/add" element={<AddSurvey />}>
          </Route>
          <Route path="/my_surveys" element={<MySurveys />}>
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
