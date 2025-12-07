'use client';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Sample stock data from 2018 to 2025 based on the chart
const generateStockData = () => {
  const dates: string[] = [];
  const startDate = new Date('2018-01-01');
  const endDate = new Date('2025-01-01');
  
  // Generate monthly data points
  for (let d = new Date(startDate); d <= endDate; d.setMonth(d.getMonth() + 1)) {
    dates.push(d.toISOString().split('T')[0]);
  }

  const data = dates.map((date, index) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const progress = (index / dates.length) * 7; // 7 years of data
    
    return {
      date: `${year}-${String(month + 1).padStart(2, '0')}`,
      year,
      AAPL: Math.round(40 + progress * 23 + Math.sin(progress) * 10 + (index % 12) * 2),
      MSFT: Math.round(80 + progress * 45 + Math.sin(progress * 0.8) * 15 + (index % 12) * 3),
      GOOGL: Math.round(50 + progress * 18 + Math.sin(progress * 0.9) * 12 + (index % 12) * 2),
      TSLA: Math.round(
        progress < 2 ? 25 + progress * 5 :
        progress < 4 ? 30 + (progress - 2) * 150 + Math.sin((progress - 2) * 3) * 50 :
        progress < 5 ? 330 - (progress - 4) * 80 :
        250 + (progress - 5) * 25 + Math.sin((progress - 5) * 2) * 30
      ),
      NVDA: Math.round(
        progress < 5.5 ? 8 + progress * 5 + Math.sin(progress) * 3 :
        35 + (progress - 5.5) * 80 + Math.sin((progress - 5.5) * 4) * 15
      ),
    };
  });

  return data;
};

const stockData = generateStockData();

export function StockChart() {
  return (
    <div className="w-full bg-neutral-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-neutral-800/50">
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">
        Close Prices for Multiple Stocks
      </h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={stockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="date"
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            stroke="#6B7280"
            interval="preserveStartEnd"
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.getFullYear().toString();
            }}
          />
          <YAxis
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            stroke="#6B7280"
            domain={[0, 450]}
            tickFormatter={(value) => value.toString()}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F3F4F6',
            }}
            labelStyle={{ color: '#9CA3AF' }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
            formatter={(value) => (
              <span style={{ color: '#9CA3AF', fontSize: '14px' }}>{value}</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="AAPL"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
            name="AAPL"
          />
          <Line
            type="monotone"
            dataKey="MSFT"
            stroke="#F97316"
            strokeWidth={2}
            dot={false}
            name="MSFT"
          />
          <Line
            type="monotone"
            dataKey="GOOGL"
            stroke="#10B981"
            strokeWidth={2}
            dot={false}
            name="GOOGL"
          />
          <Line
            type="monotone"
            dataKey="TSLA"
            stroke="#EF4444"
            strokeWidth={2}
            dot={false}
            name="TSLA"
          />
          <Line
            type="monotone"
            dataKey="NVDA"
            stroke="#A855F7"
            strokeWidth={2}
            dot={false}
            name="NVDA"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

