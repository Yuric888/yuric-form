import { Alert, Button, Card, Form } from "react-bootstrap";
import { Note } from "../models/note.model";
import { useRef, useState } from "react";
type Props = {
  listItems: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const FormNoted = ({ listItems, setNotes }: Props) => {
  const [err, setErr] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setErr("All fields are mandatory");
    }

    setErr("");
    setNotes([
      ...listItems,
      {
        id: new Date().toString(),
        title: titleRef.current?.value,
        text: textRef.current?.value,
        date: new Date().toString(),
        color: colorRef.current?.value,
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "#dfdfdf";
  };
  return (
    <Card className="bg-white p-3 mb-3">
      <h2>Create Notes</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            ref={textRef}
            as="textarea"
            placeholder="Enter your notes"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Note Color</Form.Label>
          <Form.Control
            defaultValue="#dfdfdf"
            id="colorInput"
            type="color"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
};

export default FormNoted;
