import { motion } from 'framer-motion';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="cursor-pointer">
      <div className="p-4 rounded-2xl bg-white/6 backdrop-blur-md border border-white/20 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">{task.title}</h2>
            {task.description && <p className="mt-2 text-sm opacity-80">{task.description}</p>}
            {task.dueDate && <div className="mt-2 text-xs opacity-70">Due: {new Date(task.dueDate).toLocaleDateString()}</div>}
          </div>
          <div className="flex flex-col items-end gap-2">
            <button onClick={()=>onToggle(task)} className="px-3 py-1 rounded-full text-sm bg-white/10">{task.completed ? 'Done' : 'Pending'}</button>
            <button onClick={()=>onDelete(task)} className="text-sm text-red-300">Delete</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
