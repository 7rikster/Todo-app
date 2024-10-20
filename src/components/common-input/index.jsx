import './inputStyle.css';

function CommonInput({type, placeholder, value, name, onChange, className}) {
    return ( 
        <input
            type = {type || "text"}
            placeholder = {placeholder || "Enter value here "}
            value = {value}
            name = {name}
            onChange = {onChange}
            className = {className || "input"}
        />
    );
}

export default CommonInput;

