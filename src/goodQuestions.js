import { useEffect, useState } from "react";

//Question 1 - not very good question
// export default function Test() {
//   const [list, setList] = useState([{ id: "1" }, { id: "2" }]);

//   const handleReverseClick = () => {
//     console.log("1");
//     setList(list.reverse());
//   };

//   console.log(list);

//   return (
//     <div>
//       {list.length}
//       {list &&
//         list.map((item, index) => (
//           <p key={index} className="p-1 m-1 bg-pink-200">
//             {item.id}
//           </p>
//         ))}
//       <button
//         className="p-2 m-2 bg-gray-400 active:bg-red-300 rounded-md  text-black"
//         onClick={handleReverseClick}
//       >
//         Click me !!
//       </button>
//     </div>
//   );
// }

// Question 2 - Role of closure in set timeout
// export default Test = () => {
//   const [count, setCount] = useState(0);
//   console.log("1");
//   console.log("count at top - " + count);
//   useEffect(() => {
//     console.log("2");
//     const interval = setInterval(() => {
//       console.log("4");
//       console.log("count - " + count);
//       setCount((interval) => interval + 1);
//     }, 1000);

//     // const interval = setInterval(() => {
//     //   console.log("4");
//     //   console.log("count - " + count);
//     //   setCount(count + 2);
//     // }, 1000);

//     return () => {
//       console.log("3");

//       return clearInterval(interval);
//     };
//   }, []);

//   return <div>{count}</div>;
// };

// Question 3
// export default Test = () => {
//   const [color, setColor] = useState("red");
//   const [count, setCount] = useState(0);

//   const clickE = () => {
//     setColor("blue");
//   };

//   console.log(color);
//   console.log(count);

//   useEffect(() => {
//     console.log("effects");
//     //setCount(count + 1);
//   }, [color, count]);

//   return (
//     <div>
//       <button
//         className="p-2 m-2 bg-gray-400 active:bg-red-300 rounded-md  text-black"
//         onClick={() => clickE(Math.random())}
//       >
//         Click me !!
//       </button>
//     </div>
//   );
// };

// Question 4

// export default Test = () => {
//   const [count, setCount] = useState(0);

//   console.log("1");

//   useEffect(() => {
//     console.log("6");
//     return () => {
//       console.log("2");
//     };
//   }, [count]);

//   useEffect(() => {
//     console.log("7");
//     setCount((count) => count + 1);
//   });

//   return <Child count={count} />;
// };

// function Child({ count }) {
//   useEffect(() => {
//     console.log("3");

//     return () => {
//       console.log("4");
//     };
//   }, [count]);

//   return <Child2 count={count}></Child2>;
// }

// const Child2 = ({ count }) => {
//   useEffect(() => {
//     console.log("9");
//     return () => {
//       console.log("10");
//     };
//   }, [count]);
// };

// Question 5
export default Test = () => {
  const [second, setSecond] = useState(0);

  console.log("in");

  const clicked = () => {
    setSecond(second + 1);
    setSecond(second + 2);
    setSecond(second + 3);
  };

  return (
    <div>
      <p>{second}</p>

      <button
        onClick={clicked}
        className="p-2 m-2 bg-black text-white font-bold rounded-md"
      >
        Click me !!
      </button>
    </div>
  );
};
