import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const [show, setShow] =
    useState(false);

  return (
    <div className="mb-5">
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

      <div className="relative">
        <input
          type={
            show ? "text" : "password"
          }
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
          "
        />

        <button
          type="button"
          onClick={() =>
            setShow(!show)
          }
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-300
            cursor-pointer
          "
        >
          {show ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;