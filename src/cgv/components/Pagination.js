import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationMovie = (props) => {
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={12} offset={6}>
                <Pagination
                    current={props.current}
                    total={props.total}
                    pageSize={20} // do api fix
                    showSizeChanger={false} // do api fix nen ko hien thi
                    onChange={p => props.change(p)}
                 />
            </Col>
        </Row>
    )
}
export default React.memo(PaginationMovie);