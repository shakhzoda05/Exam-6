import React from 'react';

function Input({ placeholder, extraStyle, type, name, defaultValue, required, onInput }) {
  return (
    <input
      name={name}
      onInput={onInput}
      defaultValue={defaultValue}
      required={required}
      placeholder={placeholder}
      type={type}
      className={`w-full placeholder:text-gray placeholder:bg-white-500  outline-none font-medium rounded p-[13px] font-kubmh text-sm border-[.5px] border-gray-100 leading-[17.36px] ${extraStyle}`}
    />
  );
}

export default Input;