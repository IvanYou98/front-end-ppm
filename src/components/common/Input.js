import React from 'react';

function Input({type, placeholder, name, value, onChange, className, readOnly = false}) {
    return (
        <div className="form-group">
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                readOnly={readOnly}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;