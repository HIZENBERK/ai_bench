import React, { useEffect, useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useAuth } from "../component/AuthContext";

const IncomingPage = () => {
    const [incomingResults, setIncomingResults] = useState([]);
    const [orderNumbers, setOrderNumbers] = useState([]);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [arrivalDateTime, setArrivalDateTime] = useState(new Date());
    const [slaughter, setSlaughter] = useState(new Date());
    const [historyNumber, setHistoryNumber] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [actualWeight, setActualWeight] = useState('');
    const [actualPurchasePrice, setActualPurchasePrice] = useState('');
    const [stockItem, setStockItem] = useState('');
    
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = incomingResults.slice(indexOfFirstResult, indexOfLastResult);

    useEffect(() => {
        const fetchOrderNumbers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/order/');
                setOrderNumbers(response.data);
            } catch (error) {
                console.error('발주번호 가져오기 에러:', error);
            }
        };

        const fetchIncomingResults = async () => {
            try {
                const [stockResponse, orderResponse] = await Promise.all([
                    axios.get('http://localhost:8000/api/stock/'),
                    axios.get('http://localhost:8000/api/order/')
                ]);

                const stockData = stockResponse.data;
                const orderData = orderResponse.data;

                const combinedResults = stockData.map(stockItem => {
                    const correspondingOrder = orderData.find(orderItem => orderItem.OrderNo === stockItem.OrderNo);
                    return {
                        ...stockItem,
                        order: correspondingOrder || {}
                    };
                });

                setIncomingResults(combinedResults);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }
        };

        fetchOrderNumbers();
        fetchIncomingResults();
    }, []);

    const handleOrderNumberChange = (event) => {
        const orderNumber = event.target.value;
        setSelectedOrderNumber(orderNumber);
        const selectedOrder = orderNumbers.find(order => order.OrderNo === orderNumber);
        setOrderDetails(selectedOrder || null);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleRegisterNavigation = async () => {
        try {
            const payload = {
                OrderNo: selectedOrderNumber,
                StockDate: arrivalDateTime.toISOString().split('T')[0], // 입고일시
                StockWorker: authState.empNo, // 로그인한 계정명
                StockItem: stockItem, // 입고품목
                RealWeight: parseFloat(actualWeight),
                RealPrice: parseFloat(actualPurchasePrice),
                MaterialNo: parseInt(historyNumber),
                SlaughterDate: slaughter.toISOString().split('T')[0], // 도축일
                UnitPrice: parseFloat(unitPrice),
                StockSituation: '입고' // 상태 기본값 설정
            };

            const response = await axios.post('http://localhost:8000/api/stock/', payload);
            console.log('등록 성공:', response.data);

            // 상태 업데이트 후, 테이블 새로고침
            const stockResponse = await axios.get('http://localhost:8000/api/stock/');
            setIncomingResults(stockResponse.data);
        } catch (error) {
            console.error('등록 실패:', error);
        }
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
                    <select id="purchaseOrderNumber" value={selectedOrderNumber} onChange={handleOrderNumberChange}>
                        <option value="">발주번호 선택</option>
                        {orderNumbers.map((order, index) => (
                            <option key={index} value={order.OrderNo}>{order.OrderNo}</option>
                        ))}
                    </select>
                    <button onClick={() => handleOrderNumberChange({ target: { value: selectedOrderNumber } })}>조회</button>
                    <label htmlFor="item" className="item-label">입고품목</label>
                    <input type="text" id="item" value={stockItem} onChange={(e) => setStockItem(e.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor="arrivalDateTime">입고일시</label>
                    <Datepicker
                        id="arrivalDateTime"
                        selected={arrivalDateTime}
                        onChange={(date) => setArrivalDateTime(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                    <label htmlFor="historyNumber">이력번호</label>
                    <input type="text" id="historyNumber" value={historyNumber} onChange={(e) => setHistoryNumber(e.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor="receiver">입고자 명</label>
                    <text id="stockID">{empNo}</text>
                    <div className="unitPrice-label">
                    <label htmlFor="unitPrice">입고단가</label>
                    <input type="text" id="unitPrice1" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} /></div>
                </div>
                <div className="input-container">
                    <label htmlFor="actualWeight">실 중량</label>
                    <input type="text" id="actualWeight" value={actualWeight} onChange={(e) => setActualWeight(e.target.value)} />
                    <label htmlFor="slaughterDate" className="slaughterDate-labal">도축일</label>
                    <Datepicker
                        id="slaughterDate"
                        selected={slaughter}
                        onChange={(date) => setSlaughter(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="actualPurchasePrice">실 매입가</label>
                    <input type="text" id="actualPurchasePrice" value={actualPurchasePrice} onChange={(e) => setActualPurchasePrice(e.target.value)} />
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
                    <input type="text" id="orderDateTimeSearch" />
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
