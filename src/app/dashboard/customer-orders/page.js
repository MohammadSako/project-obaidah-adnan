import DashList from "../components/dash-list";

export default function CustomersOrders() {
  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Customers Orders
          </h1>
        </div>
      </header>
      <DashList />
    </>
  );
}
