import React, {Component} from 'react';
import Input from "./Input";
import TextArea from "./TextArea";
import Submit from "./Submit";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = ({currentTarget: input}) => {
        // copy the data
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
    }

    renderInput(name, placeholder, type, readOnly) {
        const {data, errors} = this.state;
        const className = " form-control form-control-lg" + (errors[name] && " is-invalid");
        return (
            <React.Fragment>
                <Input type={type}
                       className={className}
                       placeholder={placeholder}
                       name={name}
                       readOnly={readOnly}
                       value={data[name]}
                       onChange={this.handleChange}
                />
                <p className="text-danger">{errors[name]}</p>
            </React.Fragment>
        )
    }

    renderTextArea(placeholder, name) {
        const {data, errors} = this.state;
        const className = "form-control form-control-lg" + (errors[name] && " is-invalid");
        return (
            <React.Fragment>
                <TextArea placeholder={placeholder}
                          name={name}
                          className={className}
                          value={data[name]}
                          onChange={this.handleChange}
                />
                <p className="text-danger">{errors[name]}</p>
            </React.Fragment>
        )
    }

    renderSubmitBtn(className) {
        return (
            <Submit className={className}/>
        )
    }

    renderSelector(options, name, values) {
        const {data, errors} = this.state;
        const className = "form-control form-control-lg" + (errors[name] && " is-invalid");
        return (
            <React.Fragment>
                <div className="form-group">
                    <select
                        name={name}
                        className={className}
                        value={data[name]}
                        onChange={this.handleChange}>
                        {options.map((item, index) => {
                            return <option value={values ? values[index] : index} key={index}>{item}</option>
                        })}
                    </select>
                </div>
            </React.Fragment>
        )

    }

}

export default Form;