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
// export default Test = () => {
//   const [second, setSecond] = useState(0);

//   console.log("in");

//   const clicked = () => {
//     setSecond(second + 1);
//     setSecond(second + 2);
//     setSecond(second + 3);
//   };

//   return (
//     <div>
//       <p>{second}</p>

//       <button
//         onClick={clicked}
//         className="p-2 m-2 bg-black text-white font-bold rounded-md"
//       >
//         Click me !!
//       </button>
//     </div>
//   );
// };

// Question 6

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Test() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

// Question 7

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//   )
// }

// Question 8 -> Very good way of handling object in components,
// good example - https://react.dev/learn/updating-objects-in-state#treat-state-as-read-only

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           name="email"
//           value={person.email}
//           onChange={handleChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }
