import Dashboard from "../components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-emerald-400">Student Campus Hub</h1>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
