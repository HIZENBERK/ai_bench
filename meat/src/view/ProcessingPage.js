//2차가공
import React, {useEffect, useState} from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios";
import {useAuth} from "../component/AuthContext";
// import Datepicker from "../component/DatePicker";
import {format} from "date-fns";
//import {format} from "date-fns"; // Ensure this path is correct

const ProcessingPage = () => {
    const [processingResults,setProcessingResults] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(30);
    const [SearchOption, setSearchOption] = useState('')
    const [TextForSearch, setTextForSearch] = useState('')
    const handleSearchOption = (event) => {
        setSearchOption(event.target.value);
    }

    const handleSearch = () => {
        const lowerCasedFilter = TextForSearch.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고일시':
                    return item.StockDate.toLowerCase().includes(lowerCasedFilter);
                case '작업일':
                    return item.ProductDate.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                case '제품번호':
                    return item.ProductNo.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.ProductSituation.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setProcessingResults(filteredData);
    };

    const handleSearch2 = (searchValue) => {
        console.log(searchValue);
        setTextForSearch(searchValue);
        const lowerCasedFilter = searchValue.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고일시':
                    return item.StockDate.toLowerCase().includes(lowerCasedFilter);
                case '작업일':
                    return item.ProductDate.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                case '제품번호':
                    return item.ProductNo.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.ProductSituation.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setProcessingResults(filteredData);
    };

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
            setSearchResults(response.data); // 초기 데이터 설정
            setProcessingResults(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };
    useEffect(() => {
        fetchSearchResults();
    }, []);
    const { authState } = useAuth();
    let empNo = '';
    try {
        empNo = authState.empNo;
    } catch (e) {}
    // const handleDateChange = (date) =>{
    //     const currentTime = new Date();
    //     const selectedDateWithTime = new Date(
    //         date.getFullYear(),
    //         date.getMonth(),
    //         date.getDate(),
    //         currentTime.getHours(),
    //         currentTime.getMinutes(),
    //         currentTime.getSeconds()
    //     ); // 선택된 날짜에 현재 시분초를 추가합니다.
    //     setWorkingDay(selectedDateWithTime);
    //     console.log(workingDay)
    // };
    const handleRegisterNavigation = async () => {
        console.log(
            selectedRawMaterialNumberOption,
            workingDay ? format(workingDay, "yyyy-MM-dd'T'HH:mm:ss") : null,
            finalWeight,
            loss,
            unitPrice,
            discountRate
        )
        try {
            const response = await axios.post('http://localhost:8000/api/product/',{
                Method: 'post',
                StockNo: selectedRawMaterialNumberOption,
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
    const ProductDay = () => {
        const today = new Date();
        const FormattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    }



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

    const handleDelete = async (ProductNo) => {
        console.log(ProductNo);
        try {
            const response = await axios.post('http://localhost:8000/api/product/'
            ,{
                Method: 'delete',
                ProductNo: ProductNo
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
            console.error('데이터 삭제 에러:', error);
        }
    };

    const handleRawMaterial = (event) => {
        setSelectedRawMaterialNumberOption(event.target.value);
    };

    return (
        <div>
            <div className="processing-page-container">
                <h2>2차가공 페이지</h2>
                <div className="input-container">
                    <label htmlFor="rawMaterialNumber">원료 번호</label>
                    <select className="selectid" id="rawMaterialNumber" onClick={handleDropdownClickRawMaterialNumber}
                            onChange={handleRawMaterial}>
                            {rawMaterialNumberOptions.map((option, index) => (
                                <option key={index}>
                                    {option.StockNo}
                                </option>
                            ))}
                    </select>

                    <div>
                        <
                    </div>



                {/*<input type="text" id="rawMaterialNumber" value={selectedRawMaterialNumberOption} onClick={handleDropdownClickRawMaterialNumber}/>*/}
                {/*    {isRawMaterialNumberOpen && (*/}
                {/*        <ul style={{ position: 'relative', top:'100%', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0, zIndex: 0 }}>*/}
                {/*            {rawMaterialNumberOptions.map((option, index) => (*/}
                {/*                <li key={index} onClick={() => handleRawMaterialNumberOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>*/}
                {/*                    {option.StockNo}*/}
                {/*                </li>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    )}*/}
                    <button>조회</button>
                </div>

                <div className="input-container">
                    <div className="loss-label">
                    <label htmlFor="loss">로스</label>
                    <input type="text" id="loss" value={loss} onChange={(e) => setLoss(e.target.value)}/></div>
                </div>

                <div className="input-container">
                    <label htmlFor="worker">작업자</label>
                    <text id="ordererID">{empNo}</text>
                    <div className="unitPrice-label">
                    <label htmlFor="unitPrice">단가</label>
                    <input type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)}/></div>
                </div>

                <div className="input-container">
                    <label htmlFor="finalWeight">작업 후 중량</label>
                    <input type="text" id="finalWeight" value={finalWeight} onChange={(e) => setFinalWeight(e.target.value)}/>
                    <div className="discountRate-label">
                    <label htmlFor="discountRate">할인율</label>
                    <input type="text" id="discountRate" value={discountRate} onChange={(e) => setDiscountRate(e.target.value)}/></div>
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
                    <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'발주일시'}>발주일시</option>
                        <option value={'입고일시'}>입고일시</option>
                        <option value={'거래처'}>거래처</option>
                        <option value={'부위'}>부위</option>
                        <option value={'작업일'}>작업일</option>
                        <option value={'제품번호'}>제품번호</option>
                        <option value={'상태'}>상태</option>
                    </select>
                    <input type="text" id="TextForSearch" value={TextForSearch}
                           onChange={(e) => handleSearch2(e.target.value)}/>
                    <button onClick={handleSearch}>조회</button>
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
                            <th>원료번호</th>
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
                                <td>{result.ProductDay}</td>
                                <td>{result.ProductWorker}</td>
                                <td>{result.WeightAfterWork}</td>
                                <td>{result.LossWeight}</td>
                                <td>{result.ProductPrice}</td>
                                <td>{result.DiscountRate}</td>
                                <td>{result.ProductNo}</td>
                                <td>{result.ProductSituation}</td>
                                <td>
                                    <button onClick={() => handleDelete(result.ProductNo)}>수정</button>
                                    /
                                    <button onClick={() => handleDelete(result.ProductNo)}>삭제</button>
                                </td>
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
