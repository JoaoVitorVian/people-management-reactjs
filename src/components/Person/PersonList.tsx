import React from 'react';
import { List, Datagrid, TextField, ListProps, DateField, EmailField, EditButton, ShowButton } from 'react-admin';

const PersonList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField  source="cpf" />
            <DateField  source="birthDate" />
            <DateField  source="admissionDate" />
            <EmailField source="email" />
            <TextField source="establishment.name" label="Establishment" />
            <TextField source="role.name" label="Role" />
            <EditButton />
            <ShowButton/>
        </Datagrid>
    </List>
);

export default PersonList;
