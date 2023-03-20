import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import LoginForm from "./Components/LoginForm";



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="" element={<LoginForm/>}/> 
  <Route path="/dashboard" element={<DashBoard/>}/> 
</Routes>

</BrowserRouter>
  );
}

export default App;
