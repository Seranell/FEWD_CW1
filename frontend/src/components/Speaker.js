// import React, { useState, useEffect } from "react";
// import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Tag from "./Tag";
// import Description from "./Description";
// import Favourite from "./Favourite";

// function DisplaySpeakers() {
//   const [talks, setTalks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTag, setSelectedTag] = useState(null);
//   const [openDesc, setOpenDesc] = useState(null);
//   const [bmSelected, setBMSelected] = useState(false);

//   const handleSelect = (id) => {
//     setBMSelected((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   function NextArrow(props) {
//     const { className, onClick } = props;
//     return (
//       <div className={`${className} group`} onClick={onClick}>
//         <HiChevronDoubleRight
//           className="text-black transition-transform duration-200 group-hover:scale-125"
//           size={28}
//         />
//       </div>
//     );
//   }

//   function PrevArrow(props) {
//     const { className, onClick } = props;
//     return (
//       <div className={`${className} group`} onClick={onClick}>
//         <HiChevronDoubleLeft
//           className="text-black transition-transform duration-200 group-hover:scale-125"
//           size={28}
//         />
//       </div>
//     );
//   }

//   useEffect(() => {
//     fetch("http://localhost:3001/talks")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTalks(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error Loading Talks", error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredTalks = selectedTag ? talks.filter((talk) => talk.tags.includes(selectedTag)) : talks;

//   const settings = {
//     dots: true,
//     infinite: filteredTalks.length > 3,
//     speed: 500,
//     slidesToShow: Math.min(3, filteredTalks.length),
//     slidesToScroll: 2,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: Math.min(1, filteredTalks.length),
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     afterChange: (index) => {
//       setOpenDesc(null);
//     }
//   };

//   const toggleDesc = (index) => {
//     setOpenDesc(openDesc === index ? null : index);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={{ margin: "0 auto", width: "80%" }}>
//       <h2 className="text-4xl font-bold pb-5">Conference Talks</h2>

//       {selectedTag && (
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-lg">Filtered by: </span>
//           <button onClick={() => setSelectedTag(null)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
//             {selectedTag} (Clear Filter)
//           </button>
//         </div>
//       )}
//       <Slider {...settings}>
//         {filteredTalks.map((talk, slideIndex, index) => (
//           <div className="flex flex-col items-center bg-white p-6 rounded-lg gap-y-4" key={talk.id}>
//             <Favourite selected={bmSelected[talk.id] || false}
//             onSelect={() => handleSelect(talk.id)} />
//             {talk.img && (
//               <img src={talk.img} alt={talk.speaker} className="w-60 h-60 object-cover mb-4 rounded-full"/>
//             )}
//             <h3 className="text-xl font-semibold">{talk.title}</h3>
//             <p className="text-lg pb-4">{talk.speaker}</p>
//             <p className="pb-3">Session:{talk.session}</p>

//             <div className="flex flex-wrap gap-2">
//               {talk.tags.map((tag, index) => (
//                 <Tag key={index} text={tag} onClick={() => setSelectedTag(tag)} />
//               ))}

//             </div>
//             <Description desc={talk.description} isOpen={openDesc === slideIndex} onToggle={() => toggleDesc(slideIndex)}/>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default DisplaySpeakers;
