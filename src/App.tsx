import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyCard from "./components/TechnologyCard"
import StackPanel from "./components/StackPanel"
import Footer from "./components/Footer"
import type { Technology } from "./types"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css" // 

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => {
        toast.error("Failed to load technologies.")
        setLoading(false)
      })
  }, [])

  const addToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const removeFromStack = (id: number) => {
    const removed = stack.find((item) => item.id === id)
    setStack(stack.filter((item) => item.id !== id))
    if (removed) toast.info(`${removed.name} removed from stack`)
  }

  const removeAll = () => {
    setStack([])
    toast.info("Stack cleared")
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-2 text-slate-900">
          Explore the{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-left text-slate-400 text-sm mb-10">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <div className="flex flex-col items-center py-20 justify-center">
            <div className="w-12 h-12 border-4 border-t-transparent rounded-full border-pink-500 animate-spin"></div>
            <p className="mt-4 text-gray-500"> Loading...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <StackPanel
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            </div>
          </div>
        )}
      </main>
      <ToastContainer position="bottom-right" autoClose={3000} />
        <Footer></Footer>
      
    </div>
  )
}

export default App