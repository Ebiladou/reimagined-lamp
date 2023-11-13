import { Route, Routes } from "react-router-dom";
import Entry from "./components/Entry";
import Createacc from "./pages/Createacc";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/createaccount" element= {<Createacc />} />
      </Routes>
    </>
  );
}

export default App;