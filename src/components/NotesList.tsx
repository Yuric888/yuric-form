import { Button, Card, Stack } from "react-bootstrap";
import { Note } from "../models/note.model";

type Props = {
  listItems: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = ({ listItems, setNotes }: Props) => {
  const handleDelete = (id: string) => {
    setNotes(listItems.filter((item) => item.id !== id));
  };

  return (
    <Stack gap={2}>
      <h2>Notes</h2>

      {listItems.length > 0 &&
        listItems.map((item) => {
          return (
            <Card
              key={item.id}
              className="p-3 mb-3 ouline-none"
              style={{ backgroundColor: item.color }}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Card.Subtitle className="text-muted">
                  {item.date}
                </Card.Subtitle>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="mt-3"
                  variant="danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </Stack>
  );
};

export default NotesList;
