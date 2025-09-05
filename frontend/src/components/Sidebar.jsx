import { Home, ListTodo, User, Settings } from 'lucide-react';

export default function Sidebar(){ 
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-700 to-purple-800 text-white h-screen p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">🚀 Task Manager</h1>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 hover:text-pink-300"><Home /> Dashboard</a>
        <a href="#" className="flex items-center gap-3 hover:text-pink-300"><ListTodo /> My Tasks</a>
        <a href="#" className="flex items-center gap-3 hover:text-pink-300"><User /> Profile</a>
        <a href="#" className="flex items-center gap-3 hover:text-pink-300"><Settings /> Settings</a>
      </nav>
    </aside>
  )
}
