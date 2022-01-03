import React from "react";
import ReactDom from "react-dom";

//import CSS
import "./index.css";

// set up vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg",
  title: "I love you to the Moon and Back",
  author: "by Publications International Ltd.",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL640_FMwebp_QL65_.jpg",
  title: "Our Class is a Family",
  author: "by Shannon Olsen and Sandie Sonke",
};

// const author = "by Publications International Ltd.";
// const title = "I love you to the Moon and Back";
// const img =
//   "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg";

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt=""></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
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
