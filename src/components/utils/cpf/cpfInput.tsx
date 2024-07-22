import React from 'react';
import { TextInput, TextInputProps } from 'react-admin';
import { IMaskInput } from 'react-imask';

const CpfInput: React.FC<TextInputProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
    return (
      <IMaskInput
        {...props}
        mask="000.000.000-00"
        unmask="input"
        ref={ref}
      />
    );
  });

  return (
    <TextInput
      {...props}
      InputProps={{
        inputComponent: CustomInput,
      }}
    />
  );
};

export default CpfInput;
