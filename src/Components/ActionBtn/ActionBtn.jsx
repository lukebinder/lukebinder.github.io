import "./ActionBtn.scss";

const ActionBtn = ({ type = "primary", onClick, children }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionBtn;
