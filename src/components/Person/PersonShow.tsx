import { Show, SimpleShowLayout, TextField, DateField, EmailField } from 'react-admin';

export const PersonPostShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="name" />
            <TextField  source="cpf" />
            <DateField  source="birthDate" />
            <DateField  source="admissionDate" />
            <EmailField source="email" />
            <TextField source="establishment.name" label="Establishment" />
            <TextField source="role.name" label="Role" />
        </SimpleShowLayout>
    </Show>
);