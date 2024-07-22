// src/components/utils/cpf/CpfTextField.tsx
import React from 'react';
import { TextField, TextFieldProps } from 'react-admin';

const formatCpf = (cpf: string) => {
  if (!cpf) return '';
  cpf = cpf.replace(/\D/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const CpfTextField: React.FC<TextFieldProps> = (props) => {
  const { source, record, ...rest } = props;
  const value = record?.[source];
  const formattedValue = formatCpf(value); 

  return (
    <TextField {...rest} source={source} record={{ ...record, [source]: formattedValue }} />
  );
};

export default CpfTextField;
