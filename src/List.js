import React from "react";
import "./List.css";

const List = () => {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="list1">
      <div className="list2">
        <ul className="unordered">
          <li>
            <a href="/" className="listanchor" onClick={prevent}>
              All Posts(32)
            </a>
          </li>
          <li className="listanchor2">
            <a href="/">Article</a>
          </li>
          <li className="listanchor2">
            <a href="/">Event</a>
          </li>
          <li className="listanchor2">
            <a href="/">Job</a>
          </li>
        </ul>
        <select className="dropdowns">
          <option>write a post</option>
        </select>
        <button type="button" className="btn btn-primary mx-2 listbutton">
          Join Group
        </button>
        <hr />
      </div>
    </div>
  );
};

export default List;
