import React from 'react';

const Button = (props) => {
  const type = props.type;
  const onClick = props.onClick;
  const children = props.children;

  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
