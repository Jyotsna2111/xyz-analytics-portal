// import "@tableau/embedding-api";
// import { useEffect, useRef } from "react";

// function TableauEmbed({ url }) {

//   const vizRef = useRef(null);

//   useEffect(() => {

//     const timer = setTimeout(() => {

//       if (vizRef.current) {

//         vizRef.current.style.display = "none";

//         setTimeout(() => {
//           vizRef.current.style.display = "block";
//           window.dispatchEvent(new Event("resize"));
//         }, 100);

//       }

//     }, 1000);

//     return () => clearTimeout(timer);

//   }, []);

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4">

//       <tableau-viz
//         ref={vizRef}
//         src={url}
//         toolbar="bottom"
//         hide-tabs
//         style={{
//           width: "100%",
//           height: "1200px",
//         }}
//       ></tableau-viz>

//     </div>
//   );
// }

// export default TableauEmbed;


import { useEffect, useRef } from "react";

 

function TableauEmbed({ url }) {
  const containerRef = useRef(null);

 

  useEffect(() => {
    const initViz = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", url);
        viz.setAttribute("width", "100%");
        viz.setAttribute("height", "1200");
        viz.setAttribute("toolbar", "bottom");
        viz.setAttribute("hide-tabs", "false");
        containerRef.current.appendChild(viz);
      }
    };

 

    // Wait for custom element to be fully ready
    if (customElements.get("tableau-viz")) {
      // Already registered, init directly
      initViz();
    } else {
      // Wait until it's defined
      customElements.whenDefined("tableau-viz").then(() => {
        initViz();
      });
    }
  }, [url]);

 

  return (
<div className="bg-white rounded-2xl shadow-lg p-4">
<div ref={containerRef} style={{ width: "100%", minHeight: "1200px" }} />
</div>
  );
}

 

export default TableauEmbed;

