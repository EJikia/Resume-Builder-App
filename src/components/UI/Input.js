import { Fragment } from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <Fragment>
      <label className={props.labelClassName} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={props.inputClassName}
        name={props.name}
        accept={props.accept}
      />
      <p className={props.hintClassName}>{props.text} </p>
    </Fragment>
  );
};

export default Input;
