import React from 'react';
import BreadcrumbComponent from './Breadcrumb';
import { Layout } from 'antd';

const { Content } = Layout;

const ContentMovies = (props) => {
    return (
        <>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <BreadcrumbComponent/>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
        </>
    )
}
export default React.memo(ContentMovies);

