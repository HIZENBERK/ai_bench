import React, { useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';

const ProcurementPage = () => {
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
            orderWeight: 75.0,
            part: "Part B",
            orderAmount: 1000,
            status: "Shipped",
            orderNumber: "ORD123457",
            edit: "Edit"
        },
        {
            no: 3,
            orderDateTime: "2023-06-03 12:00",
            expectedDeliveryDate: "2023-06-07",
            customerNumber: "Customer C (003)",
            orderWeight: 120.0,
            part: "Part C",
            orderAmount: 1800,
            status: "Delivered",
            orderNumber: "ORD123458",
            edit: "Edit"
        },
        {
            no: 4,
            orderDateTime: "2023-06-04 14:00",
            expectedDeliveryDate: "2023-06-08",
            customerNumber: "Customer D (004)",
            orderWeight: 90.0,
            part: "Part D",
            orderAmount: 1500,
            status: "Cancelled",
            orderNumber: "ORD123459",
            edit: "Edit"
        },
        {
            no: 5,
            orderDateTime: "2023-06-05 15:00",
            expectedDeliveryDate: "2023-06-09",
            customerNumber: "Customer E (005)",
            orderWeight: 110.0,
            part: "Part E",
            orderAmount: 1700,
            status: "Pending",
            orderNumber: "ORD123460",
            edit: "Edit"
        },
        {
            no: 6,
            orderDateTime: "2023-06-06 16:00",
            expectedDeliveryDate: "2023-06-10",
            customerNumber: "Customer F (006)",
            orderWeight: 95.0,
            part: "Part F",
            orderAmount: 1600,
            status: "Shipped",
            orderNumber: "ORD123461",
            edit: "Edit"
        },
        {
            no: 7,
            orderDateTime: "2023-06-07 17:00",
            expectedDeliveryDate: "2023-06-11",
            customerNumber: "Customer G (007)",
            orderWeight: 105.0,
            part: "Part G",
            orderAmount: 1750,
            status: "Delivered",
            orderNumber: "ORD123462",
            edit: "Edit"
        },
        {
            no: 8,
            orderDateTime: "2023-06-08 18:00",
            expectedDeliveryDate: "2023-06-12",
            customerNumber: "Customer H (008)",
            orderWeight: 85.0,
            part: "Part H",
            orderAmount: 1550,
            status: "Cancelled",
            orderNumber: "ORD123463",
            edit: "Edit"
        },
        {
            no: 9,
            orderDateTime: "2023-06-09 19:00",
            expectedDeliveryDate: "2023-06-13",
            customerNumber: "Customer I (009)",
            orderWeight: 115.0,
            part: "Part I",
            orderAmount: 1800,
            status: "Pending",
            orderNumber: "ORD123464",
            edit: "Edit"
        },
        {
            no: 10,
            orderDateTime: "2023-06-10 20:00",
            expectedDeliveryDate: "2023-06-14",
            customerNumber: "Customer J (010)",
            orderWeight: 100.0,
            part: "Part J",
            orderAmount: 1650,
            status: "Shipped",
            orderNumber: "ORD123465",
            edit: "Edit"
        },
        {
            no: 11,
            orderDateTime: "2023-06-11 21:00",
            expectedDeliveryDate: "2023-06-15",
            customerNumber: "Customer K (011)",
            orderWeight: 125.0,
            part: "Part K",
            orderAmount: 1850,
            status: "Delivered",
            orderNumber: "ORD123466",
            edit: "Edit"
        },
        {
            no: 12,
            orderDateTime: "2023-06-12 22:00",
            expectedDeliveryDate: "2023-06-16",
            customerNumber: "Customer L (012)",
            orderWeight: 130.0,
            part: "Part L",
            orderAmount: 1900,
            status: "Cancelled",
            orderNumber: "ORD123467",
            edit: "Edit"
        },
        {
            no: 13,
            orderDateTime: "2023-06-13 23:00",
            expectedDeliveryDate: "2023-06-17",
            customerNumber: "Customer M (013)",
            orderWeight: 135.0,
            part: "Part M",
            orderAmount: 1950,
            status: "Pending",
            orderNumber: "ORD123468",
            edit: "Edit"
        },
        {
            no: 14,
            orderDateTime: "2023-06-14 24:00",
            expectedDeliveryDate: "2023-06-18",
            customerNumber: "Customer N (014)",
            orderWeight: 140.0,
            part: "Part N",
            orderAmount: 2000,
            status: "Shipped",
            orderNumber: "ORD123469",
            edit: "Edit"
        },
        {
            no: 15,
            orderDateTime: "2023-06-15 01:00",
            expectedDeliveryDate: "2023-06-19",
            customerNumber: "Customer O (015)",
            orderWeight: 145.0,
            part: "Part O",
            orderAmount: 2050,
            status: "Delivered",
            orderNumber: "ORD123470",
            edit: "Edit"
        },
        {
            no: 16,
            orderDateTime: "2023-06-16 02:00",
            expectedDeliveryDate: "2023-06-20",
            customerNumber: "Customer P (016)",
            orderWeight: 150.0,
            part: "Part P",
            orderAmount: 2100,
            status: "Cancelled",
            orderNumber: "ORD123471",
            edit: "Edit"
        },
        {
            no: 17,
            orderDateTime: "2023-06-17 03:00",
            expectedDeliveryDate: "2023-06-21",
            customerNumber: "Customer Q (017)",
            orderWeight: 155.0,
            part: "Part Q",
            orderAmount: 2150,
            status: "Pending",
            orderNumber: "ORD123472",
            edit: "Edit"
        },
        {
            no: 18,
            orderDateTime: "2023-06-18 04:00",
            expectedDeliveryDate: "2023-06-22",
            customerNumber: "Customer R (018)",
            orderWeight: 160.0,
            part: "Part R",
            orderAmount: 2200,
            status: "Shipped",
            orderNumber: "ORD123473",
            edit: "Edit"
        },
        {
            no: 19,
            orderDateTime: "2023-06-19 05:00",
            expectedDeliveryDate: "2023-06-23",
            customerNumber: "Customer S (019)",
            orderWeight: 165.0,
            part: "Part S",
            orderAmount: 2250,
            status: "Delivered",
            orderNumber: "ORD123474",
            edit: "Edit"
        },
        {
            no: 20,
            orderDateTime: "2023-06-20 06:00",
            expectedDeliveryDate: "2023-06-24",
            customerNumber: "Customer T (020)",
            orderWeight: 170.0,
            part: "Part T",
            orderAmount: 2300,
            status: "Cancelled",
            orderNumber: "ORD123475",
            edit: "Edit"
        }
        // Add more sample data here as needed
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

    const handleRegisterNavigation = () => {
        // Add functionality here if needed
        console.log('Register button clicked');
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>발주 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="orderDateTime">발주일시</label>
                    <input type="text" id="orderDateTime"/>
                    <label htmlFor="totalQuantity">발주중량</label>
                    <input type="text" id="totalQuantity"/>
                </div>
                <div className="input-container">
                    <label htmlFor="ordererID">발주자(사번)명</label>
                    <input type="text" id="ordererID"/>
                    <label htmlFor="expectedDeliveryDate">입고 예정일</label>
                    <input type="text" id="expectedDeliveryDate"/>
                </div>
                <div className="input-container">
                    <label htmlFor="part">부위</label>
                    <input type="text" id="part"/>
                    <label htmlFor="supplier">거래처</label>
                    <input type="text" id="supplier"/>
                </div>
                <div className="input-container">
                    <label htmlFor="orderAmount">발주금액</label>
                    <input type="text" id="orderAmount"/>
                </div>
                <button onClick={handleRegisterNavigation} className="register-button">등록</button>
            </div>
            <div className="procurement-page-container">
                <div className="results-per-page">
                    <label htmlFor="resultsPerPage">한페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>
                    <input type="text" id="orderDateTimeSearch"/>
                    <button>조회</button>
                </div>
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>발주일시</th>
                            <th>입고 예정 일</th>
                            <th>거래처(번호)</th>
                            <th>발주중량(KG)</th>
                            <th>부위</th>
                            <th>발주금액</th>
                            <th>상태</th>
                            <th>발주번호</th>
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

export default ProcurementPage;