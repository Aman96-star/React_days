import React, { useState } from "react";


// const ImageComponent = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleDisplay = () => {
//     setIsActive((prev) => !prev);
//   };

//   return (
//     <div
//       className="flex items-center justify-center w-full h-screen bg-cover bg-center overflow-hidden"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="z-10 border-2 border-black shadow-[0_15px_10px_rgba(0,0,0,1)]">
//         <div className="flex items-center justify-center m-auto w-[800px] h-[600px] bg-wheat border-2 border-black p-4 shadow-[2px_2px_10px_10px_black]">
//           <img
//             className="overflow-hidden w-[800px] h-[550px] rounded-lg shadow-[5px_10px_20px_5px_rgba(0,0,0,0.7)]"
//             src="https://img.freepik.com/free-photo/serious-professional-late-work_1262-19393.jpg"
//             alt="Professional Late Work"
//           />

//           <div className="absolute">
//             <h1 onMouseOver={toggleDisplay}>Text</h1>
//             <div
//               className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8 ${
//                 isActive ? "block" : "hidden"
//               }`}
//             >
//               <div className="bg-white shadow-2xl w-full max-w-6xl aspect-[3/2] flex">
//                 {/* Left Page */}
//                 <div className="w-1/2 bg-[#1a1a1a] text-white p-12 flex flex-col">
//                   <div className="mb-12">
//                     <div className="inline-block bg-white text-black px-4 py-2">
//                       <span className="font-bold tracking-wider">SECTION</span>
//                     </div>
//                   </div>
//                   <div className="flex-1 flex items-center">
//                     <div>
//                       <div className="text-[120px] font-bold leading-none mb-8">
//                         2
//                       </div>
//                       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                         CHOOSING A
//                         <br />
//                         PLATFORM TO BUILD
//                         <br />
//                         YOUR BUSINESS ON
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Right Page */}
//                 <div className="w-1/2 bg-white p-12">
//                   <div className="max-w-xl space-y-6">
//                     <p className="text-gray-800 leading-relaxed">
//                       Thanks to digitalization, you can do almost any business
//                       online. In fact, most people consider e-commerce to be
//                       the new gold.
//                     </p>
//                     <p className="text-gray-800 leading-relaxed">
//                       According to Statista, global online shopping sales will
//                       surpass $6.3 trillion by 2024. Based on this data, it's a
//                       great time to promote your products and services online.
//                     </p>
//                     <p className="text-gray-800 leading-relaxed">
//                       Currently, Shopify is a leading platform for e-commerce
//                       businesses of all sizes.
//                     </p>
//                     <div className="mt-8">
//                       <div className="bg-black text-white px-4 py-2 inline-block mb-4">
//                         Why is Shopify best for my business?
//                       </div>
//                       <ul className="space-y-6">
//                         <li className="flex items-start">
//                           <span className="font-bold mr-2">•</span>
//                           <div>
//                             <p className="font-bold mb-2">Easy access and usage</p>
//                             <p className="text-gray-800 leading-relaxed">
//                               Shopify is user-friendly, requiring no coding skills.
//                             </p>
//                           </div>
//                         </li>
//                         <li className="flex items-start">
//                           <span className="font-bold mr-2">•</span>
//                           <div>
//                             <p className="font-bold mb-2">
//                               Lots of features offered
//                             </p>
//                             <p className="text-gray-800 leading-relaxed">
//                               Shopify provides a customizable storefront, marketing
//                               tools, and more.
//                             </p>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h1 className="top-96 text-4xl left-[35%] font-bold flex justify-center items-center border-2 border-red-950">
//               Lorem ipsum dolor sit amet.
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageComponent;
