const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-5">
      {/* Label */}

      <label
        className="
          block
          text-sm
          font-medium
          text-slate-200
          mb-2
        "
      >
        {label}
      </label>

      {/* Input */}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-4 py-3
          rounded-xl
          bg-white/10
          border
          border-white/20
          text-white
          placeholder-slate-300
          outline-none
          focus:border-blue-400
          focus:ring-2
          focus:ring-blue-500/30
          transition-all
        "
      />
    </div>
  );
};

export default InputField;