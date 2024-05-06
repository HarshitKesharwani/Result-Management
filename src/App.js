import "./App.css";

import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logs from "./Components/Logs";
import Logt from "./Components/Logt";

import Teacher from "./Components/Teacher";
import Addclass from "./Components/Addclass";
import Addstudent from "./Components/Addstudent";
import Addsubject from "./Components/Addsubject";
import Addresult from "./Components/Addresult";
import Student from "./Components/Student";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logs" element={<Logs />} />
          <Route exact path="/logt" element={<Logt />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/teacher" element={<Teacher />} />

          <Route exact path="/addstudent" element={<Addstudent />} />
          <Route exact path="/addresult" element={<Addresult />} />
          <Route exact path="/addsubject" element={<Addsubject />} />
          <Route exact path="/addclass" element={<Addclass />} />
        </Routes>
      </BrowserRouter>

      {/* <Addstudent /> */}
      {/* <Addsubject /> */}
    </>
  );
}

export default App;
