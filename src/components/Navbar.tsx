import { Container, Navbar as NavbarBs } from "react-bootstrap";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarBs sticky="top" className="w-100 " variant="dark" bg="dark">
      <Container>
        <NavbarBs.Brand>React-Bootstrap with Typescript</NavbarBs.Brand>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
