import React, { useRef } from "react";

const Dropdown = (props) => {
  const selectedValueRef = useRef();

  const changeHandler = () => {
    const selectedValue = selectedValueRef.current.value;
    if (props.onSelectedValue) {
      props.onSelectedValue(selectedValue);
    }
  };
  return (
    <div>
      <select name={props.lang} onChange={changeHandler} ref={selectedValueRef}>
        {props.items.map((item) => (
          <option key={item.val} value={item.val}>
            {item.desc}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
