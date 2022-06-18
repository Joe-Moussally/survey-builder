import './App.css';

import { useParams, useNavigate } from 'react-router-dom';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Nav from './components/Nav';
import AddSurvey from './components/AddSurvey';
import MySurveys from './components/MySurveys';
import SurveyInspect from './components/SurveyInspect';

function App() {
  return (
    <>
      <Router>
        <Nav />
        

        {/* Adding Routes routes */}

        <Routes>
          <Route path="/add" element={<AddSurvey />}>
          </Route>
          <Route path="/my_surveys" element={<MySurveys />}></Route>
          
          <Route path=":id" element={<SurveyInspect />}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
