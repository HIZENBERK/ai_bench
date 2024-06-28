//제품추가 페이지
import React, { useState, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Make sure the path is correct

const OthersAddProductPage = () => {
    const [othersAddProductResults] = useState([
        {
            no: 1,
            type: "유형1",
            departmentName: "부서1",
            use: "사용1",
            productName: "제품명1",
            price: "1000원",
            productNumber: "123-45-67890",
            revision: "수정1",
        },
        {
            no: 2,
            type: "유형2",
            departmentName: "부서2",
            use: "사용2",
            productName: "제품명2",
            price: "2000원",
            productNumber: "123-45-67891",
            revision: "수정2",
        },
        {
            no: 3,
            type: "유형3",
            departmentName: "부서3",
            use: "사용3",
            productName: "제품명3",
            price: "3000원",
            productNumber: "123-45-67892",
            revision: "수정3",
        },
        {
            no: 4,
            type: "유형4",
            departmentName: "부서4",
            use: "사용4",
            productName: "제품명4",
            price: "4000원",
            productNumber: "123-45-67893",
            revision: "수정4",
        },
        {
            no: 5,
            type: "유형5",
            departmentName: "부서5",
            use: "사용5",
            productName: "제품명5",
            price: "5000원",
            productNumber: "123-45-67894",
            revision: "수정5",
        },
        {
            no: 6,
            type: "유형6",
            departmentName: "부서6",
            use: "사용6",
            productName: "제품명6",
            price: "6000원",
            productNumber: "123-45-67895",
            revision: "수정6",
        },
        {
            no: 7,
            type: "유형7",
            departmentName: "부서7",
            use: "사용7",
            productName: "제품명7",
            price: "7000원",
            productNumber: "123-45-67896",
            revision: "수정7",
        },
        {
            no: 8,
            type: "유형8",
            departmentName: "부서8",
            use: "사용8",
            productName: "제품명8",
            price: "8000원",
            productNumber: "123-45-67897",
            revision: "수정8",
        },
        {
            no: 9,
            type: "유형9",
            departmentName: "부서9",
            use: "사용9",
            productName: "제품명9",
            price: "9000원",
            productNumber: "123-45-67898",
            revision: "수정9",
        },
        {
            no: 10,
            type: "유형10",
            departmentName: "부서10",
            use: "사용10",
            productName: "제품명10",
            price: "10000원",
            productNumber: "123-45-67899",
            revision: "수정10",
        },
        {
            no: 11,
            type: "유형11",
            departmentName: "부서11",
            use: "사용11",
            productName: "제품명11",
            price: "11000원",
            productNumber: "123-45-67900",
            revision: "수정11",
        },
        {
            no: 12,
            type: "유형12",
            departmentName: "부서12",
            use: "사용12",
            productName: "제품명12",
            price: "12000원",
            productNumber: "123-45-67901",
            revision: "수정12",
        },
        {
            no: 13,
            type: "유형13",
            departmentName: "부서13",
            use: "사용13",
            productName: "제품명13",
            price: "13000원",
            productNumber: "123-45-67902",
            revision: "수정13",
        },
        {
            no: 14,
            type: "유형14",
            departmentName: "부서14",
            use: "사용14",
            productName: "제품명14",
            price: "14000원",
            productNumber: "123-45-67903",
            revision: "수정14",
        },
        {
            no: 15,
            type: "유형15",
            departmentName: "부서15",
            use: "사용15",
            productName: "제품명15",
            price: "15000원",
            productNumber: "123-45-67904",
            revision: "수정15",
        },
        {
            no: 16,
            type: "유형16",
            departmentName: "부서16",
            use: "사용16",
            productName: "제품명16",
            price: "16000원",
            productNumber: "123-45-67905",
            revision: "수정16",
        },
        {
            no: 17,
            type: "유형17",
            departmentName: "부서17",
            use: "사용17",
            productName: "제품명17",
            price: "17000원",
            productNumber: "123-45-67906",
            revision: "수정17",
        },
        {
            no: 18,
            type: "유형18",
            departmentName: "부서18",
            use: "사용18",
            productName: "제품명18",
            price: "18000원",
            productNumber: "123-45-67907",
            revision: "수정18",
        },
        {
            no: 19,
            type: "유형19",
            departmentName: "부서19",
            use: "사용19",
            productName: "제품명19",
            price: "19000원",
            productNumber: "123-45-67908",
            revision: "수정19",
        },
        {
            no: 20,
            type: "유형20",
            departmentName: "부서20",
            use: "사용20",
            productName: "제품명20",
            price: "20000원",
            productNumber: "123-45-67909",
            revision: "수정20",
        },
        // Add more product data here
    ]);

    const [searchResults, setSearchResults] = useState(othersAddProductResults);
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
        const filteredResults = othersAddProductResults.filter(result =>
            result.type.includes(searchTerm) ||
            result.departmentName.includes(searchTerm)
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>제품 추가 페이지</h2>
                <div className="input-container">
                    <label htmlFor="productType">유형</label>
                    <input type="text" id="productType" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <label htmlFor="departmentName">부서(품명)</label>
                    <div className="product-search-container">
                        <input type="text" id="departmentName" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>유형</th>
                                <th>부서(품명)</th>
                                <th>용도</th>
                                <th>제품명</th>
                                <th>가격</th>
                                <th>제품번호</th>
                                <th>수정</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.no}</td>
                                    <td>{result.type}</td>
                                    <td>{result.departmentName}</td>
                                    <td>{result.use}</td>
                                    <td>{result.productName}</td>
                                    <td>{result.price}</td>
                                    <td>{result.productNumber}</td>
                                    <td>{result.revision}</td>
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

export default OthersAddProductPage;
