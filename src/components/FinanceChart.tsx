"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Ene",
    expense: 60,
    income: 35,
  },
  {
    name: "Feb",
    expense: 70,
    income: 18,
  },
  {
    name: "Mar",
    expense: 56,
    income: 32,
  },
  {
    name: "Abr",
    expense: 71,
    income: 20,
  },
  {
    name: "May",
    expense: 44,
    income: 56,
  },
  {
    name: "Jun",
    expense: 60,
    income: 35,
  },
  {
    name: "Jul",
    expense: 70,
    income: 18,
  },
  {
    name: "Ago",
    expense: 56,
    income: 32,
  },
  {
    name: "Sep",
    expense: 71,
    income: 20,
  },
  {
    name: "Oct",
    expense: 44,
    income: 56,
  },
  {
    name: "Nov",
    expense: 60,
    income: 35,
  },
  {
    name: "Dic",
    expense: 70,
    income: 18,
  },
];

// #endregion

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg  h-full p-4  ">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart responsive data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
