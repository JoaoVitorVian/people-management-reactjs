import { Admin, Resource } from 'react-admin';
import dataProvider from './services/dataprovider';
import PersonList from './components/Person/PersonList';
import { MyLayout } from './components/MyLayout/MyLayout';
import EstablishmentList from './components/Establishment/EstablishmentList';
import RoleList from './components/Role/RoleList';
import PersonEdit from './components/Person/PersonEdit';
import EstablishmentEdit from './components/Establishment/EstablishmentEdit';
import PersonCreate from './components/Person/PersonCreate';
import EstablishmentCreate from './components/Establishment/EstablishmentCreate';
import RoleCreate from './components/Role/RoleCreate';
import RoleEdit from './components/Role/RoleEdit';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { PersonPostShow } from './components/Person/PersonShow';
import { RolePostShow } from './components/Role/RoleShow';
import { EstablishmentPostShow } from './components/Establishment/EstablishmentShow';

import './global.css'; 

const App = () => (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
        <Resource name="persons" list={PersonList} edit={PersonEdit} create={PersonCreate} icon={PeopleIcon} show={PersonPostShow}/>
        <Resource name="establishments" list={EstablishmentList} edit={EstablishmentEdit} create={EstablishmentCreate} icon={BusinessCenterIcon} show={EstablishmentPostShow}/>
        <Resource name="roles" list={RoleList}create={RoleCreate} edit={RoleEdit} icon={EngineeringIcon} show={RolePostShow} />
    </Admin>
);

export default App;