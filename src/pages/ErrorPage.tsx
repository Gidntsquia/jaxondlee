import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { MdHome } from "react-icons/md";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }
  if (errorMessage.includes("undefined")) {
    errorMessage = "There is no project or page at this address.";
  }

  return (
    <>
      <Box px={{ base: 3, md: 5 }} as="main">
        <Heading mt={6}>That page did not load.</Heading>
        <Text my={4}>{errorMessage}</Text>
        <Button variant="outline" borderColor="line" leftIcon={<MdHome />} onClick={() => navigate("/")}>
          Return home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;
