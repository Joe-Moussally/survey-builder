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
import Login from './Login';
import Signup from './Signup';
import Form from './components/Form';
import AllSurveys from './components/AllSurveys';

function App() {
  return (
    <>
      <Router>
        <Nav />
        

        {/* Adding Routes routes */}

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/add" element={<AddSurvey />}></Route>
          <Route path="/my_surveys" element={<MySurveys />}></Route>
          <Route path="/all_surveys" element={<AllSurveys />}></Route>
          <Route path=":id" element={<SurveyInspect />}></Route>
          <Route path='/form/:id' element={<Form />}></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
