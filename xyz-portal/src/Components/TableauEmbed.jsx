function TableauEmbed({ url }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">

      <iframe
        src={url}
        width="100%"
        height="1200"
        frameBorder="0"
        title="Tableau Dashboard"
        className="rounded-xl"
      ></iframe>

    </div>
  );
}

export default TableauEmbed;