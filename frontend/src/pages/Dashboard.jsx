import { useEffect, useMemo, useState } from 'react'
import TaskCard from '../components/TaskCard'

export default function Dashboard(){
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('all')

  async function load(){
    setLoading(true)
    try{
      const res = await fetch('/api/demo-not-available').catch(()=>null)
      setTasks(prev=> prev.length ? prev : [
        { id: 1, title: 'Design dashboard', description: 'Make it look nice', completed: false },
        { id: 2, title: 'Backend API', description: 'Auth & tasks', completed: true }
      ])
    }finally{ setLoading(false) }
  }

  useEffect(()=>{ load() }, [])

  const addTask = ()=>{
    if(!newTitle.trim()) return
    setTasks([{ id: Date.now(), title: newTitle, completed:false }, ...tasks])
    setNewTitle('')
  }

  const toggleTask = (t)=> setTasks(tasks.map(x=> x.id===t.id? {...x, completed: !x.completed}: x))
  const deleteTask = (t)=> setTasks(tasks.filter(x=> x.id!==t.id))

  const counts = useMemo(()=>({ all: tasks.length, active: tasks.filter(t=>!t.completed).length, completed: tasks.filter(t=>t.completed).length }), [tasks])

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-6">
        <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} className="px-4 py-2 rounded-lg flex-1 bg-white/20 text-white placeholder-gray-300" placeholder="Add a new task..." />
        <button onClick={addTask} className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg">Add</button>
      </div>

      <div className="flex gap-3 mb-4">
        <button onClick={()=>setStatus('all')} className="px-3 py-1 rounded-full bg-white/10">All ({counts.all})</button>
        <button onClick={()=>setStatus('active')} className="px-3 py-1 rounded-full bg-white/10">Active ({counts.active})</button>
        <button onClick={()=>setStatus('completed')} className="px-3 py-1 rounded-full bg-white/10">Completed ({counts.completed})</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map(t=> <TaskCard key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />)}
        </div>
      )}
    </div>
  )
}
