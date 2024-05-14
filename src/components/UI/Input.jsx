import React from 'react'

const Item = React.forwardRef((props, ref) => {
  return (
    <div className={`flex items-center mb-2`}>
      <label className={`block font-bold mr-2`} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className={`border border-gray-300 rounded-md p-1`}
      />
    </div>
  );
});

export default Item