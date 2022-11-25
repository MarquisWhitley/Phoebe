import React from 'react';
import './InputFieldStyling.scss';

interface InputFieldProps {
  val: string | number | readonly string[];
  type: React.HTMLInputTypeAttribute | undefined;
  inputName: string;
  children: string;
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({ val, type, inputName, children, inputChange }: InputFieldProps) => {
  //   const { type, inputName, children, inputChange } = props;
  return (
    <div className='input-container'>
      <input
        className='input-field'
        value={val}
        type={type}
        name={inputName}
        autoComplete='off'
        onChange={inputChange}
        required
      />
      <label htmlFor={inputName} className='label-name'>
        {children}
      </label>
    </div>
  );
};

export default InputField;
