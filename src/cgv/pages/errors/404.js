import React from 'react';
import LayoutMovies from '../../components/Layout';
import { Row, Col } from 'antd';

const NotFoundPage = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    404 Not found!
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(NotFoundPage);