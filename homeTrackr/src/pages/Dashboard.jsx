import DashThreeCard from "../components/DashThreeCard";
import { FaHome } from "react-icons/fa";
import ExpenseInsights from "../components/ExpenseInsights";
import BillsInsight from "../components/BillsInsight";
import PantryInsights from '../components/PantryInsights'
import TasksInsights from "../components/TasksInsights";

function DashboardPage() {
  return (
    <div className="bg-black min-h-screen p-6 rounded-xl">
      {/* Header and Top Card */}
      <h1 className="text-2xl font-bold mb-6 text-white flex items-center gap-4">
        <FaHome /> Dashboard
      </h1>
      <DashThreeCard />
      <div className="flex flex-row">
      <ExpenseInsights />
      <BillsInsight />
      </div>
            <div className="flex flex-row">
              <PantryInsights/>
              <TasksInsights/>
            </div>
    </div>
  );
}

export default DashboardPage;
