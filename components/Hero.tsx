import { user } from "../mockData";
function Hero(){
    return (

      <main className=" p-15 min-h-screen bg-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">Welcome back</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Hi {user.name} , here's your quick campus review 
            </h1>
           
          </div>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/30">
              <p className="text-sm text-slate-400">Total Users</p>
              <p className="mt-4 text-3xl font-semibold text-white">1,248</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/30">
              <p className="text-sm text-slate-400">Revenue</p>
              <p className="mt-4 text-3xl font-semibold text-white">$18.4K</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-900/30">
              <p className="text-sm text-slate-400">Tasks Completed</p>
              <p className="mt-4 text-3xl font-semibold text-white">82%</p>
            </div>
          </section>
        </div>
      </main>
    )
}
export default Hero;