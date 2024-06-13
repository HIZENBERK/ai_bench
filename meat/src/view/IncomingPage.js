import React, { useEffect, useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct
import Datepicker from "../component/DatePicker";
import { useAuth } from "../component/AuthContext";
import axios from "axios";

const IncomingPage = () => {
    const [incomingResults, setIncomingResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = incomingResults.slice(indexOfFirstResult, indexOfLastResult);

    useEffect(() => {
        const fetchIncomingResults = async () => {
            try {
                // 병렬로 stock과 order 데이터를 가져오기
                const [stockResponse, orderResponse] = await Promise.all([
                    axios.get('http://localhost:8000/api/stock/'),
                    axios.get('http://localhost:8000/api/order/')
                ]);

                const stockData = stockResponse.data;
                const orderData = orderResponse.data;

                // stock 데이터에 order 데이터를 병합
                const combinedResults = stockData.map(stockItem => {
                    const correspondingOrder = orderData.find(orderItem => orderItem.OrderNo === stockItem.OrderNo);
                    return {
                        ...stockItem,
                        order: correspondingOrder || {} // 대응하는 order 데이터를 추가, 없으면 빈 객체
                    };
                });

                // 상태 업데이트
                setIncomingResults(combinedResults);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }

        };
        fetchIncomingResults();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleRegisterNavigation = () => {
        // Add functionality here if needed
        console.log('Register button clicked');
    };

    const { authState } = useAuth();
    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) {}

    

    return (
        <div>
            <div className="procurement-page-container">
                <h2>입고 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="purchaseOrderNumber">발주번호</label>
                    <input type="text" id="purchaseOrderNumber"/>
                    <button>조회</button>
                    <label htmlFor="item" className="item-label">입고품목</label>
                    <input type="text" id="item"/>
                </div>
                <div className="input-container">
                    <label htmlFor="arrivalDateTime">입고일시</label>
                    <Datepicker id="arrivalDateTime"/>
                    <label htmlFor="historyNumber">이력번호</label>
                    <input type="text" id="historyNumber"/>
                </div>
                <div className="input-container">
                    <label htmlFor="receiver">입고자 명</label>
                    <text id="stockID">{empNo}</text>
                    <label htmlFor="unitPrice">입고단가</label>
                    <input type="text" id="unitPrice"/>
                </div>
                <div className="input-container">
                    <label htmlFor="actualWeight">실 중량</label>
                    <input type="text" id="actualWeight"/>
                </div>
                <div className="input-container">
                    <label htmlFor="actualPurchasePrice">실 매입가</label>
                    <input type="text" id="actualPurchasePrice"/>
                    <button>등록</button>
                </div>
                <button onClick={handleRegisterNavigation} className="register-button">등록</button>
            </div>
            <div className="procurement-page-container">
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>
                    <input type="text" id="orderDateTimeSearch"/>
                    <button>조회</button>
                </div>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>발주일시</th>
                            <th>입고 예정일</th>
                            <th>거래처(번호)</th>
                            <th>발주중량(KG)</th>
                            <th>부위</th>
                            <th>발주금액</th>
                            <th>입고자명</th>
                            <th>입고품목</th>
                            <th>실 중량</th>
                            <th>실 매입가</th>
                            <th>이력번호</th>
                            <th>도축일</th>
                            <th>입고단가</th>
                            <th>입고번호</th>
                            <th>상태</th>
                            <th>수정</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.ID}</td>
                            <td>{result.order?.OrderDate || '-'}</td>
                            <td>{result.order?.ETA || '-'}</td>
                            <td>{result.order?.Client || '-'}</td>
                            <td>{result.order?.OrderWeight || '-'}</td>
                            <td>{result.order?.Part || '-'}</td>
                            <td>{result.order?.OrderPrice || '-'}</td>
                            <td>{result.StockWorker}</td>
                            <td>{result.Stockitem}</td>
                            <td>{result.RealWeight}</td>
                            <td>{result.RealPrice}</td>
                            <td>{result.MeterialNo}</td>
                            <td>{result.SlaugtherDate}</td>
                            <td>{result.UnitPrice}</td>
                            <td>{result.StockNo}</td>
                            <td>{result.StockSituation}</td>
                            <td>{result.edit}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(incomingResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default IncomingPage;
