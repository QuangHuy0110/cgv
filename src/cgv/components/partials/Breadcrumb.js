import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from "react-router-dom";

const BreadcrumbMovies = () => {
    const { pathname } = useLocation();
    let newPath = pathname.substring(1);
    newPath = newPath === '' ? 'Popular' : newPath;
    return (
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Movies</Breadcrumb.Item>
            <Breadcrumb.Item>{newPath}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default React.memo(BreadcrumbMovies);