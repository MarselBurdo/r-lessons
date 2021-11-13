import React, { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import CommentsList from "./CommentsList/CommentsList";
import { seedComments } from "./seed";

const CommentAdd = lazy(() =>
  import(/* webpackChunkName: "CommentAdd" */ "./CommentAdd/CommentAdd")
);

export default function Comments({ title }) {
  const [list, setList] = useState(null);

  useEffect(() => {
    /**
     * fake request from API ->> seedComments()
     */

    setList(seedComments());
  }, [title]);

  return (
    <>
      <CommentsList list={list} />
      <Suspense fallback={<h3>Download Add Form</h3>}>
        <CommentAdd setList={setList} />
      </Suspense>
    </>
  );
}
