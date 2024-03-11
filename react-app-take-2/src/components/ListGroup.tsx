// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // {item: string} => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // This function is called Hook
  // We tell react that we have components thats changed over time.
  const [selectedindex, setselectedIndex] = useState(-1);
  // From useState docs, useState returns two array values: [selected ]

  // const message = items.length === 0 ? <p>No item found</p> : null;
  const message = items.length === 0 && <p>No item found</p>;

  // Event Handler
  // const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>{heading}</h1>

      {message}

      <ul className="list-group">
        {
          // Alternative to foreach array (only usable in JSX/TSX Markup)
          items.map((item, index) => (
            <li
              className={
                selectedindex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setselectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
