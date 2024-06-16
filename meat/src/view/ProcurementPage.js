import React, { useEffect, useRef, useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';
import Datepicker from "../component/DatePicker";
import { useAuth } from "../component/AuthContext";
import axios from "axios";
import { format } from "date-fns";

const ProcurementPage = () => {

    const [TextForSearch, setTextForSearch] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [OrderDate, setOrderDate] = useState('');
    const [ETA, setETA] = useState('');
    const [OrderWeight, setOrderWeight] = useState('');
    const [OrderPrice, setOrderPrice] = useState('');

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10); // Default value is 10
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

    // Part dropdown state
    const [partOptions, setPartOptions] = useState([]);
    const [selectedPartOption, setSelectedPartOption] = useState('');
    const [selectedPartCode, setSelectedPartCode] = useState('');
    const [isPartOpen, setIsPartOpen] = useState(false);

    // client dropdown state
    const [clientOptions, setClientOptions] = useState([]);
    const [selectedClientOption, setSelectedClientOption] = useState('');
    const [isClientOpen, setIsClientOpen] = useState(false);
    const partRef = useRef();
    const clientRef = useRef();

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/order/');
            console.log(response.data);
            setSearchResults(response.data);// 초기 데이터 설정
            setFilteredResults(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };



    useEffect(() => { //제한없이 모든 사용자가 접근 가능
        fetchSearchResults();
    }, []);

    const fetchPartOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/MeatPartInfo/'); // Replace with actual URL for parts
            console.log(response.data);
            setPartOptions(response.data);
        } catch (error) {
            console.error('Error fetching part data:', error);
        }
    };

    const fetchClientOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/ClientInfo/'); // Replace with actual URL for clients
            console.log(response.data);
            setClientOptions(response.data);
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    };

    const handleDateChange = (date, id) => {
        if (id === 'orderDateTime') {
            setOrderDate(date);
            console.log(OrderDate);
        } else if (id === 'expectedDeliveryDate') {
            setETA(date);
            console.log(ETA);
        }
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };
    const handleSearchOption = (event) => {
        setSearchOption(event.target.value);
    }

    const handleRegisterNavigation = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/order/', {
                Part: selectedPartCode,
                OrderDate: OrderDate ? format(OrderDate, 'yyyy-MM-dd') : null,
                OrderWorker: authState.empNo,
                ETA: ETA ? format(ETA, 'yyyy-MM-dd') : null,
                Client: selectedClientOption,
                OrderWeight: OrderWeight,
                OrderPrice: OrderPrice.replace(/,/g, ''), // 천 단위 구분자를 제거한 후 전송
                OrderSituation: '발주완료'
            });
            console.log(response);
            fetchSearchResults();
            setSelectedPartCode('');
            setSelectedPartOption('');
            setOrderDate('');
            setETA('');
            setSelectedClientOption('');
            setOrderWeight('');
            setOrderPrice('');
        } catch (error) {
            console.error('데이터 생성 에러:', error);
        }
    };

    const handleSearch = () => {
        const lowerCasedFilter = TextForSearch.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.ETA.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.OrderSituation.toLowerCase().includes(lowerCasedFilter);
                case '발주번호':
                    return item.OrderNo.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setFilteredResults(filteredData);
    };
    const handleSearch2 = (searchValue) => {
        console.log(searchValue);
        setTextForSearch(searchValue);
        const lowerCasedFilter = searchValue.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.ETA.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.OrderSituation.toLowerCase().includes(lowerCasedFilter);
                case '발주번호':
                    return item.OrderNo.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setFilteredResults(filteredData);
    };
    const { authState } = useAuth();
    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) { }

    const handleDropdownClickPart = () => {
        if (!isPartOpen) {
            fetchPartOptions();
        }
        setIsPartOpen(!isPartOpen);
    };

    const handleDropdownClickClient = () => {
        if (!isClientOpen) {
            fetchClientOptions();
        }
        setIsClientOpen(!isClientOpen);
    };

    const handlePartOptionClick = (option) => {
        setSelectedPartOption(option.name);
        setSelectedPartCode(option.code);
        setIsPartOpen(false);
    };

    const handleClientOptionClick = (option) => {
        setSelectedClientOption(option.ClientName);
        setIsClientOpen(false);
    };
    const handleClickOutside = (event) => {
        if (partRef.current && !partRef.current.contains(event.target)) {
            setIsPartOpen(false);
        }
        if (clientRef.current && !clientRef.current.contains(event.target)) {
            setIsClientOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatPrice = (price) => {
        const number = parseFloat(price.replace(/,/g, '')); // 천 단위 구분자 제거
        if (isNaN(number)) return '';
        return number.toLocaleString('ko-KR'); // 천 단위 구분자 추가
    }

    const handlePriceChange = (e) => {
        const { value } = e.target;
        const formattedPrice = formatPrice(value);
        setOrderPrice(formattedPrice); // 천 단위 구분자 추가, '원'은 제거
    }

    return (
        <div>
            <div className="procurement-page-container">
                <h2>발주 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="orderDateTime">발주일시</label>
                    <Datepicker id="orderDateTime" selectedDate={OrderDate} onChangeDate={handleDateChange} />
                    <div className="input-totalQuantity">
                        <label htmlFor="totalQuantity">발주중량</label></div>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                id="totalQuantity"
                                value={OrderWeight}
                                onChange={(e) => setOrderWeight(e.target.value)}
                                style={{ paddingRight: '30px' }} // 오른쪽에 여백 추가
                            />
                            <span style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}>kg</span>
                        </div>
                </div>
                <div className="input-container">
                    <label htmlFor="ordererID">발주자(사번)명</label>
                    <text id="ordererID">{empNo}</text>
                    <label htmlFor="expectedDeliveryDate">입고 예정일</label>
                    <Datepicker id="expectedDeliveryDate" selectedDate={ETA} onChangeDate={handleDateChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="part">부위</label>
                    <input type="text" id="part" value={selectedPartOption} onClick={handleDropdownClickPart} readOnly />
                    {isPartOpen && (
                        <ul style={{ position: 'relative', top: '100%', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0, zIndex: 0 }}>
                            {partOptions.map((option, index) => (
                                <li key={index} onClick={() => handlePartOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="input-client">
                        <label htmlFor="client">거래처</label>
                        <input type="text" id="client" value={selectedClientOption} onClick={handleDropdownClickClient} readOnly />
                        {isClientOpen && (
                            <ul style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0 }}>
                                {clientOptions.map((option, index) => (
                                    <li key={index} onClick={() => handleClientOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>
                                        {option.ClientName}
                                    </li>
                                ))}
                            </ul>
                        )}</div>
                </div>
                <div className="input-container">
                    <label htmlFor="orderAmount">발주금액</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            id="orderAmount"
                            value={OrderPrice}
                            onChange={handlePriceChange}
                            style={{ paddingRight: '30px' }} // 오른쪽에 여백 추가
                        />
                        <span style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>원</span>
                    </div>
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
                    {/*<label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>*/}
                    <select id="resultsPerPage" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'발주일시'}>발주일시</option>
                        <option value={'입고예정일'}>입고예정일</option>
                        <option value={'거래처'}>거래처</option>
                        <option value={'상태'}>상태</option>
                        <option value={'발주번호'}>발주번호</option>
                        <option value={'부위'}>부위</option>
                    </select>
                    <input type="text" id="orderDateTimeSearch" value={TextForSearch}
                        onChange={(e) => handleSearch2(e.target.value)} />
                    <button onClick={handleSearch}>조회</button>
                </div>
                <div className="procurement-page-container">
                    <table className="table-container">
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
                                    <td>{index + 1}</td>
                                    <td>{result.OrderDate}</td>
                                    <td>{result.ETA}</td>
                                    <td>{result.Client}</td>
                                    <td>{result.OrderWeight}</td>
                                    <td>{result.Part}</td>
                                    <td>{result.OrderPrice}</td>
                                    <td>{result.OrderSituation}</td>
                                    <td>{result.OrderNo}</td>
                                    <td>수정/삭제</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProcurementPage;
