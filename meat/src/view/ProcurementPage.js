import React, {useEffect, useRef, useState} from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';
import Datepicker from "../component/DatePicker";
import { useAuth } from "../component/AuthContext";
import axios from "axios";

const ProcurementPage = () => {
    const [OrderDate,setOrderDate] = useState('')
    const [ETA,setETA] = useState('')
    const [OrderWeight,setOrderWeight] = useState('')
    const [OderPrice, setOderPrice] = useState('')

    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10); // Default value is 10
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    // Part dropdown state
    const [partOptions, setPartOptions] = useState([]);
    const [selectedPartOption, setSelectedPartOption] = useState('');
    const [isPartOpen, setIsPartOpen] = useState(false);

    // client dropdown state
    const [clientOptions, setClientOptions] = useState([]);
    const [selectedClientOption, setSelectedClientOption] = useState('');
    const [isClientOpen, setIsClientOpen] = useState(false);
    const partRef = useRef();
    const clientRef = useRef();

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/order/');
                console.log(response.data);
                setSearchResults(response.data);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }
        };
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handleRegisterNavigation = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/order/',{
                'PartName':selectedPartOption,
                'OrderDate': OrderDate,
                'OrderWorker': authState.empNo,
                'ETA': ETA,
                'Client': selectedClientOption,
                'OrderWeight': OrderWeight,
                'OderPrice': OderPrice
            });
            console.log(response);
            setSearchResults(response);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const { authState } = useAuth();
    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) {}

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

    return (
        <div>
            <div className="procurement-page-container">
                <h2>발주 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="orderDateTime">발주일시</label>
                    <Datepicker id="orderDateTime"/>
                    <label htmlFor="totalQuantity">발주중량</label>
                    <input type="text" id="totalQuantity" value={OrderWeight} onChange={(e) => setOrderWeight(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="ordererID">발주자(사번)명</label>
                    <text id="ordererID">{empNo}</text>
                    <label htmlFor="expectedDeliveryDate">입고 예정일</label>
                    <Datepicker id="expectedDeliveryDate" />
                </div>
                <div className="input-container">
                    <label htmlFor="part">부위</label>
                    <input type="text" id="part" value={selectedPartOption} onClick={handleDropdownClickPart} readOnly />
                    {isPartOpen && (
                        <ul style={{ position: 'relative', top:'100%', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0, zIndex: 0 }}>
                            {partOptions.map((option, index) => (
                                <li key={index} onClick={() => handlePartOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <label htmlFor="client">거래처</label>
                    <input type="text" id="client" value={selectedClientOption} onClick={handleDropdownClickClient} readOnly />
                    {isClientOpen && (
                        <ul style={{position: 'relative', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', margin: 0, padding: 0}}>
                            {clientOptions.map((option, index) => (
                                <li key={index} onClick={() => handleClientOptionClick(option)} style={{ padding: '8px', cursor: 'pointer' }}>
                                    {option.ClientName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="input-container">
                    <label htmlFor="orderAmount">발주금액</label>
                    <input type="text" id="orderAmount" value={OderPrice} onChange={(e) => setOderPrice(e.target.value)}/>
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
                    <input type="text" id="orderDateTimeSearch" />
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
                            <td>{result.ID}</td>
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
