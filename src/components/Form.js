import React, { useContext, useState } from 'react';
import SharedStateContext from '../ContextProvider';

export default function Form() {
  const {BookArray, Bookconstructor} = useContext(SharedStateContext)
  const [Bookname, setBookName] = useState();
  const [Author, setAuthor] = useState();

  const handleBookname = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const book = new Bookconstructor(Bookname, Author);
    BookArray.push(book);
    console.log(BookArray);
  }
  return (
    <form onSubmit={onSubmit}>
      <input className="Book-name" value={Bookname}
            onChange={handleBookname} type="text" />
      <input className="Author" value={Author}
            onChange={handleAuthor} type="text" />
    </form>
  );
}
