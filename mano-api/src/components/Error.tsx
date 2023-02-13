import { FC } from "react";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => (
  <div>
    <h1 className="text-red-500 text-center">{message}</h1>
  </div>
);

export default Error;
