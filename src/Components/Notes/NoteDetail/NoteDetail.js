import React from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { notesData } from "../note";
import Comments from "../CommentsByNote/Comments";

export default function NoteDetail() {
  const { slug } = useParams();
  const history = useHistory();
  const match = useRouteMatch();

  const findNote = notesData.find((el) => el.alias === slug);

  // console.log(match);

  return (
    <>
      {findNote && (
        <div className="detail">
          <h2>{findNote.title}</h2>
          <p>{findNote.descriprion}</p>
          <Comments title={findNote.title} />
          <button type="button" onClick={() => history.push("/notes")}>
            Go Back
          </button>

          <button type="button" onClick={() => history.replace("/notes")}>
            Go Back Replace
          </button>

          <button type="button" onClick={() => history.goBack()}>
            Go Back Replace
          </button>
        </div>
      )}
    </>
  );
}
