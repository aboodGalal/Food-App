import React from 'react'

const Item = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={``} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Item