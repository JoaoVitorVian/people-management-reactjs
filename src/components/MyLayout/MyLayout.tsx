import { ReactNode } from 'react';
import { Layout, CheckForApplicationUpdate, AppBar, Sidebar } from 'react-admin';
import './MyLayout.css';

export const MyLayout = ({ children }: { children: ReactNode }) => (
    <Layout
        appBar={AppBar}
        sidebar={Sidebar}
        appBarAlwaysOn={false}
    >
            {children}
          <CheckForApplicationUpdate />
    </Layout>
);
