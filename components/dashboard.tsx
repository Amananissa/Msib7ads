const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p>Content for card 1</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold">Card 2</h2>
              <p>Content for card 2</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold">Card 3</h2>
              <p>Content for card 3</p>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Dashboard;
  