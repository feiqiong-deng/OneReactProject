import React from "react";

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

export default Book;
