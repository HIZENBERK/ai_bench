//2차가공
import React, {useEffect, useState} from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios";
import {format} from "date-fns"; // Ensure this path is correct

const ProcessingPage = () => {
    const [processingResults,setProcessingResults] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = processingResults.slice(indexOfFirstResult, indexOfLastResult);

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
    return (
        <div>
            <div className="processing-page-container">
                <h2>2차가공 페이지</h2>
                <div className="input-container">
                    <label htmlFor="rawMaterialNumber">원료 번호</label>
                    <input type="text" id="rawMaterialNumber"/>
                    <button>조회</button>
                </div>
                <div className="input-container">
                    <label htmlFor="workingDay">작업일(요일)</label>
                    <input type="text" id="workingDay"/>
                    <label htmlFor="loss">로스</label>
                    <input type="text" id="loss"/>
                </div>
                <div className="input-container">
                    <label htmlFor="worker">작업자</label>
                    <input type="text" id="worker"/>
                    <label htmlFor="unitPrice">단가</label>
                    <input type="text" id="unitPrice"/>
                </div>
                <div className="input-container">
                    <label htmlFor="finalWeight">작업 후 중량</label>
                    <input type="text" id="finalWeight"/>
                    <label htmlFor="discountRate">할인율</label>
                    <input type="text" id="discountRate"/>
                </div>
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
                                <td>{result.orderDateTime}</td>
                                <td>{result.customerNumber}</td>
                                <td>{result.orderWeight}</td>
                                <td>{result.part}</td>
                                <td>{result.orderAmount}</td>
                                <td>{result.arrivalDateTime}</td>
                                <td>{result.receiver}</td>
                                <td>{result.item}</td>
                                <td>{result.actualWeight}</td>
                                <td>{result.actualPurchasePrice}</td>
                                <td>{result.historyNumber}</td>
                                <td>{result.slaughterDate}</td>
                                <td>{result.unitPrice}</td>
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
