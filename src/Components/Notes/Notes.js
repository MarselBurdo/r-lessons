import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { getNotes } from "../../redux/actions/noteAction";
// import { notesData } from "./note";
import NoteDetail from "./NoteDetail/NoteDetail";
import "./style.css";

export default function Notes() {
  const dispatch = useDispatch();
  const notesDataRedux = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <>
      <div className="view">
        {/* <Route path="/notes/:slug" >
          <NoteDetail />
        </Route> */}
        <Route path="/notes/:slug" component={NoteDetail} />
      </div>
      {notesDataRedux &&
        notesDataRedux.map(({ title, alias, text, author }) => (
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
