import React, { useEffect, useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Ensure this path is correct
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useAuth } from "../component/AuthContext";

const IncomingPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [textForSearch, setTextForSearch] = useState('');
    const [searchOption, setSearchOption] = useState('');
    const [orderNumbers, setOrderNumbers] = useState([]);
    const [arrivalDateTime, setArrivalDateTime] = useState(new Date());
    const [slaughter, setSlaughter] = useState(new Date());
    const [meterialNo, setMeterialNo] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [actualWeight, setActualWeight] = useState('');
    const [actualPurchasePrice, setActualPurchasePrice] = useState('');
    const [stockItem, setStockItem] = useState('');

    
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);


    const { authState } = useAuth();
    const userJob = authState.job;
    const userPosition = authState.position;

    useEffect(() => {
        if (userJob === 'WM' || userPosition === 'M') {
            fetchInitialData();
            // Warehouse Manager (WM) 또는 매니저 (M)일 경우 데이터를 가져오도록 처리
        } else {
            alert('접근 권한이 없습니다.');
        }
    }, [userJob, userPosition]);
    

    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) {}

    useEffect(() => { //접근 권한에 상관없이 데이터를 가져오도록 처리
        fetchInitialData();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [textForSearch, searchOption, searchResults]);

    const fetchInitialData = async () => {
        try {
            const [orderResponse, stockResponse] = await Promise.all([
                axios.get('http://localhost:8000/api/order/'),
                axios.get('http://localhost:8000/api/stock/')
            ]);
            setOrderNumbers(orderResponse.data);
            const combinedResults = mergeData(stockResponse.data, orderResponse.data);
            setSearchResults(combinedResults);
            setFilteredResults(combinedResults);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const mergeData = (stockData, orderData) => {
        return stockData.map(stockItem => {
            const correspondingOrder = orderData.find(orderItem => orderItem.OrderNo === stockItem.OrderNo);
            return {
                ...stockItem,
                order: correspondingOrder || {}
            };
        });
    };

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

    const handleSearchOptionChange = (event) => {
        setSearchOption(event.target.value);
    };

    const handleSearch = () => {
        if (!textForSearch) {
            setFilteredResults(searchResults);
            return;
        }

        const filtered = searchResults.filter(result => {
            switch (searchOption) {
                case '발주일시':
                    return result.order.OrderDate?.includes(textForSearch);
                case '입고 예정일':
                    return result.order.ETA?.includes(textForSearch);
                case '거래처(번호)':
                    return result.order.Client?.includes(textForSearch);
                case '입고 번호':
                    return result.OrderNo?.includes(textForSearch);
                default:
                    return false;
            }
        });

        setFilteredResults(filtered);
        setCurrentPage(1);
    };

    const handleRegisterNavigation = async () => {
        try {
            const payload = {
                OrderNo: selectedOrderNumber,
                StockDate: arrivalDateTime.toISOString().split('T')[0], // 입고일시
                StockWorker: empNo, // 로그인한 계정명
                Stockitem: stockItem, // 입고품목
                RealWeight: actualWeight, // 실 중량
                RealPrice: actualPurchasePrice, // 실 매입가
                MeterialNo: meterialNo, // 이력번호
                SlaugtherDate: slaughter.toISOString().split('T')[0], // 도축일
                UnitPrice: unitPrice, // 입고단가
                StockSituation: '입고' // 상태 기본값 설정
            };

            console.log(payload);

            const response = await axios.post('http://localhost:8000/api/stock/', payload);
            console.log('등록 성공:', response.data);

            // 상태 업데이트 후, 테이블 새로고침
            fetchInitialData();
        } catch (error) {
            console.error('등록 실패:', error);
        }
    };

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
                    <label htmlFor="meterialNo">이력번호</label>
                    <input type="text" id="meterialNo" value={meterialNo} onChange={(e) => setMeterialNo(e.target.value)} />
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
                    <select id="searchOption" value={searchOption} onChange={handleSearchOptionChange}>
                        <option value="발주일시">발주일시</option>
                        <option value="입고 예정일">입고 예정일</option>
                        <option value="거래처(번호)">거래처(번호)</option>
                        <option value="입고 번호">입고 번호</option>
                    </select>
                    <input type="text" id="textForSearch" value={textForSearch} onChange={(e) => setTextForSearch(e.target.value)} />
                    <button onClick={handleSearch}>조회</button>
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
                                <td>{index + 1}</td>
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
                    totalPages={Math.ceil(searchResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default IncomingPage;
