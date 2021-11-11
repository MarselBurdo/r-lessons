import React from "react";
import { Link, Route } from "react-router-dom";
import { notesData } from "./note";
import NoteDetail from "./NoteDetail";
import "./style.css";

export default function Notes() {
  return (
    <>
      <div className="view">
        {/* <Route path="/notes/:slug" >
          <NoteDetail />
        </Route> */}
        <Route path="/notes/:slug" component={NoteDetail} />
      </div>
      {notesData &&
        notesData.map(({ title, alias, text, author }) => (
          <div className="card" key={alias}>
            <h3>{title}</h3>
            <p className="card_text">{text}</p>
            <h4>{author}</h4>
            <Link to={`/notes/${alias}`}>More information</Link>
          </div>
        ))}
    </>
  );
}

/**
 * menu
 *    home
 *    registry
 *          -main
 *          -current
 *              -total
 *          -analitics
 *              -report
 *              -constructor (path:'/registry/:childrenRegistry/constructor/:child')
 *              -executor
 */
