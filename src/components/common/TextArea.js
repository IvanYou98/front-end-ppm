import React from 'react';

function TextArea({placeholder, name, value, onChange, className}) {
    return (
        <div className="form-group">
            <textarea
                className={className}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default TextArea;