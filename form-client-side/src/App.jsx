import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import {Survey} from "./context/survey";
import { useState } from "react";
import { Validate } from "./context/Validate";
import {Reports} from "./pages/Reports";

const App = () => {
  const [info, setinfo] = useState({name:'',country:'',email:'',userRatings:[]})
  const [validate,setvalidate]=useState(false)

  const FormPage = 
  <Validate.Provider value={{validate,setvalidate}}>
  <Survey.Provider value={{info,setinfo}}>
    <div>
      <Form />
      <audio src="https://www.mboxdrive.com/kont0l.mp3"></audio>
    </div>
  </Survey.Provider>
  </Validate.Provider>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={FormPage} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
