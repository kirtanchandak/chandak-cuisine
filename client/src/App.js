import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateRecipie from "./pages/CreateRecipie";
import SavedRecipe from "./pages/SavedRecipe";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-recipe" element={<CreateRecipie />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
