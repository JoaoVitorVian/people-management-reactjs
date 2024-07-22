import React from 'react';
import { List, Datagrid, TextField, ListProps, EditButton, ShowButton } from 'react-admin';

const EstablishmentList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <ShowButton/>
        </Datagrid>
    </List>
);

export default EstablishmentList;
