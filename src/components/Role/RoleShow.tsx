import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const RolePostShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);