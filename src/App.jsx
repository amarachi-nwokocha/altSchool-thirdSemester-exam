import Switch from "./Components/Auth/Switch";
import DashBoard from "./Components/Dashboard/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import { ToastContainer } from "react-toastify";
import  './app.css'
import Analytics from "./Components/Profile/Analytics";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<DashBoard />} />
          <Route path="/login" element={<Switch />} />
          <Route path="/signup" element={<Switch />}></Route>
          <Route path="/profile" element={<Profile />} ></Route>
          <Route path="/analytics" element={<Analytics />}> </Route>
      
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
