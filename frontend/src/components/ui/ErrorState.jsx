const ErrorState = ({
  message,
}) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-red-500 text-lg font-semibold">
        {message}
      </h2>
    </div>
  );
};

export default ErrorState;