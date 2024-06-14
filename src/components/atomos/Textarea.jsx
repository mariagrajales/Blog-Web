import "./global.css"

const Textarea = ({ placeholder, value, onChange, required }) => {
    return (
      <textarea className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    );
  };
  
  export default Textarea;