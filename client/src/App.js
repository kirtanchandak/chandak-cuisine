import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipie from "./pages/CreateRecipie";
import SavedRecipe from "./pages/SavedRecipe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipie />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
