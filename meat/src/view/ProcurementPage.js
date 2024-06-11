import React, { useEffect, useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';
import Datepicker from "../component/DatePicker";
import { useAuth } from "../component/AuthContext";
import axios from "axios";

const ProcurementPage = () => {
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
    const [clientOptions, setclientOptions] = useState([]);
    const [selectedclientOption, setSelectedclientOption] = useState('');
    const [isclientOpen, setIsclientOpen] = useState(false);

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

    const fetchclientOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/ClientInfo/'); // Replace with actual URL for clients
            console.log(response.data);
            setclientOptions(response.data.ClientName);
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

    const handleRegisterNavigation = () => {
        console.log('Register button clicked');
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

    const handleDropdownClickclient = () => {
        if (!isclientOpen) {
            fetchclientOptions();
        }
        setIsclientOpen(!isclientOpen);
    };

    const handlePartOptionClick = (option) => {
        setSelectedPartOption(option);
        setIsPartOpen(false);
    };

    const handleclientOptionClick = (option) => {
        setSelectedclientOption(option);
        setIsclientOpen(false);
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>발주 등록 페이지</h2>
                <div className="input-container">
                    <label htmlFor="orderDateTime">발주일시</label>
                    <Datepicker id="orderDateTime" />
                    <label htmlFor="totalQuantity">발주중량</label>
                    <input type="text" id="totalQuantity" />
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
                        <ul>
                            {partOptions.map((option, index) => (
                                <li key={index} onClick={() => handlePartOptionClick(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    <label htmlFor="client">거래처</label>
                    <input type="text" id="client" value={selectedclientOption} onClick={handleDropdownClickclient} readOnly />
                    {isclientOpen && (
                        <ul>
                            {clientOptions.map((option, index) => (
                                <li key={index} onClick={() => handleclientOptionClick(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="input-container">
                    <label htmlFor="orderAmount">발주금액</label>
                    <input type="text" id="orderAmount" />
                </div>
                <div className="register-button-container">
                    <button onClick={handleRegisterNavigation} className="register-button">등록</button>
                </div>
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
