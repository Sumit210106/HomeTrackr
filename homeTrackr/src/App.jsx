import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar always visible */}
        <Sidebar />
        {/* Main page content */}
        <div className="flex-1 p-4">
          <Routes>
            {/* Route for the dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
