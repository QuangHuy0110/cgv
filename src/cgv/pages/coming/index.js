import React, { useState, useEffect } from 'react';
import LayoutMovies from '../../components/Layout';
import { Row, Col, Skeleton } from 'antd';
import { apiMovies } from '../../services/movies';
import ListMovies from '../../components/ListMovies';
import PaginationMovie from '../../components/Pagination';

const UpComingPage = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies]   = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [clickPage, setClickPage] = useState(false);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await apiMovies.getDataUpcomingMovies(page);
            if(data.hasOwnProperty('results')){
                setMovies(data['results']);
            }
            if(!clickPage){
                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data['total_pages']);
                }
                if(data.hasOwnProperty('total_results')){
                    setTotalResults(data['total_results']);
                }
            }
            setLoading(false);
        }
        getData();
    }, [page, clickPage]);

    const changePage = p => {
        if(p >= 1 && p<= totalPage){
            setClickPage(true);
            setPage(p);
        }
    }

    if(loading){
        return (
            <LayoutMovies>
                <Skeleton active />
            </LayoutMovies>
        )
    }
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h3>Cac bo phim sap cong chieu trong 3 thang toi</h3>
                    <ListMovies
                        listMovies={movies}
                    />
                    {movies.length > 0 && (
                        <PaginationMovie
                            current={page}
                            total={totalResults}
                            change={changePage}
                        />
                    )}
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpComingPage);