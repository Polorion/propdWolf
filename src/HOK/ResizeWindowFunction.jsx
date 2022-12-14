// import * as React from "react";
// import { useEffect, useState } from "react";
//
// const ResizeWindowFunction = (Children) => {
//   const [h, setH] = useState(window.screen.availWidth);
//   useEffect(() => {
//     const windowRaz = () => {
//       const w = document.querySelector(".container").clientWidth;
//       setH(w * 1);
//     };
//     window.addEventListener("resize", windowRaz);
//     window.addEventListener("orientationchange", windowRaz);
//     return () => {
//       window.removeEventListener("resize", windowRaz);
//       window.removeEventListener("orientationchange", windowRaz);
//     };
//   });
//   return <Children />;
// };
//
// export default ResizeWindowFunction;
