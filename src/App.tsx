import Board from "./components/Board"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex h-screen flex-col p-3 bg-white">
      <div 
      className="grid items-center h-20 grid-cols-1
       text-gray-900 text-3xl font-bold pl-3"
      >
        Kanban Board
      </div>

      <Navbar />
      <Board />
    </div>
  )
}

export default App
