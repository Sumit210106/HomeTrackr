import DashThreeCard from "../components/DashThreeCard";
import { FaHome } from "react-icons/fa";

function DashboardPage() {
  return (
    <div className="p-6 w-full bg-black">
      <h1 className="text-2xl font-bold mb-6 text-white flex gap-4"> <FaHome/>Dashboard</h1>
      <DashThreeCard />
        </div>
  );
}

export default DashboardPage;
