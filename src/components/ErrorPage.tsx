import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useRouteError, Link } from "react-router-dom";
type Props = {};

const ErrorPage = (props: Props) => {
  const error: any = useRouteError();
  return (
    <Container
      id="error-page"
      className="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center "
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <Button variant="warning">Home</Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
