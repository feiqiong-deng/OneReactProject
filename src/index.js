import React from "react";
import ReactDom from "react-dom";

//import CSS
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "by Publications International Ltd.";

const Book = () => {
  const title = "I love you to the Moon and Back";

  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg"
        alt=""
      ></img>
      <h1>{title.toUpperCase()}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<Booklist />, document.getElementById("root"));
// ***********************************************************************
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
// ***********************************************************************

// ***********************************************************************
// const Book = () => (
//   <article className="book">
//     <Image />
//     <Title />
//     <Author />
//   </article>
// );

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg"
//     alt=""
//   ></img>
// );

// const Title = () => <h1>The Book of Unusual Knowledge</h1>;

// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     by Publications International Ltd.
//   </h4>
// );
// ***********************************************************************
