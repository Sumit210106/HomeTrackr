import { IoPeople } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";

function DashThreeCard() {
  const data = [
    { name: "Total Members", Value: "4", icon: IoPeople },
    { name: "Total Spending", Value: "4", icon: FaRupeeSign },
    { name: "Bills Pending", Value: "4", icon: SiGoogledocs },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full p-2">
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-4 bg-black rounded-lg p-4 hover:shadow-lg transition-all duration-300 w-full border border-white/40 hover:border-purple-500 min-h-[100px]"
          >
            <div className="text-4xl text-purple-600">
              <Icon />
            </div>
            <div>
              <h4 className="text-white text-sm">{item.name}</h4>
              <p className="text-xl font-semibold text-white">{item.Value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashThreeCard;
