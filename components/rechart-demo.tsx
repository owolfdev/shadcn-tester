"use client"

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

interface DataItem {
  name: string
  total: number
  color: string
}

const data: DataItem[] = [
  {
    name: "food",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#adfa1d",
  },
  {
    name: "clothing",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
  {
    name: "utilities",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#3366cc",
  },
  {
    name: "rent",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#dc3912",
  },
  {
    name: "transportation",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#109618",
  },
  {
    name: "entertainment",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#990099",
  },
  {
    name: "misc",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff9900",
  },
  {
    name: "school",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#0099c6",
  },
  {
    name: "pets",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#dd4477",
  },
  {
    name: "healty",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#66aa00",
  },
  {
    name: "grooming",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#b82e2e",
  },
  {
    name: "donations",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#316395",
  },
]

export function ReChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey="total" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            name="Total"
            labelLine={true}
            label={(name) => `${name.name} - THB${name.total}`}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}
