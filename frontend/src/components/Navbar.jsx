import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar(){ 
  const [dark, setDark] = useState(false);
  return (
    <header className="flex justify-between items-center bg-white/10 backdrop-blur-lg p-4 border-b border-white/20">
      <input type="text" placeholder="🔍 Search tasks..." className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" />
      <div className="flex items-center gap-4">
        <button onClick={()=>setDark(!dark)} className="p-2 rounded-full hover:bg-white/20">{dark ? <Sun className="text-yellow-400" /> : <Moon />}</button>
        <img src="https://i.pravatar.cc/40" alt="avatar" className="w-10 h-10 rounded-full border-2 border-pink-400" />
      </div>
    </header>
  )
}
