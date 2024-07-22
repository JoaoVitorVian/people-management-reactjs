import React from 'react';
import { List, Datagrid, TextField, ListProps, ShowButton } from 'react-admin';

const RoleList: React.FC<ListProps> =(props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ShowButton/>
        </Datagrid>
    </List>
);

export default RoleList;
