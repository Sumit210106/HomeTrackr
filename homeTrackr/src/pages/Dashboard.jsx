import DashThreeCard from "../components/DashThreeCard";
import { FaHome } from "react-icons/fa";
import ExpenseInsights from "../components/ExpenseInsights";

function DashboardPage() {
  return (
    <div className="bg-black">
    <div className="p-6 w-full bg-black">
        
      <h1 className="text-2xl font-bold mb-6 text-white flex gap-4"> <FaHome/>Dashboard</h1>
      <DashThreeCard />
      </div>

    <ExpenseInsights/>

    </div>
  );
}

export default DashboardPage;
