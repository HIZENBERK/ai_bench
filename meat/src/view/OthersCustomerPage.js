//거래처 관리
import React, { useState, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../css/Pagination.css';
import axios from "axios";
import {Button, Dialog} from "@mui/material";
import DeleteModal from "../component/DeleteModal";
import OtherSearch from "../component/OtherSearch";

const OthersCustomerPage = () => {
    const [customerSearch, setCustomerSearch] = useState([]);
    const [data, setData] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [ClientType, setClientType] = useState(''); // 상태 이름 변경
    const [ClientName, setClientName] = useState(''); // 상태 이름 변경
    const [RepresentativeName, setRepresentativeName] = useState('');
    const [BusinessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
    const [ClientAddress, setClientAddress] = useState('');
    const [ClientPhone, setClientPhone] = useState('');
    const [PersonInCharge, setPersonInCharge] = useState('');
    const [PersonInChargePhone, setPersonInChargePhone] = useState('');
    const [FirstTradeDate, setFirstTradeDate] = useState('');
    const [LastTradeDate, setLastTradeDate] = useState('');
    const [Payment_Delivery, setPayment_Delivery] = useState('');



    const [EditModal, setEditModal] = useState('');
    const [DeleteModalOpen, setDeleteModalOpen] = useState('');
    const [selectedClient, setSelectClient] = useState('');

    // 데이터 API에서 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Client/');
                console.log(response.data);
                setData(response.data);
                setFilteredClients(response.data);
                setCustomerSearch(response.data);
                setCurrentPage(1);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }
        }
        fetchData().then(r => null);
    }, []);

    // 검색 필터링 함수
    // const handleSearch = () => {
    //     if (ClientType === '' && ClientName === '') {
    //         fetchData();
    //         return;
    //     }
    //     const results = data.filter(client =>
    //         (ClientType && client.ClientType.toLowerCase().includes(ClientType.toLowerCase())) ||
    //         (ClientName && client.ClientName.toLowerCase().includes(ClientName.toLowerCase()))
    //     );
    //     setFilteredClients(results);
    //     console.log(results);
    //     setCurrentPage(1); // 첫 페이지로 리셋
    // };
    // 데이터 API 다시 불러오기
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Client/');
            console.log(response.data);
            setData(response.data);
            setFilteredClients(response.data);
            setCustomerSearch(response.data);
            setCurrentPage(1);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };
    // 페이징 계산
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = customerSearch.slice(indexOfFirstResult, indexOfLastResult);

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 페이지당 결과 수 변경 핸들러
    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // 첫 페이지로 리셋
    };

    // 수정 핸들러
    // const handleEdit = (clientId) => {
    //     // 기능 추가 해야함
    // };

    const handleEdit = (clientId) => {
        setEditModal(true);
        setSelectClient(clientId);
    };

    const handleDelete = (BusinessRegistrationNumber) => {
        setDeleteModalOpen(true);
        setBusinessRegistrationNumber(BusinessRegistrationNumber);
    };

    const confirmDelete = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/Client/'
            , {
                Method: 'delete',
                BusinessRegistrationNumber: BusinessRegistrationNumber
                });
            console.log(response);
            fetchData();
            setClientType('');
            setRepresentativeName('');
            setClientAddress('');
            setClientName('');
            setClientPhone('');
            setPersonInCharge('');
            setPersonInChargePhone('');
            setFirstTradeDate('');
            setLastTradeDate('');
            setPayment_Delivery('');
            alert("삭제되었습니다.");
            setDeleteModalOpen(false);
        } catch (error) {
            console.error('데이터 삭제 에러.', error);
        }
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>거래처 관리 페이지</h2>
                {/*<div className="input-container">*/}
                {/*    <label htmlFor="ClientType">유형</label>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        id="ClientType"*/}
                {/*        value={ClientType}*/}
                {/*        onChange={(e) => setClientType(e.target.value)} // 상태 업데이트 함수 변경*/}
                {/*    />*/}
                {/*    <label htmlFor="ClientName">거래처명</label>*/}
                {/*    <div className="product-search-container">*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="ClientName"*/}
                {/*            value={ClientName}*/}
                {/*            onChange={(e) => setClientName(e.target.value)} // 상태 업데이트 함수 변경*/}
                {/*        />*/}
                {/*        <button onClick={handleSearch}>검색</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <OtherSearch setCustomerSearch={setCustomerSearch} />

                <div className="procurement-page-container">
                    <label htmlFor="resultsPerPage">현재페이지에 볼 리스트 개수</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                    <table className="table-container">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>거래처 유형</th>
                            <th>거래처 이름</th>
                            <th>대표자 명</th>
                            <th>사업자 번호</th>
                            <th>사업장 주소</th>
                            <th>사업자 연락처</th>
                            <th>담당자명(직급)</th>
                            <th>담당자 연락처</th>
                            <th>최초 거래일</th>
                            <th>최종 거래일</th>
                            <th>납입/ 납품 정보</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentResults.map((client, index) => (
                            <tr key={index}>
                                <td>{client.ID}</td>
                                <td>{client.ClientType}</td>
                                <td>{client.ClientName}</td>
                                <td>{client.RepresentativeName}</td>
                                <td>{client.BusinessRegistrationNumber}</td>
                                <td>{client.ClientAddress}</td>
                                <td>{client.ClientPhone}</td>
                                <td>{client.PersonInCharge}</td>
                                <td>{client.PersonInChargePhone}</td>
                                <td>{client.FirstTradeDate}</td>
                                <td>{client.LastTradeDate}</td>
                                <td>{client.Payment_Delivery}</td>
                                <td><button onClick={() => handleEdit(client)}>수정</button></td>
                                <td><button onClick={() => handleDelete(client.BusinessRegistrationNumber)}>삭제</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredClients.length / resultsPerPage)}
                        onPageChange={handlePageChange}
                    />

                    {/* 모달 오픈 */}
                    <DeleteModal open={DeleteModalOpen} onClose={() => setDeleteModalOpen(false)} onConfirm={confirmDelete}></DeleteModal>

                    <Dialog open={EditModal} onClose={() => setEditModal(false)}>
                        <div className="modal-overlay">
                            <div className="modal-customer">
                                <h2>거래처 관리 수정</h2>
                                <div className="editbtn1">
                                    <button className="editbtn"
                                            onClick={async () => {
                                                try {
                                                    const response= await  axios.post('http://localhost:8000/api/Client/', {
                                                        Method: 'update',
                                                        ClientType: selectedClient.ClientType,
                                                        ClientName: selectedClient.ClientName,
                                                        RepresentativeName: selectedClient.RepresentativeName,
                                                        BusinessRegistrationNumber: selectedClient.BusinessRegistrationNumber,
                                                        ClientAddress: selectedClient.ClientAddress,
                                                        ClientPhone: selectedClient.ClientPhone,
                                                        PersonInCharge: selectedClient.PersonInCharge,
                                                        PersonInChargePhone: selectedClient.PersonInChargePhone,
                                                        FirstTradeDate: selectedClient.FirstTradeDate,
                                                        LastTradeDate: selectedClient.LastTradeDate,
                                                        Payment_Delivery: selectedClient.Payment_Delivery,
                                                    });
                                                    alert('수정되었습니다.')
                                                    fetchData();
                                                    setEditModal(false);
                                                    } catch (error) {
                                                    console.error('수정실패.')
                                                    alert('수정실패');
                                                }
                                            }}
                                            >저장</button>
                                    <button className="editbtn" onClick={() => setEditModal(false)}>취소</button>
                                </div>
                                {selectedClient && (
                                    <>
                                        <div className="allEdit">
                                        <div className="input-container">
                                            <div className="edit">
                                            <label>거래처 유형: {selectedClient.ClientType}</label>
                                            </div>
                                            <div className="updateinput">
                                                <div className="left">
                                                    <label>거래처 이름:</label>
                                                </div>
                                                <div className="right">
                                                    <input type="text"
                                                           value={selectedClient.ClientName}
                                                           onChange={event => setSelectClient({
                                                           ...selectedClient,
                                                           ClientName: event.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="edit">
                                                <label>대표자명 : {selectedClient.RepresentativeName}</label>
                                            </div>
                                            <div className="updateinput">
                                                <div className="left">
                                                    <label>사업자 번호 :</label>
                                                </div>
                                                <div className="right">
                                                    <input type="text"
                                                           value={selectedClient.BusinessRegistrationNumber}
                                                           onChange={e => setSelectClient( {
                                                               ...selectedClient,
                                                               BusinessRegistrationNumber: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="edit">
                                                <label>사업장 주소 : {selectedClient.ClientAddress}</label>
                                            </div>
                                            <div className="updateinput">
                                                <div className="left">
                                                    <label>사업자 연락처 :</label>
                                                </div>
                                                <div className="right">
                                                    <input type="text"
                                                           value={selectedClient.ClientPhone}
                                                           onChange={(e) => setSelectClient({
                                                               ...selectedClient,
                                                               ClientPhone: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="edit">
                                                <label>담당자명 (직급) : {selectedClient.PersonInCharge}</label>
                                            </div>
                                            <div className="updateinput">
                                                <div className="left">
                                                    <label>담당자 연락처 : </label>
                                                </div>
                                                <div className="right">
                                                    <input type="text"
                                                           value={selectedClient.PersonInChargePhone}
                                                           onChange={(e) => setSelectClient({
                                                               ...selectedClient,
                                                               PersonInChargePhone: e.target.value
                                                           })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="edit">
                                                <label>최초 거래일 : {selectedClient.FirstTradeDate}</label>
                                            </div>
                                            <div className="updateinput">
                                                <div className="left">
                                                    <label>납입/ 납품정보 :</label>
                                                </div>
                                                <div className="right">
                                                    <input type="text"
                                                           value={selectedClient.Payment_Delivery}
                                                           onChange={(e) => setSelectClient({
                                                               ...selectedClient,
                                                               Payment_Delivery: e.target.value
                                                           })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                            <div className="input-container">
                                                <div className="edit">
                                                <label>최종 거래일 : {selectedClient.LastTradeDate}</label>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Dialog>


                </div>
            </div>
        </div>
    );
};



export default OthersCustomerPage;