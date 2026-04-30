function Home() {
  return (
    <div>

      <h1 className="text-5xl font-bold text-blue-900 mb-6">
        Welcome to XYZ Analytics Portal
      </h1>

      <p className="text-lg text-gray-700 leading-8">
        This portal provides insights into sales performance,
        operational metrics, and outlet quality analytics
        across all XYZ retail stores.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">
            Sales Insights
          </h2>

          <p>
            Track revenue trends, outlet performance,
            and growth metrics.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">
            Quality Metrics
          </h2>

          <p>
            Monitor quality scores, incidents,
            and customer satisfaction.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">
            Interactive Dashboards
          </h2>

          <p>
            Fully interactive Tableau dashboards
            embedded inside React.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;