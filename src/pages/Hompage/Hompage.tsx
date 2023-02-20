import { Container } from "react-bootstrap";
import { Note } from "../../models/note.model";
import NotesList from "../../components/NotesList";
import FormNoted from "../../components/FormNoted";
import { useLocalstorage } from "../../hooks/useLocalStorage";
type Props = {};

const Hompage = (props: Props) => {
  const [notes, setNotes] = useLocalstorage<Note[]>("yuric-form", [
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <Container className="py-5">
      <FormNoted listItems={notes?.reverse()} setNotes={setNotes} />
      <NotesList listItems={notes} setNotes={setNotes} />
    </Container>
  );
};

export default Hompage;
