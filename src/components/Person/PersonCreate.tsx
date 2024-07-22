import React, { useEffect, useState } from 'react';
import { Create, SimpleForm, TextInput, DateInput, SelectInput, CreateProps, RaRecord, Identifier } from 'react-admin';
import { useDataProvider } from 'react-admin';
import { Establishment } from '../Interfaces/establishments';
import { Role } from '../Interfaces/role';
import { required, email, minLength, maxLength } from 'react-admin';

const validateCpf = [
    required('CPF is required')
];

const validateName = [
    required('Name is required'),
    minLength(2, 'Name must be at least 2 characters long'),
    maxLength(50, 'Name must be at most 50 characters long')
];

const validateEmail = [
    required('Email is required'),
    email('Must be a valid email address')
];

const validateBirthDate = required('Birth Date is required');
const validateAdmissionDate = required('Admission Date is required');

const PersonCreate: React.FC<CreateProps<RaRecord<Identifier>, Error>> = (props) => {
    const [establishments, setEstablishments] = useState<Establishment[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        const fetchEstablishments = async () => {
            try {
                const { data } = await dataProvider.getEstablishments();
                if (Array.isArray(data)) {
                    setEstablishments(data);
                } else {
                    console.error('Unexpected data format for establishments:', data);
                    setEstablishments([]);
                }
            } catch (error) {
                console.error('Error fetching establishments:', error);
                setEstablishments([]);
            }
        };

        const fetchRoles = async () => {
            try {
                const { data } = await dataProvider.getRoles();
                if (Array.isArray(data)) {
                    setRoles(data);
                } else {
                    console.error('Unexpected data format for roles:', data);
                    setRoles([]);
                }
            } catch (error) {
                console.error('Error fetching roles:', error);
                setRoles([]);
            }
        };

        fetchEstablishments();
        fetchRoles();
    }, [dataProvider]);

    return (
        <Create {...props}>
            <SimpleForm mode="onBlur" reValidateMode="onBlur">
                <TextInput source="name" validate={validateName} />
                <TextInput source="cpf" validate={validateCpf} />
                <DateInput source="birthDate" validate={validateBirthDate} />
                <DateInput source="admissionDate" validate={validateAdmissionDate} />
                <TextInput source="email" validate={validateEmail} />
                <SelectInput 
                    source="establishmentId"
                    choices={Array.isArray(establishments) ? establishments.map(est => ({ id: est.id, name: est.name })) : []}
                    optionText="name"
                    optionValue="id"
                />
                <SelectInput 
                    source="roleId"
                    choices={Array.isArray(roles) ? roles.map(role => ({ id: role.id, name: role.name })) : []}
                    optionText="name"
                    optionValue="id"
                />
            </SimpleForm>
        </Create>
    );
};

export default PersonCreate;
