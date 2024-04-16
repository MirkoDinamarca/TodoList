import "./Input.module.css";
import style from "./Input.module.css";

const Input = ({search, onChangeHandler}) => {

    return (
        <input type="text" value={search} onChange={onChangeHandler} />
    )
}

export default Input