import React, { useState, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios"; // Make sure the path is correct


const OthersAddbusinesspartnerPage = () => {
    const [data, setData] = useState([]);
    const [] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/ClientInfo/')
                console.log(response.data)
                setData(response.data);
                // td>{result.ID}</td>
                // <td>{result.ClientType}</td>
                // <td>{result.RepresentativeName}</td>
                // <td>{result.BusinessRegistrationNumber}</td>
                // <td>{result.ClientAddress}</td>
                // <td>{result.ClientPhone}</td>
                // <td>{result.PersonInCharge}</td>
                // <td>{result.PersonInChargePhone}</td>
                // <td>{result.FirstTradeDate}</td>
                // <td>{result.LastTradeDate}</td>
                // <td>{result.Payment_Delivery}</td>
                setCurrentPage(1);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData().then(r => null)
        // Reset to the first page on search or results per page change
    }, []);
    // const [othersAddbusinesspartnerResults] = useState([
    //
    // ], [])


    const [searchResults, setSearchResults] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page on search or results per page change
    }, [searchResults, resultsPerPage]);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
    };

    const handleSearch = () => {
        const filteredResults = data.filter(result =>
            result.type.includes(searchTerm) ||
            result.RepresentativeName.includes(searchTerm)
        );
        setSearchResults(filteredResults);
    };


    return (
        <div>
            <div className="procurement-page-container">
                <h2>거래처 추가 페이지</h2>
                <div className="input-container">
                    <label htmlFor="partnerType">유형</label>
                    <input type="text" id="partnerType" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <label htmlFor="partnerName">거래처명</label>
                    <div className="partner-search-container">
                        <input type="text" id="partnerName" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button onClick={handleSearch}>검색</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                {currentResults.length > 0 ? (
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>거래처 유형</th>
                                <th>대표자 명</th>
                                <th>사업자 번호</th>
                                <th>사업장 주소</th>
                                <th>사업자 연락처</th>
                                <th>담당자명(직급)</th>
                                <th>담당자 연락처</th>
                                <th>최초 거래일</th>
                                <th>최종 거래일</th>
                                <th>납입/ 납품 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.ID}</td>
                                    <td>{result.ClientType}</td>
                                    <td>{result.RepresentativeName}</td>
                                    <td>{result.BusinessRegistrationNumber}</td>
                                    <td>{result.ClientAddress}</td>
                                    <td>{result.ClientPhone}</td>
                                    <td>{result.PersonInCharge}</td>
                                    <td>{result.PersonInChargePhone}</td>
                                    <td>{result.FirstTradeDate}</td>
                                    <td>{result.LastTradeDate}</td>
                                    <td>{result.Payment_Delivery}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No results found</p>
                )}
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(searchResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};



export default OthersAddbusinesspartnerPage;