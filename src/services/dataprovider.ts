import { DataProvider } from 'react-admin';
import axios from 'axios';
import { environment } from '../environments/envoriment';
import { Establishment } from '../components/Interfaces/establishments';
import { Role } from '../components/Interfaces/role';

const apiUrl = environment.serviceUrl;

const dataProvider: DataProvider = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getList: async (resource, params) => {
        const { data } = await axios.get(`${apiUrl}/${resource}/get-all`);
        const dados = data.data;
        const total = data.total 
        
        return { data: dados, total };
    },

    getOne: async (resource, params) => {
        const { data } = await axios.get(`${apiUrl}/${resource}/${params.id}`);
        return { data: data.data }; 
    },

    create: async (resource, params) => {
        const transformedData = {
            name: params.data.name,
            cpf: params.data.cpf,
            birthDate: params.data.birthDate,
            admissionDate: params.data.admissionDate,
            email: params.data.email,
            establishment: params.data.establishmentId
                ? { id: params.data.establishmentId }
                : null,
            role: params.data.roleId
                ? { id: params.data.roleId }
                : null,
        };

        const { data } = await axios.post(`${apiUrl}/${resource}/create`, transformedData);
        return { data:data.data };
    },

    update: async (resource, params) => {
        const transformedData = {
            id: params.id,
            name: params.data.name,
            cpf: params.data.cpf,
            birthDate: params.data.birthDate,
            admissionDate: params.data.admissionDate,
            email: params.data.email,
            establishment: params.data.establishmentId
                ? { id: params.data.establishmentId }
                : null,
            role: params.data.roleId
                ? { id: params.data.roleId }
                : null,
        };

        const { data } = await axios.put(`${apiUrl}/${resource}/update`, transformedData);
        return { data:data.data };
    },

    delete: async (resource, params) => {
        await axios.delete(`${apiUrl}/${resource}/${params.id}`);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return { data: { id: params.id } as any }; 
    },

    getMany: async (resource, params) => {
        const { data } = await axios.get(`${apiUrl}/${resource}`, { params });
        const dados = data.data || data; 
        const total = data.total || dados.length; 

        return { data: dados, total };
    },

    getManyReference: async (resource, params) => {
        const { data } = await axios.get(`${apiUrl}/${resource}`, { params });
        const dados = data.data || data;
        const total = data.total || dados.length; 

        return { data: dados, total };
    },

    updateMany: async (resource, params) => {
        const requests = params.ids.map(id =>
            axios.put(`${apiUrl}/${resource}/${id}`, params.data)
        );
        const responses = await Promise.all(requests);
        return { data: responses.map(response => response.data) };
    },

    deleteMany: async (resource, params) => {
        const requests = params.ids.map(id =>
            axios.delete(`${apiUrl}/${resource}/${id}`)
        );
        await Promise.all(requests);
        return { data: params.ids };
    },

    getEstablishments: async () => {
        const { data } = await axios.get(`${apiUrl}/establishments/get-all`);
        return { data: data.data as Establishment[] };
    },

    getRoles: async () => {
        const { data } = await axios.get(`${apiUrl}/roles/get-all`);
        return { data: data.data as Role[] };
    },
};

export default dataProvider;
