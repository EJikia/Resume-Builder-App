import { Fragment } from "react";
import "./Textarea.scss";

const Textarea = (props) => {
  return (
    <Fragment>
      <label className={props.labelClassName} htmlFor={props.name}>{props.label}</label>
      <textarea
        className={props.inputClassName}
        name={props.name}
      />
      
    </Fragment>
  );
};

export default Textarea;
