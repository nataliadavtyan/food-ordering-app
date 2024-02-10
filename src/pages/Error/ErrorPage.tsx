import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div>
      <h2>Natalia, something went wrong!</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
