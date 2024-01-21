import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return <div>Error boss: {error?.status} - {error?.statusText}</div>;
};
export default Error;
