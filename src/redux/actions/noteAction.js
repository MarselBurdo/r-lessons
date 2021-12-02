import { notesData } from "../../Components/Notes/note";
import { GET_NOTES } from "../actionTypes";

export const getNotes = () => ({
  type: GET_NOTES,
  payload: notesData,
});
