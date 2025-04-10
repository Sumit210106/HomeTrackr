import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";


function Expenses() {
  return (
    <div className="bg-gray-200 h-full overflow-y-auto p-6 rounded-2xl mt-2 mb-2">
        {/* header wala div */}
        <div className="bg-gray-200 text-3xl ml-6 rounded-lg flex space-x-2 gap-4">
            <h1 className="text-3xl font-semibold mb-6 text-black flex items-center gap-4 ml-4">
                    <FaMoneyBillTrendUp color="black"/> Expenses
                </h1>
        </div>

        {/* wrapper div  */}
        <div className="flex flex-col md:flex-row w-full m-3 bg-black">
            {/* left side table wala div */}
            <div className="bg-gray-100 md:w-4/5 w-full">
              left div
              {/* subject and category */}
              <div className=''></div>
              {/* user */}
              <div className=""></div>

            </div>

            {/* right side summary wala div */}
            <div className="bg-gray-300 md:w-1/5 w-full flex justify-center items-center flex-col">

              <div className="text-xl text-gray-700">
                  Summary
              </div>

              {/* content wala div */}
              <div className="">
                content
              </div>
            </div>
        </div>
      

        
    </div>
  )
}

export default Expenses