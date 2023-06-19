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
    color: "#adfa1d",
  },
  {
    name: "rent",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
  {
    name: "transportation",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#adfa1d",
  },
  {
    name: "entertainment",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
  {
    name: "misc",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#adfa1d",
  },
  {
    name: "school",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
  {
    name: "pets",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#adfa1d",
  },
  {
    name: "healty",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
  {
    name: "grooming",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#adfa1d",
  },
  {
    name: "donations",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#ff7f50",
  },
]

export function Overview() {
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
