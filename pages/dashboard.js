// pages/dashboard.js
import Layout from "../components/dashboard/Layout"
import LineChart from "../components/dashboard/Linechart"

function Dashboard() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 120, 80, 90, 110, 100, 120],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1,
      },
    ],
  }

  const options = {}

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create new order
        </button>
      </div>
      <div className="bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Sales chart</h2>
        <LineChart data={data} options={options} />
      </div>
    </Layout>
  )
}

export default Dashboard
