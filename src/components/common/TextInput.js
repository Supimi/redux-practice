import React, {PropTypes} from 'react';

const TextInput = ({name, lable,onChange,placeholder,value,error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass+=" " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{lable}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );

};

TextInput.propTypes = {
    name:PropTypes.string.idRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.array.required,
    lable:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    error:PropTypes.object.isRequired
};


export default TextInput;