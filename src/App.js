import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Header />
      
      <Routes>
        <Route path="/Home"
        element = 
        {<Home />}>
        </Route>
        <Route path="/search"
        element = 
        {<SearchPage />}>
        </Route>   
      </Routes>
    </Router>
  );
}

export default App;
