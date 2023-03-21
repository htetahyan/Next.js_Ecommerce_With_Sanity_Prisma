// components/Sidebar.js
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <nav className="bg-gray-800 w-64 h-screen">
      <div className="text-white font-bold text-2xl p-6">
        <FontAwesomeIcon icon={faChartLine} /> Dashboard
      </div>
      <ul>
        <li className="px-6 py-2">
          <Link href="/">
            <h5 className="text-gray-300 hover:bg-gray-700">Home</h5>
          </Link>
        </li>
        <li className="px-6 py-2">
          <Link href="/orders">
            <h5 className="text-gray-300 hover:bg-gray-700">Orders</h5>
          </Link>
        </li>
        <li className="px-6 py-2">
          <Link href="/products">
            <h5 className="text-gray-300 hover:bg-gray-700">Products</h5>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
