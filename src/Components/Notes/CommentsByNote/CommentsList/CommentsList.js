import React from "react";
import "./style.css";

export default function CommentsList({ list }) {
  return (
    <div>
      <ul>
        {list?.map(({ author, id, text, date }) => (
          <li key={id} className="comments">
            <span className="author">{author}</span>
            <p>{text}</p>
            <span className="date">{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
