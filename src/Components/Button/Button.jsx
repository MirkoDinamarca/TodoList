import "./Button.module.css";
import style from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={style.Button}>
      {text}
    </button>
  );
};

export default Button;