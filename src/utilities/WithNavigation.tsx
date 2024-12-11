// src/utilities/withNavigation.tsx
import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

export interface WithNavigationProps {
    navigate: NavigateFunction;
}

const withNavigation = <P extends object>(Component: React.ComponentType<P & WithNavigationProps>) => {
    return (props: P) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};

export default withNavigation;
