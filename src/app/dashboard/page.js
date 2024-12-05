import DashList from "./components/dash-list";

export default function Dashboard() {
  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Products List
          </h1>
        </div>
      </header>
      <DashList />
    </>
  );
}
