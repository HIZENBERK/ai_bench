import React, { useState, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios"; // Make sure the path is correct


const OthersCustomerPage = () => {
    const [data, setData] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [ClientType, setClientType] = useState(''); // 상태 이름 변경
    const [ClientName, setClientName] = useState(''); // 상태 이름 변경

    // 데이터 API에서 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Client/');
                console.log(response.data);
                setData(response.data);
                setFilteredClients(response.data);
                setCurrentPage(1);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }
        }
        fetchData().then(r => null);
    }, []);

    // 검색 필터링 함수
    const handleSearch = () => {
        if (ClientType === '' && ClientName === '') {
            fetchData();
            return;
        }
        const results = data.filter(client =>
            (ClientType && client.ClientType.toLowerCase().includes(ClientType.toLowerCase())) ||
            (ClientName && client.ClientName.toLowerCase().includes(ClientName.toLowerCase()))
        );
        setFilteredClients(results);
        console.log(results);
        setCurrentPage(1); // 첫 페이지로 리셋
    };
    // 데이터 API 다시 불러오기
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Client/');
            console.log(response.data);
            setData(response.data);
            setFilteredClients(response.data);
            setCurrentPage(1);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };
    // 페이징 계산
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredClients.slice(indexOfFirstResult, indexOfLastResult);

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 페이지당 결과 수 변경 핸들러
    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // 첫 페이지로 리셋
    };

    // 수정 핸들러
    const handleEdit = (clientId) => {
        // 기능 추가 해야함
    };
    return (
        <div>
            <div className="procurement-page-container">
                <h2>거래처 관리 페이지</h2>
                <div className="input-container">
                    <label htmlFor="ClientType">유형</label>
                    <input
                        type="text"
                        id="ClientType"
                        value={ClientType}
                        onChange={(e) => setClientType(e.target.value)} // 상태 업데이트 함수 변경
                    />
                    <label htmlFor="ClientName">거래처명</label>
                    <div className="product-search-container">
                        <input
                            type="text"
                            id="ClientName"
                            value={ClientName}
                            onChange={(e) => setClientName(e.target.value)} // 상태 업데이트 함수 변경
                        />
                        <button onClick={handleSearch}>검색</button>
                    </div>
                </div>
                <div className="procurement-page-container">
                    <label htmlFor="resultsPerPage">현재페이지에 볼 리스트 개수</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                    <table className="results-table">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>거래처 유형</th>
                            <th>거래처 이름</th>
                            <th>대표자 명</th>
                            <th>사업자 번호</th>
                            <th>사업장 주소</th>
                            <th>사업자 연락처</th>
                            <th>담당자명(직급)</th>
                            <th>담당자 연락처</th>
                            <th>최초 거래일</th>
                            <th>최종 거래일</th>
                            <th>납입/ 납품 정보</th>
                            <th>수정</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentResults.map((client, index) => (
                            <tr key={index}>
                                <td>{client.ID}</td>
                                <td>{client.ClientType}</td>
                                <td>{client.ClientName}</td>
                                <td>{client.RepresentativeName}</td>
                                <td>{client.BusinessRegistrationNumber}</td>
                                <td>{client.ClientAddress}</td>
                                <td>{client.ClientPhone}</td>
                                <td>{client.PersonInCharge}</td>
                                <td>{client.PersonInChargePhone}</td>
                                <td>{client.FirstTradeDate}</td>
                                <td>{client.LastTradeDate}</td>
                                <td>{client.Payment_Delivery}</td>
                                <td><button onClick={() => handleEdit(client.ID)}>수정/삭제</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredClients.length / resultsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};



export default OthersCustomerPage;