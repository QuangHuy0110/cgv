import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

const { Meta } = Card;

const ListMovies = ({ listMovies }) => {
    if(listMovies.length === 0){
        return (
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <p>Khong co du lieu</p>
                </Col>
            </Row>
        )
    }
    return (
        <Row style={{margin: '20px 0px'}} justify="center">
            {listMovies.map((item, index) => (
                <Col lg={6} md={8}  sm={12} xs={24} key={index}>
                    <Link to={`/${slugify(item.title)}-${item.id}`}>
                        <Card
                            hoverable
                            style={{
                                marginRight: '5px',
                                marginBottom: '10px'
                            }}
                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
                </Col>
            ) )}
        </Row>
    )
}
export default React.memo(ListMovies);