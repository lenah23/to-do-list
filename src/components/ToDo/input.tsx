import styles from "./todo.module.scss";

interface IProps {
  onChange: () => void;
  placeholder: string;
}

const CustomInput: React.FC<IProps> = (props) => {
  const { onChange, placeholder } = props;
  return (
    <input placeholder={placeholder} onChange={onChange} className={styles["todo-input"]} />
  );
};

export default CustomInput;
