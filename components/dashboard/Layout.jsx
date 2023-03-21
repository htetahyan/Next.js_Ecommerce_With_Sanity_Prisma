// components/Layout.js
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

export default Layout
