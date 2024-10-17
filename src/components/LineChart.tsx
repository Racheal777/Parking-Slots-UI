
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Line
        data={chartData}
        options={{
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
          plugins: {
            title: {
              display: true,
              text: "Peak Booking Times"
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;