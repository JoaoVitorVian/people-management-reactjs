import React from 'react';
import {SimpleForm, TextInput, CreateProps, RaRecord, Identifier, Create, required, minLength, maxLength } from 'react-admin';

const validateName = [
    required('Name is required'),
    minLength(2, 'Name must be at least 2 characters long'),
    maxLength(50, 'Name must be at most 50 characters long')
];

const EstablishmentCreate: React.FC<CreateProps<RaRecord<Identifier>, Error>> =(props) => (
    <Create {...props}>
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
            <TextInput source="name" validate={validateName}/>
        </SimpleForm>
    </Create>
);

export default EstablishmentCreate;
