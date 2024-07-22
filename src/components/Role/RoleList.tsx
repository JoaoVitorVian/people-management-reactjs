import React from 'react';
import { List, Datagrid, TextField, ListProps, ShowButton, EditButton } from 'react-admin';

const RoleList: React.FC<ListProps> =(props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <ShowButton/>
        </Datagrid>
    </List>
);

export default RoleList;
