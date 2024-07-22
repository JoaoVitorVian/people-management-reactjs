import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps, RaRecord, Identifier } from 'react-admin';

const EstablishmentEdit: React.FC<EditProps<RaRecord<Identifier>, Error>> =(props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default EstablishmentEdit;
