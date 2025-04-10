import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <Router>
<div className="flex h-screen bg-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>

        {/* Sidebar - fixed height and width */}
        <div className="w-64 h-full fixed">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64 h-full overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
