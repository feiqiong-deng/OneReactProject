import React from "react";
import ReactDom from "react-dom";

function Booklist() {
  return <Book />;
}

const Book = () => (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71WC3z4Wt0L._AC_UL640_QL65_.jpg"
    alt=""
  ></img>
);

const Title = () => <h1>The Book of Unusual Knowledge</h1>;

const Author = () => <h4>by Publications International Ltd.</h4>;

ReactDom.render(<Booklist />, document.getElementById("root"));

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//     // <div>
//     //   <h1>This is Fei and this is my first component</h1>
//     // </div>
//   );
// }

// const Person = () => <h2>Alice Tang</h2>;

// const Message = () => {
//   return <p>This is my message</p>;
// };
