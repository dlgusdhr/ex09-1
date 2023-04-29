import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const LocalPage = () => {
    const [locals, setLocals] = useState([]) 
    const getLocall = async() => {
        const url="https://dapi.kakao.com/v2/local/search/keyword.json";
        const config={
        headers: {"Authorization": "KakaoAK 7acccc029182f882919d32c390912d19"},
        params: {query: '인천 버거킹', page:1, size:5}

    }
    const result=await axios.get(url,config)
    console.log(result)
    setLocals(result.data.documents)
}


    useEffect(()=> { // 페이지가 렌더링될때 호출
        getLocall()
    },[] )
    return (
        <Row>
            <Col>
            <h1 className='text-center my-5'>지역검색</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>장소명</td>
                            <td>주소</td>
                            <td>전화번호</td>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map(locals=>
                        <tr key={locals.id}>
                            <td>{locals.place_name}</td>
                            <td>{locals.address_name}</td>
                            <td>{locals.phone}</td>

                        </tr>
                        )}
                    </tbody>
                </Table>


            </Col>
        </Row>
    )
}


export default LocalPage