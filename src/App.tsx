import { useState, useEffect } from 'react'
import axios from 'axios'

interface TodoItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [todo, setTodo] = useState<TodoItem | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRandomTodo = async () => {
    setLoading(true)
    setError(null)
    try {
      const randomId = Math.floor(Math.random() * 20) + 1
      const response = await axios.get<TodoItem>(
        `https://jsonplaceholder.typicode.com/todos/${randomId}`
      )
      setTodo(response.data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Failed to fetch data')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let ignore = false
    axios
      .get<TodoItem>('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        if (!ignore) setTodo(res.data)
      })
      .catch((err) => {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Failed to fetch data')
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  const stackItems = [
    {
      name: 'Vite',
      desc: 'Next Generation Frontend Tooling',
      icon: 'ri-flashlight-fill',
      color: 'from-amber-400 to-yellow-500',
      badge: 'v8.x',
    },
    {
      name: 'React 19',
      desc: 'The library for web and native UIs',
      icon: 'ri-reactjs-line',
      color: 'from-cyan-400 to-blue-500',
      badge: 'v19.x',
    },
    {
      name: 'React Compiler',
      desc: 'Automatic fine-grained memoization',
      icon: 'ri-cpu-line',
      color: 'from-purple-400 to-indigo-500',
      badge: 'Enabled',
    },
    {
      name: 'TypeScript',
      desc: 'Typed JavaScript at Any Scale',
      icon: 'ri-code-s-slash-line',
      color: 'from-blue-400 to-indigo-600',
      badge: 'Strict',
    },
    {
      name: 'Tailwind CSS',
      desc: 'Modern utility-first CSS framework',
      icon: 'ri-palette-line',
      color: 'from-teal-400 to-cyan-500',
      badge: 'v4.x',
    },
    {
      name: 'Axios',
      desc: 'Promise-based HTTP client',
      icon: 'ri-exchange-line',
      color: 'from-purple-500 to-pink-500',
      badge: 'v1.x',
    },
    {
      name: 'Remix Icon',
      desc: 'Open-source neutral icon system',
      icon: 'ri-remix-run-line',
      color: 'from-rose-400 to-red-500',
      badge: 'v4.x',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
      </div>

      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="ri-reactjs-line text-xl text-white"></i>
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              test.react
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Compiler Active
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <i className="ri-sparkling-fill text-amber-400"></i>
            <span>Vite + React Compiler + Tailwind CSS + Axios + Remix Icons</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              test.react
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            A production-ready React 19 template with React Compiler auto-memoization,
            Tailwind CSS utility styling, Axios data fetching, and Remix Icons.
          </p>
        </div>

        {/* Tech Stack Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            <i className="ri-stack-line text-indigo-400"></i>
            <span>Configured Stack</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition duration-300 hover:shadow-xl hover:shadow-indigo-500/5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl shadow-md`}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-100 group-hover:text-white transition">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* React Compiler & State Demo */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <i className="ri-cpu-fill text-indigo-400 text-lg"></i>
                  <h2 className="font-semibold text-lg text-white">
                    React Compiler Demo
                  </h2>
                </div>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                  No useMemo / useCallback
                </span>
              </div>
              <p className="text-sm text-slate-400">
                React Compiler automatically optimizes component re-renders. Try
                clicking the counter below:
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Current count</span>
                <span className="text-2xl font-bold font-mono text-indigo-400">
                  {count}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCount((c) => c + 1)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-medium transition cursor-pointer shadow-lg shadow-indigo-600/20"
                >
                  <i className="ri-add-line text-lg"></i>
                  Increment Count
                </button>
                <button
                  type="button"
                  onClick={() => setCount(0)}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-slate-300 text-sm font-medium transition cursor-pointer"
                  title="Reset count"
                >
                  <i className="ri-refresh-line"></i>
                </button>
              </div>
            </div>
          </section>

          {/* Axios Live API Demo */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <i className="ri-exchange-fill text-purple-400 text-lg"></i>
                  <h2 className="font-semibold text-lg text-white">
                    Axios HTTP Demo
                  </h2>
                </div>
                <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                  Live API
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Fetching data asynchronously via Axios from JSONPlaceholder:
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 min-h-[120px] flex flex-col justify-center">
              {loading && (
                <div className="flex items-center justify-center gap-2 text-slate-400 py-3">
                  <i className="ri-loader-4-line animate-spin text-xl text-purple-400"></i>
                  <span className="text-sm">Fetching via Axios...</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-rose-400 text-sm py-2">
                  <i className="ri-error-warning-line text-lg"></i>
                  <span>{error}</span>
                </div>
              )}

              {!loading && !error && todo && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">Item #{todo.id}</span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold ${
                        todo.completed
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      <i
                        className={
                          todo.completed ? 'ri-check-line' : 'ri-time-line'
                        }
                      ></i>
                      {todo.completed ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-200 capitalize">
                    "{todo.title}"
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={fetchRandomTodo}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.98] disabled:opacity-50 text-white text-sm font-medium transition cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <i className="ri-refresh-line"></i>
              Fetch Random Item (Axios)
            </button>
          </section>
        </div>

        {/* Remix Icons Showcase */}
        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="ri-remix-run-fill text-rose-400 text-lg"></i>
              <h2 className="font-semibold text-lg text-white">
                Remix Icons System
              </h2>
            </div>
            <span className="text-xs text-slate-400">Class-based icons</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 pt-2">
            {[
              { icon: 'ri-home-5-line', label: 'ri-home-5' },
              { icon: 'ri-heart-3-line', label: 'ri-heart-3' },
              { icon: 'ri-user-smile-line', label: 'ri-user-smile' },
              { icon: 'ri-rocket-2-line', label: 'ri-rocket-2' },
              { icon: 'ri-shield-check-line', label: 'ri-shield-check' },
              { icon: 'ri-settings-4-line', label: 'ri-settings-4' },
              { icon: 'ri-code-box-line', label: 'ri-code-box' },
              { icon: 'ri-terminal-window-line', label: 'ri-terminal' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition group cursor-pointer"
              >
                <i
                  className={`${item.icon} text-2xl text-slate-300 group-hover:text-indigo-400 transition-colors duration-200`}
                ></i>
                <span className="text-[10px] font-mono text-slate-500 mt-1 truncate max-w-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick commands */}
        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            <i className="ri-terminal-box-line text-emerald-400"></i>
            <span>Development Scripts</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { cmd: 'npm run dev', desc: 'Starts local Vite dev server' },
              { cmd: 'npm run build', desc: 'Type-checks and builds for production' },
              { cmd: 'npm run preview', desc: 'Locally previews production build' },
            ].map((script) => (
              <div
                key={script.cmd}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1"
              >
                <code className="text-xs font-mono font-bold text-emerald-400">
                  {script.cmd}
                </code>
                <p className="text-xs text-slate-400">{script.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p>
          Project <span className="text-slate-400 font-medium">test.react</span>{' '}
          located at <span className="font-mono text-slate-400">~/Desktop/test.react</span>
        </p>
      </footer>
    </div>
  )
}
