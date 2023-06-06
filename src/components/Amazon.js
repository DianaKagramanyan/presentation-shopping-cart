import React from 'react';
import list from "../data";
import Cards from "./Cards";
import '../styles/Amazon.css';
import '../styles/Input.css'

const Amazon = ({handleClick, searchInput}) => {

  return (
    <section>
      {list.filter(el =>
        el.title.toLowerCase().includes(searchInput.toLowerCase())).map((el) => (
        <Cards key={el.id} item={el} handleClick={handleClick}
        />
      ))}

      {/*{*/}
      {/*  list.map((item) =>*/}
      {/*    (<Cards key={item.id} item={item} handleClick={handleClick}*/}
      {/*    />))}*/}
    </section>
  );
};

export default Amazon;
