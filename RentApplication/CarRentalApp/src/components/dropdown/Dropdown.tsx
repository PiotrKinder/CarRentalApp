import React, { useRef } from "react";

const Dropdown = (props: {
  onSelectedValue: (arg0: any) => void;
  items: any[];
  name: string;
}) => {
  const changeHandler = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value || "";
    if (props.onSelectedValue) {
      props.onSelectedValue(selectedValue);
    }
  };
  return (
    <div>
      <select name={props.name} onChange={changeHandler}>
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
