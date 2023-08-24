import React from "react";

const SearchBar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInput,
  icon,
}) => {
  return (
    <div>
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleInput}
          className={`bg-gray-800/70 w-full border border-gray-800 text-white rounded-full focus:ring-1 focus:ring-white focus:border-white p-2.5 outline-none px-5 placeholder:text-sm`}
        />
        {icon && (
          <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
