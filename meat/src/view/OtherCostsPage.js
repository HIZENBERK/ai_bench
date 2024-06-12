import React, { useState, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Make sure the path is correct

const OthersAddProductPage = () => {
    const [othersAddProductResults] = useState([
        {
            no: 1,
            type: "유형1",
            materialName: "부자재명1",
            quantity: 10,
            unitPrice: "1000원",
            totalPrice: "10000원",
            vendor: "거래처1",
            revision: "수정1",
        },
        {
            no: 2,
            type: "유형2",
            materialName: "부자재명2",
            quantity: 20,
            unitPrice: "2000원",
            totalPrice: "40000원",
            vendor: "거래처2",
            revision: "수정2",
        },
        {
            no: 3,
            type: "유형3",
            materialName: "부자재명3",
            quantity: 30,
            unitPrice: "3000원",
            totalPrice: "90000원",
            vendor: "거래처3",
            revision: "수정3",
        },
        {
            no: 4,
            type: "유형4",
            materialName: "부자재명4",
            quantity: 40,
            unitPrice: "4000원",
            totalPrice: "160000원",
            vendor: "거래처4",
            revision: "수정4",
        },
        {
            no: 5,
            type: "유형5",
            materialName: "부자재명5",
            quantity: 50,
            unitPrice: "5000원",
            totalPrice: "250000원",
            vendor: "거래처5",
            revision: "수정5",
        },
        {
            no: 6,
            type: "유형6",
            materialName: "부자재명6",
            quantity: 60,
            unitPrice: "6000원",
            totalPrice: "360000원",
            vendor: "거래처6",
            revision: "수정6",
        },
        {
            no: 7,
            type: "유형7",
            materialName: "부자재명7",
            quantity: 70,
            unitPrice: "7000원",
            totalPrice: "490000원",
            vendor: "거래처7",
            revision: "수정7",
        },
        {
            no: 8,
            type: "유형8",
            materialName: "부자재명8",
            quantity: 80,
            unitPrice: "8000원",
            totalPrice: "640000원",
            vendor: "거래처8",
            revision: "수정8",
        },
        {
            no: 9,
            type: "유형9",
            materialName: "부자재명9",
            quantity: 90,
            unitPrice: "9000원",
            totalPrice: "810000원",
            vendor: "거래처9",
            revision: "수정9",
        },
        {
            no: 10,
            type: "유형10",
            materialName: "부자재명10",
            quantity: 100,
            unitPrice: "10000원",
            totalPrice: "1000000원",
            vendor: "거래처10",
            revision: "수정10",
        },
        {
            no: 11,
            type: "유형11",
            materialName: "부자재명11",
            quantity: 110,
            unitPrice: "11000원",
            totalPrice: "1210000원",
            vendor: "거래처11",
            revision: "수정11",
        },
        {
            no: 12,
            type: "유형12",
            materialName: "부자재명12",
            quantity: 120,
            unitPrice: "12000원",
            totalPrice: "1440000원",
            vendor: "거래처12",
            revision: "수정12",
        },
        {
            no: 13,
            type: "유형13",
            materialName: "부자재명13",
            quantity: 130,
            unitPrice: "13000원",
            totalPrice: "1690000원",
            vendor: "거래처13",
            revision: "수정13",
        },
        {
            no: 14,
            type: "유형14",
            materialName: "부자재명14",
            quantity: 140,
            unitPrice: "14000원",
            totalPrice: "1960000원",
            vendor: "거래처14",
            revision: "수정14",
        },
        {
            no: 15,
            type: "유형15",
            materialName: "부자재명15",
            quantity: 150,
            unitPrice: "15000원",
            totalPrice: "2250000원",
            vendor: "거래처15",
            revision: "수정15",
        },
        {
            no: 16,
            type: "유형16",
            materialName: "부자재명16",
            quantity: 160,
            unitPrice: "16000원",
            totalPrice: "2560000원",
            vendor: "거래처16",
            revision: "수정16",
        },
        {
            no: 17,
            type: "유형17",
            materialName: "부자재명17",
            quantity: 170,
            unitPrice: "17000원",
            totalPrice: "2890000원",
            vendor: "거래처17",
            revision: "수정17",
        },
        {
            no: 18,
            type: "유형18",
            materialName: "부자재명18",
            quantity: 180,
            unitPrice: "18000원",
            totalPrice: "3240000원",
            vendor: "거래처18",
            revision: "수정18",
        },
        {
            no: 19,
            type: "유형19",
            materialName: "부자재명19",
            quantity: 190,
            unitPrice: "19000원",
            totalPrice: "3610000원",
            vendor: "거래처19",
            revision: "수정19",
        },
        {
            no: 20,
            type: "유형20",
            materialName: "부자재명20",
            quantity: 200,
            unitPrice: "20000원",
            totalPrice: "4000000원",
            vendor: "거래처20",
            revision: "수정20",
        },
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
            result.materialName.includes(searchTerm)
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>기타비용 페이지</h2>
                <div className="input-container">
                    <label htmlFor="productType">유형</label>
                    <input type="text" id="productType" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <label htmlFor="materialName">부자재 명</label>
                    <div className="product-search-container">
                        <input type="text" id="materialName" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                                <th>No.</th>
                                <th>유형</th>
                                <th>부자재 명</th>
                                <th>수량</th>
                                <th>단가</th>
                                <th>금액</th>
                                <th>거래처</th>
                                <th>수정</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map(result => (
                                <tr key={result.no}>
                                    <td>{result.no}</td>
                                    <td>{result.type}</td>
                                    <td>{result.materialName}</td>
                                    <td>{result.quantity}</td>
                                    <td>{result.unitPrice}</td>
                                    <td>{result.totalPrice}</td>
                                    <td>{result.vendor}</td>
                                    <td>{result.revision}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No results found</p>
                )}
            </div>
            <Pagination
                resultsPerPage={resultsPerPage}
                totalResults={searchResults.length}
                paginate={handlePageChange}
                currentPage={currentPage}
            />
        </div>
    );
};

export default OthersAddProductPage;
