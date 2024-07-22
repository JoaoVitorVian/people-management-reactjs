// src/components/RoleEdit.tsx
import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps, RaRecord, Identifier, required, minLength, maxLength } from 'react-admin';

const validateName = [
    required('Name is required'),
    minLength(2, 'Name must be at least 2 characters long'),
    maxLength(50, 'Name must be at most 50 characters long')
];

const RoleEdit: React.FC<EditProps<RaRecord<Identifier>, Error>> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="name" validate={validateName}/>
            </SimpleForm>
        </Edit>
    );
};

export default RoleEdit;
