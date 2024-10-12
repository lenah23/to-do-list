import styles from './todo.module.scss';

interface IProps {
  onChange: (val: any) => void;
  placeholder: string;
  handleKeyPress: any;
  value: string
}

const CustomInput: React.FC<IProps> = (props) => {
  const { onChange, placeholder, handleKeyPress, value } = props;
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className={styles['todo-input']}
      onKeyPress={handleKeyPress}
      value={value}
    />
  );
};

export default CustomInput;
