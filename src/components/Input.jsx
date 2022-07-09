import React from 'react';

const Input = (props) => {
  const type = props.type;
  const value = props.value;
  const placeholder = props.placeholder;
  const onChange = props.onChange;

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
