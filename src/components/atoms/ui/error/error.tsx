interface ErrorProps {
  error: any;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <div className="mb-4 mt-4 rounded-lg bg-red-100 p-4 text-sm text-red-700">
      <h1 className="text-2xl">Error</h1>
      <p className="font-medium">Error in loading from server: {`${error}`}</p>
    </div>
  );
};
