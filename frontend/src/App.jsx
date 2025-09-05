import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  )
}
