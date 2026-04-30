import TableauEmbed from "../Components/TableauEmbed";

function Quality() {

  const qualityUrl =
    "https://public.tableau.com/views/XYZ_retail_chain_quality4/Dashboard2?:showVizHome=no";

  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Quality Dashboard
      </h1>

      <TableauEmbed url={qualityUrl} />

    </div>
  );
}

export default Quality;