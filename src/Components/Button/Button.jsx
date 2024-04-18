import "./Button.module.css";
import style from "./Button.module.css";

const Button = ({ text, onClick, classStyle }) => {
  return (
    <button onClick={onClick} className={style[classStyle]}>
      {text}
    </button>
  );
};

export default Button;