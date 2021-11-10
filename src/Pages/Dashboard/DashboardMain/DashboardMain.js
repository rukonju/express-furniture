import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import DashboardDrawer from '../DashboardDrawer/DashboardDrawer';

const DashboardMain = () => {
    console.log(useLocation())
    return (
        <div>
            <DashboardDrawer/>
            <Outlet/>
        </div>
    );
};

export default DashboardMain;