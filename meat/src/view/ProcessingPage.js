//2차가공
import React, {useEffect, useState} from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios";
import {useAuth} from "../component/AuthContext";
import Datepicker from "../component/DatePicker";
import {format} from "date-fns";
//import {format} from "date-fns"; // Ensure this path is correct

const ProcessingPage = () => {
    const [processingResults,setProcessingResults] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = processingResults.slice(indexOfFirstResult, indexOfLastResult);

    const [workingDay, setWorkingDay] = useState('')
    const [loss, setLoss] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [finalWeight, setFinalWeight] = useState('');
    const [discountRate, setDiscountRate] = useState('');

    const [isRawMaterialNumberOpen, setIsRawMaterialNumberOpen] = useState(false);
    const [rawMaterialNumberOptions, setRawMaterialNumberOptions] = useState([]);
    const [selectedRawMaterialNumberOption ,setSelectedRawMaterialNumberOption] = useState('')
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };
    const fetchSearchResults = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/product/');
            console.log(response.data);
            setProcessingResults(response.data); // 초기 데이터 설정
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };
    useEffect(() => {
        fetchSearchResults();
    }, []);
    const { authState } = useAuth();
    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) {}
    const handleDateChange = (date) =>{

        setWorkingDay(date);
        console.log(workingDay)
    };
    const handleRegisterNavigation = async () => {
        console.log(
            selectedRawMaterialNumberOption,
            workingDay,
            finalWeight,
            loss,
            unitPrice,
            discountRate
        )
        try {
            const response = await axios.post('http://localhost:8000/api/product/',{
                StockNo: selectedRawMaterialNumberOption,
                ProductDate: workingDay ? format(workingDay, "yyyy-MM-dd 'T' HH:mm:ss") : null,
                ProductWorker: authState.empNo,
                WeightAfterWork: finalWeight,
                LossWeight: loss,
                ProductPrice: unitPrice,
                DiscountRate: discountRate,
                ProductSituation: '제품 생성',
                Quantity:1,
            });
            console.log(response);
            fetchSearchResults();
            setWorkingDay('');
            setSelectedRawMaterialNumberOption('')
            setFinalWeight('');
            setLoss('');
            setUnitPrice('');
            setDiscountRate('');
        } catch (error) {
            console.error('데이터 생성 에러:', error);
        }
    };
    const fetchRawMaterialNumberOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/stockInfo/'); // Replace with actual URL for parts
            console.log(response.data);
            setRawMaterialNumberOptions(response.data);
        } catch (error) {
            console.error('Error fetching part data:', error);
        }
    };
    const handleDropdownClickRawMaterialNumber = () => {
        if (!isRawMaterialNumberOpen) {
            fetchRawMaterialNumberOptions().then(r => null);
        }
        setIsRawMaterialNumberOpen(!isRawMaterialNumberOpen);
    };

    const handleRawMaterialNumberOptionClick = (option) => {
        setSelectedRawMaterialNumberOption(option.StockNo);
        setIsRawMaterialNumberOpen(false);
    };
    return (
        <div>
            <div className="processing-page-container">
                <h2>2차가공 페이지</h2>
                <div className="input-container">
                    <label htmlFor="rawMaterialNumber">원료 번호</label>
                    <input type="text" id="rawMaterialNumber" value={selectedRawMaterialNumberOption} onClick={handleDropdownClickRawMaterialNumber}/>
                    {isRawMaterialNumberOpen && (
                        <ul style={{ position: 'relative', top:'100%', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0, zIndex: 0 }}>
                            {rawMaterialNumberOptions.map((option, index) => (
                                <li key={index} onClick={() => handleRawMaterialNumberOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>
                                    {option.StockNo}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button>조회</button>
                </div>
                <div className="input-container">
                    <label htmlFor="workingDay">작업일(요일)</label>
                    <Datepicker id="workingDay"  dateFormat="yyyy-MM-dd HH:mm:ss" selectedDate={workingDay} onChangeDate={handleDateChange}/>
                    <label htmlFor="loss">로스</label>
                    <input type="text" id="loss" value={loss} onChange={(e) => setLoss(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="worker">작업자</label>
                    <text id="ordererID">{empNo}</text>
                    <label htmlFor="unitPrice">단가</label>
                    <input type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="finalWeight">작업 후 중량</label>
                    <input type="text" id="finalWeight" value={finalWeight} onChange={(e) => setFinalWeight(e.target.value)}/>
                    <label htmlFor="discountRate">할인율</label>
                    <input type="text" id="discountRate" value={discountRate} onChange={(e) => setDiscountRate(e.target.value)}/>
                </div>
                <button onClick={handleRegisterNavigation} className="register-button">등록</button>
            </div>
            <div className="processing-page-container">
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
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
                            <th>거래처(번호)</th>
                            <th>발주중량(KG)</th>
                            <th>부위</th>
                            <th>발주금액</th>
                            <th>입고일시</th>
                            <th>입고자명</th>
                            <th>입고품목</th>
                            <th>실중량</th>
                            <th>실 매입가</th>
                            <th>이력번호</th>
                            <th>도축일</th>
                            <th>입고단가</th>
                            <th>작업일</th>
                            <th>작업자</th>
                            <th>작업 후 중량</th>
                            <th>로스</th>
                            <th>단가</th>
                            <th>할인율</th>
                            <th>제품번호</th>
                            <th>상태</th>
                            <th>수정</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{result.OrderDate}</td>
                                <td>{result.Client}</td>
                                <td>{result.OrderWeight}</td>
                                <td>{result.Part}</td>
                                <td>{result.OrderPrice}</td>
                                <td>{result.StockDate}</td>
                                <td>{result.StockWorker}</td>
                                <td>{result.Stockitem}</td>
                                <td>{result.RealWeight}</td>
                                <td>{result.RealPrice}</td>
                                <td>{result.MeterialNo}</td>
                                <td>{result.SlaugtherDate}</td>
                                <td>{result.UnitPrice}</td>
                                <td>{result.ProductDate}</td>
                                <td>{result.ProductWorker}</td>
                                <td>{result.WeightAfterWork}</td>
                                <td>{result.LossWeight}</td>
                                <td>{result.ProductPrice}</td>
                                <td>{result.DiscountRate}</td>
                                <td>{result.ProductNo}</td>
                                <td>{result.ProductSituation}</td>
                                <td>{'수정/삭제'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(processingResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProcessingPage;
