import DashThreeCard from "../components/DashThreeCard";
import { FaHome } from "react-icons/fa";
import ExpenseInsights from "../components/ExpenseInsights";
import BillsInsight from "../components/BillsInsight";
import PantryInsights from '../components/PantryInsights';
import TasksInsights from "../components/TasksInsights";

function DashboardPage() {
  return (
    <div className="bg-gray-200 h-full overflow-y-auto p-6 rounded-2xl mt-2 mb-2">
      {/* Header and Top Card */}
      <h1 className="text-3xl font-bold mb-6 text-black flex items-center gap-4 ml-4">
        <FaHome color="black"/> Dashboard
      </h1>

      {/* Top Cards */}
      <DashThreeCard />

      {/* Insights */}
      <div className="flex flex-row flex-wrap gap-1 mt-6">
        <ExpenseInsights />
        <BillsInsight />
      </div>

      <div className="flex flex-row flex-wrap gap-6  mt-6">
        <PantryInsights />
        <TasksInsights />
      </div>
    </div>
  );
}

export default DashboardPage;
