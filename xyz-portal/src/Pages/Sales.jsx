import TableauEmbed from "../components/TableauEmbed";

function Sales() {

  const salesUrl =
    "https://public.tableau.com/views/XYZ_retail_chain_sales2/Dashboard1?:showVizHome=no";

  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Sales Dashboard
      </h1>

      <TableauEmbed url={salesUrl} />

    </div>
  );
}

export default Sales;