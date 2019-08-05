import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="mt-4">Dashboard</div>
      <p className="lead mb-3">Welcome</p>
      <a href="/users/logout" className="btn btn-secondary">
        logout
      </a>
    </div>
  );
}

export default Dashboard;
