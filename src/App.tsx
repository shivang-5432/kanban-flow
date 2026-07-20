import { useState } from "react"
import Board from "./components/Board"
import Navbar from "./components/Navbar"
import Button from "./components/Button";

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen flex-col p-3 bg-white">
      <div 
      className="items-center h-20 flex justify-between
       text-gray-900 text-3xl font-bold pl-3"
      >
        Kanban Board
        <Button name="Add Task" />
      </div>
      <Navbar />
      <Board />
    </div>
  )
}

export default App
