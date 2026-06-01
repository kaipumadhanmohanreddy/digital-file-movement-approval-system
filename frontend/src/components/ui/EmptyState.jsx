const EmptyState = ({
  title,
  message,
}) => {
  return (
    <div className="text-center py-14">
      <h2 className="text-xl font-bold text-slate-700">
        {title}
      </h2>

      <p className="text-slate-500 mt-2">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;