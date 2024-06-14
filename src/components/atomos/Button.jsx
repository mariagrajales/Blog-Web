const Button = ({ children, onClick, type }) => {
    return (
      <button className="Button" onClick={onClick} type={type}>
        {children}
      </button>
    );
  };
  
  export default Button;