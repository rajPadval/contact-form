// import React, { useEffect, useState } from "react";

// // importing icons from react icons
// import { MdEmail } from "react-icons/md";
// import { BsPhone } from "react-icons/bs";
// import { BiMessageRounded } from "react-icons/bi";

// // importing css for this container
// import "./Container.css";

// const Container = () => {
//   // // state for saving data
//   // const [post, setPost] = useState([]);

//   // // useEffect hook is called to get data when the page loads2
//   // useEffect(() => {
//   //   getData();
//   // }, [post]);

//   // //   getting data
//   // const getData = async () => {
//   //   const response = await fetch("http://localhost:5000/api/get-data");
//   //   const data = await response.json();
//   //   setPost(data);
//   // };

//   return (
//     <>
//       <div className="divBox">
//         {post.map((value, i) => {
//           return (
//             <div key={i} className="card">
//               <h3>{value.name}</h3>
//               <div className="subData">
//                 <span className="insideData">
//                   <MdEmail />
//                   {value.email}
//                 </span>
//                 <span className="insideData">
//                   <BsPhone /> {value.phone}
//                 </span>
//                 <span className="insideData">
//                   <BiMessageRounded /> {value.message}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Container;
