import React from "react";
import ReactDom from "react-dom";

//import CSS
import "./index.css";

// set up vars
// const firstBook = {
//   img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg",
//   title: "I love you to the Moon and Back",
//   author: "by Publications International Ltd.",
// };

// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL640_FMwebp_QL65_.jpg",
//   title: "Our Class is a Family",
//   author: "by Shannon Olsen and Sandie Sonke",
// };

// set up a proper list
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg",
    title: "I love you to the Moon and Back",
    author: "by Publications International Ltd.",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Our Class is a Family",
    author: "by Shannon Olsen and Sandie Sonke",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL640_FMwebp_QL65_.jpg",
    title: "The Wonderful Things You Will Be",
    author: "by Emily Winfield Martin",
  },
];

// const author = "by Publications International Ltd.";
// const title = "I love you to the Moon and Back";
// const img =
//   "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL640_FMwebp_QL65_.jpg";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Show a child just how strong your love is every minute of the day!
          Features a "To" and "From" personalization page, making this sweet
          offering an ideal gift for baby showers, birthdays, and new parents.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const Book = (props) => {
  // const { img, title, author } = props.book;

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };

  const complicatedExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={complicatedExample(author)}>
        complcate example
      </button>
    </article>
  );

  // const { img, title, author, children } = props;

  // return (
  //   <article className="book">
  //     <img src={img} alt=""></img>
  //     <h1>{title}</h1>
  //     <h4>{author}</h4>
  //     {children}
  //   </article>
  // );
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
