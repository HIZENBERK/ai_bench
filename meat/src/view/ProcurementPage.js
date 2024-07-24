//발주 등록 페이지
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';
import Datepicker from "../component/DatePicker";
import { useAuth } from "../component/AuthContext";
import axios from "axios";
import { format } from "date-fns";
import ProSearch from "../component/ProSearch";

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
    const [resultsPerPage, setResultsPerPage] = useState(30); // Default value is 10
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

    const navigate = useNavigate();
    const { authState } = useAuth();
    const userJob = authState.job; // 직급
    const userPosition = authState.position; // 직위


    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) { }

    useEffect(() => {
        if (userJob === 'OM' || (userPosition === 'A' || userPosition === 'M')) {
            fetchSearchResults().then(r => null); //.then -> 통신을 하는 코드가 통신이 완료된 뒤에 어떤 걸 하는 지 결정하는 코드, 통신 속도가 느려 통신보다 결과 코드가 먼저 실행될 때 사용하면 좋을 듯
        // Warehouse Manager (WM) 또는 관리자 (A)일 경우 데이터를 가져오도록 처리
        } else {
        alert('접근 권한이 없습니다.');
        navigate('/main');
        // 접근 권한이 없을 때 처리 (예: 리디렉션, 메시지 출력 등)
        }
    }, [userJob, userPosition, navigate]);


    // useEffect(() => { //제한없이 모든 사용자가 접근 가능
    //     fetchSearchResults();
    // }, []);

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


    const handleRegisterNavigation = async () => {
        console.log(selectedPartCode,  OrderDate,ETA, selectedClientOption,  OrderWeight, OrderPrice);
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
            fetchSearchResults().then(r => null);
            // setSelectedPartCode('');
            // setSelectedPartOption('');
            setOrderDate('');
            setETA('');
            // setSelectedClientOption('');
            setOrderWeight('');
            setOrderPrice('');
        } catch (error) {
            console.error('데이터 생성 에러:', error);
        }
    };



    const handleDropdownClickPart = (e) => {
        setSelectedPartOption(e.target.value);
        setSelectedPartCode(e.target.value);
        fetchPartOptions();
    };


    const handleClientChange = (event) => {
        setSelectedClientOption(event.target.value);
        fetchClientOptions();
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
        console.log(option.ClientName);
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

    useEffect(() => {
        fetchSearchResults();
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

    const handleDelete = () => {

    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>발주 등록 페이지</h2>
                <div className="procurement-left">
                    <div className="input-container">
                        <label htmlFor="orderDateTime">발주일시</label>
                        <Datepicker id="orderDateTime" selectedDate={OrderDate} onChangeDate={handleDateChange}/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="ordererID">발주자(사번)명</label>
                        <text id="ordererID">{empNo}</text>
                    </div>

                    <div className="input-container">
                        <label htmlFor="part">부위</label>
                        <select id="Part" className="selectid" onClick={handleDropdownClickPart}>
                            <option value="" disabled selected>부위를 선택하세요.</option>
                            {partOptions.map((option, index) => (
                                <option key={index} value={option.code}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-container">
                        <label htmlFor="orderAmount">발주금액</label>
                        <div style={{position: 'relative'}}>
                            <input type="text" id="orderAmount" value={OrderPrice} onChange={handlePriceChange}
                                   style={{paddingRight: '30px'}} // 오른쪽에 여백 추가
                            />
                            <span style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}>원</span>
                        </div>
                    </div>
                </div>

                <div className="procurement-right">
                    <div className="input-container">
                        <div className="input-totalQuantity">
                            <label htmlFor="totalQuantity">발주중량</label></div>
                        <div style={{position: 'relative'}}>
                            <input
                                type="text"
                                id="totalQuantity"
                                value={OrderWeight}
                                onChange={(e) => setOrderWeight(e.target.value)}
                                style={{paddingRight: '30px'}} // 오른쪽에 여백 추가
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
                        <label htmlFor="expectedDeliveryDate">입고 예정일</label>
                        <Datepicker id="expectedDeliveryDate" selectedDate={ETA} onChangeDate={handleDateChange}/>
                    </div>

                    <div className="input-container">
                        <div className="input-client">
                            <label htmlFor="client">거래처</label>
                            <select id="client" className="selectClient"
                                    onChange={handleClientChange} onClick={handleDropdownClickClient}>
                                <option value="" disabled selected>거래처를 선택하세요.</option>
                                {clientOptions.map((option, index) => (
                                    <option key={index} value={option.ClientName}>
                                        {/*onClick={() => handleClientOptionClick(option)}*/}
                                        {option.ClientName}
                                    </option>
                                ))}
                            </select>
                        </div>
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

                <ProSearch setFilteredResults={setFilteredResults} />

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
                                    <td>
                                        <button onClick={() => handleDelete()}>수정</button>
                                        /
                                        <button onClick={() => handleDelete()}>삭제</button>
                                    </td>
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
