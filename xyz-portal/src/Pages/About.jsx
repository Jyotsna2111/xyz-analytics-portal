function About() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        About Project
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <p className="text-lg leading-8 text-gray-700">
          This analytics portal was built using React,
          Tailwind CSS, and Tableau Public.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Technologies Used
        </h2>

        <ul className="list-disc ml-6 text-gray-700 leading-8">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Tableau Public</li>
          <li>Vercel Deployment</li>
        </ul>

      </div>

    </div>
  );
}

export default About;