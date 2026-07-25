import Navbar from "./Navbar";
import SummaryCard from "./SummaryCard";
import {user}  from "../mockData";
import {
  FaCalendarCheck,
  FaGraduationCap,
  FaBookOpen,
  FaUtensils,
} from "react-icons/fa6";

const summaryCards = [
  {
    title: "Attendance",
    description: "Track subject-wise attendance and stay updated",
    value: "96%",
    label: "This week",
    icon: FaCalendarCheck,
  },
  {
    title: "Grades",
    description: "View marks, GPA and academic performance",
    value: "3.9",
    label: "Current GPA",
    icon: FaGraduationCap,
  },
  {
    title: "Library",
    description: "Search books and manage issued resources",
    value: "14",
    label: "Borrowed",
    icon: FaBookOpen,
  },
  {
    title: "Canteen",
    description: "Explore menu and check food availability",
    value: "Today",
    label: "Fresh meals",
    icon: FaUtensils,
  },
];

 

function Dashboard() {
 
  return (
    <>
      <Navbar />
    

      <main className="pt-24 min-h-screen bg-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">Welcome back</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Hi {user.name}, here&apos;s your dashboard
            </h1>
            <p className="mt-3 text-slate-400">A quick overview of your campus summary and recent activity.</p>
          </div>

          <section className="mb-8 rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Dashboard overview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Your campus at a glance</h2>
            <p className="mt-3 max-w-3xl text-slate-400">Track attendance, academics, events and services in one place.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <SummaryCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  value={card.value}
                  label={card.label}
                  icon={card.icon}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;