import React, { useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';

const OthersProductPage = () => {
    const [productType, setProductType] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [searchResults] = useState([
        {
            no: 1,
            orderDateTime: "2023-06-01 10:30",
            expectedDeliveryDate: "2023-06-05",
            customerNumber: "Customer A (001)",
            orderWeight: 150.5,
            part: "Part A",
            orderAmount: 2000,
            status: "Pending",
            orderNumber: "ORD123456",
            edit: "Edit"
        },
        {
            no: 2,
            orderDateTime: "2023-06-02 11:00",
            expectedDeliveryDate: "2023-06-06",
            customerNumber: "Customer B (002)",
            orderWeight: 200.0,
            part: "Part B",
            orderAmount: 3000,
            status: "Confirmed",
            orderNumber: "ORD123457",
            edit: "Edit"
        },
        // Add more sample data as needed...
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10); // Default value is 10

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handleSearch = () => {
        // Implement search logic based on productType and departmentName
        console.log('Searching for:', productType, departmentName);
        // Filter or fetch search results as needed
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>거래처 관리 페이지</h2>
                <div className="input-container">
                    <label htmlFor="productType">유형</label>
                    <input 
                        type="text" 
                        id="productType" 
                        value={productType} 
                        onChange={(e) => setProductType(e.target.value)} 
                    />
                    <label htmlFor="departmentName">부서(품명)</label>
                    <div className="product-search-container">
                        <input 
                            type="text" 
                            id="departmentName" 
                            value={departmentName} 
                            onChange={(e) => setDepartmentName(e.target.value)} 
                        />
                        <button onClick={handleSearch}>검색</button>
                        </div>
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
                                <th>No.</th>
                                <th>주문 날짜 및 시간</th>
                                <th>예상 배송 날짜</th>
                                <th>고객 번호</th>
                                <th>주문 무게</th>
                                <th>부품</th>
                                <th>주문 금액</th>
                                <th>상태</th>
                                <th>주문 번호</th>
                                <th>수정</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.no}</td>
                                <td>{result.orderDateTime}</td>
                                <td>{result.expectedDeliveryDate}</td>
                                <td>{result.customerNumber}</td>
                                <td>{result.orderWeight}</td>
                                <td>{result.part}</td>
                                <td>{result.orderAmount}</td>
                                <td>{result.status}</td>
                                <td>{result.orderNumber}</td>
                                <td>{result.edit}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(searchResults.length / resultsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>
        </div>
    );
};

export default OthersProductPage;
