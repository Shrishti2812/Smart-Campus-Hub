function Sidebar() {
  return (
    <aside className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]">
      <div className="text-slate-300">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">Navigation</p>
        <nav className="mt-6 space-y-2">
          <a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#overview">
            Dashboard
          </a>
          <a className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800" href="#attendance">
            Attendance
          </a>
          <a className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800" href="#classes">
            Classes
          </a>
          <a className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800" href="#events">
            Events
          </a>
          <a className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800" href="#services">
            Services
          </a>
        </nav>

        <div className="mt-8 rounded-[28px] border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">Today</p>
          <p className="mt-4 text-lg font-semibold text-white">Next event</p>
          <p className="mt-2 text-sm text-slate-400">Club meetup at 4:30 PM</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;