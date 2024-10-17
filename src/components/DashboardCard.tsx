import { K } from "../constants";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data, Sales, Users, UserTitles } from "../constants/data/chartData";
import { BarChart } from "./BarChat";
import { motion } from "framer-motion";
import { useState } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import TableCard from "./TableCard";

Chart.register(CategoryScale);
const DashboardCard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((item) => item.Day),
    datasets: [
      {
        label: "Users Booked",
        data: Data.map((item) => item.users),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: Sales.map((item) => item.paymentType),
    datasets: [
      {
        label: `Payment for Dec`,
        data: Sales.map((item) => item.total),
        backgroundColor: [
          "rgba(255, 99, 132, 1)", 
          "#F3BA2F", 
          "#FFFDD0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const sortUsers = () => {
    return Users.sort((a, b) => b.bookedTimes - a.bookedTimes);
  };

  const sortedUsers = sortUsers();

  return (
    <div>
      <section className="bg-green-500 rounded-lg shadow-md ">
        <div className="text-left p-8 text-white">
          <h2 className="font-bold text-xl">Daily Analytics</h2>
          <p>This is a daily overview generated</p>
        </div>

        <div className="grid grid-cols-4 place-content-center gap-8 p-8 m-auto">
          {K.Overview.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: index * 0.3,
              }}
              className=" relative bg-white rounded-md shadow-lg p-7  text-center"
            >
              <h2>{item.name}</h2>
              <h3>{item.number}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <div className=" grid grid-cols-3 place-content-center gap-8 py-10 m-auto">
       

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className=" relative bg-white rounded-md shadow-lg p-7 bg-transparent text-center"
        >
          <h2>Users Booked</h2>

          <BarChart chartData={chartData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="col-span-2 relative bg-white rounded-md shadow-lg p-7 bg-transparent text-center"
        >
          <h2 className="py-3">Frequent Users</h2>

         <TableCard data={sortedUsers} titles={UserTitles} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
        }}
        className="grid grid-cols-3 place-content-center gap-8 py-10 m-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="col-span-2 relative bg-white rounded-md shadow-lg p-7 bg-transparent text-center"
        >
          <h2>Peak Times for booking</h2>

          <LineChart chartData={chartData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className=" relative bg-white rounded-md shadow-lg p-7 bg-transparent text-center"
        >
          <h2>Sales Overview</h2>
          <PieChart chartData={pieData} />
        </motion.div>


      </motion.div>
    </div>
  );
};

export default DashboardCard;
