import React, { useState } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // 경로가 정확한지 확인하세요

const OthersAddbusinesspartnerPage = () => {
    const [othersAddbusinesspartnerResults] = useState([
            {
                no: 1,
                type: "유형1",
                representativeName: "홍길동",
                businessNumber: "123-45-67890",
                address: "서울특별시 강남구",
                contact: "010-1234-5678",
                managerName: "김철수(과장)",
                managerContact: "010-8765-4321",
                firstTransactionDate: "2020-01-01",
                lastTransactionDate: "2021-12-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 2,
                type: "유형1",
                representativeName: "홍길동",
                businessNumber: "123-45-67890",
                address: "서울특별시 강남구",
                contact: "010-1234-5678",
                managerName: "김철수(과장)",
                managerContact: "010-8765-4321",
                firstTransactionDate: "2020-01-01",
                lastTransactionDate: "2021-12-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 3,
                type: "유형2",
                representativeName: "이순신",
                businessNumber: "123-45-67891",
                address: "서울특별시 종로구",
                contact: "010-2345-6789",
                managerName: "박영희(대리)",
                managerContact: "010-9876-5432",
                firstTransactionDate: "2020-02-01",
                lastTransactionDate: "2021-11-30",
                supplyInfo: "일반 납품",
            },
            {
                no: 4,
                type: "유형3",
                representativeName: "장보고",
                businessNumber: "123-45-67892",
                address: "서울특별시 송파구",
                contact: "010-3456-7890",
                managerName: "홍길순(사원)",
                managerContact: "010-6543-2109",
                firstTransactionDate: "2020-03-01",
                lastTransactionDate: "2021-10-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 5,
                type: "유형3",
                representativeName: "신사임당",
                businessNumber: "123-45-67893",
                address: "서울특별시 영등포구",
                contact: "010-4567-8901",
                managerName: "이철수(대리)",
                managerContact: "010-9876-5432",
                firstTransactionDate: "2020-04-01",
                lastTransactionDate: "2021-09-30",
                supplyInfo: "일반 납품",
            },
            {
                no: 6,
                type: "유형4",
                representativeName: "유관순",
                businessNumber: "123-45-67894",
                address: "서울특별시 서초구",
                contact: "010-5678-9012",
                managerName: "정인숙(과장)",
                managerContact: "010-1234-5678",
                firstTransactionDate: "2020-05-01",
                lastTransactionDate: "2021-08-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 7,
                type: "유형5",
                representativeName: "강감찬",
                businessNumber: "123-45-67895",
                address: "서울특별시 중구",
                contact: "010-6789-0123",
                managerName: "이영자(대리)",
                managerContact: "010-3210-9876",
                firstTransactionDate: "2020-06-01",
                lastTransactionDate: "2021-07-31",
                supplyInfo: "일반 납품",
            },
            {
                no: 8,
                type: "유형5",
                representativeName: "을지문덕",
                businessNumber: "123-45-67896",
                address: "서울특별시 강서구",
                contact: "010-7890-1234",
                managerName: "김미영(대리)",
                managerContact: "010-2109-8765",
                firstTransactionDate: "2020-07-01",
                lastTransactionDate: "2021-06-30",
                supplyInfo: "정기 납품",
            },
            {
                no: 9,
                type: "유형6",
                representativeName: "이성계",
                businessNumber: "123-45-67897",
                address: "서울특별시 관악구",
                contact: "010-8901-2345",
                managerName: "박상현(사원)",
                managerContact: "010-1098-7654",
                firstTransactionDate: "2020-08-01",
                lastTransactionDate: "2021-05-31",
                supplyInfo: "일반 납품",
            },
            {
                no: 10,
                type: "유형6",
                representativeName: "김유신",
                businessNumber: "123-45-67898",
                address: "서울특별시 동대문구",
                contact: "010-9012-3456",
                managerName: "이성호(대리)",
                managerContact: "010-9876-5432",
                firstTransactionDate: "2020-09-01",
                lastTransactionDate: "2021-04-30",
                supplyInfo: "정기 납품",
            },
            {
                no: 11,
                type: "유형6",
                representativeName: "김유신",
                businessNumber: "123-45-67898",
                address: "서울특별시 동대문구",
                contact: "010-9012-3456",
                managerName: "이성호(대리)",
                managerContact: "010-9876-5432",
                firstTransactionDate: "2020-09-01",
                lastTransactionDate: "2021-04-30",
                supplyInfo: "정기 납품",
            },
            {
                no: 12,
                type: "유형7",
                representativeName: "이순신",
                businessNumber: "123-45-67900",
                address: "서울특별시 강북구",
                contact: "010-3456-7890",
                managerName: "이서진(대리)",
                managerContact: "010-2109-8765",
                firstTransactionDate: "2020-11-01",
                lastTransactionDate: "2021-09-30",
                supplyInfo: "정기 납품",
            },
            {
                no: 13,
                type: "유형8",
                representativeName: "신사임당",
                businessNumber: "123-45-67901",
                address: "서울특별시 강남구",
                contact: "010-4567-8901",
                managerName: "이지은(과장)",
                managerContact: "010-6543-2109",
                firstTransactionDate: "2020-12-01",
                lastTransactionDate: "2021-08-31",
                supplyInfo: "일반 납품",
            },
            {
                no: 14,
                type: "유형8",
                representativeName: "홍길순",
                businessNumber: "123-45-67902",
                address: "서울특별시 서초구",
                contact: "010-5678-9012",
                managerName: "김미숙(사원)",
                managerContact: "010-0987-6543",
                firstTransactionDate: "2021-01-01",
                lastTransactionDate: "2021-07-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 15,
                type: "유형9",
                representativeName: "장영실",
                businessNumber: "123-45-67903",
                address: "서울특별시 송파구",
                contact: "010-6789-0123",
                managerName: "박지우(대리)",
                managerContact: "010-7654-3210",
                firstTransactionDate: "2021-02-01",
                lastTransactionDate: "2021-06-30",
                supplyInfo: "일반 납품",
            },
            {
                no: 16,
                type: "유형9",
                representativeName: "유관순",
                businessNumber: "123-45-67904",
                address: "서울특별시 강서구",
                contact: "010-7890-1234",
                managerName: "이민수(사원)",
                managerContact: "010-4321-0987",
                firstTransactionDate: "2021-03-01",
                lastTransactionDate: "2021-05-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 17,
                type: "유형10",
                representativeName: "김유신",
                businessNumber: "123-45-67905",
                address: "서울특별시 중랑구",
                contact: "010-8901-2345",
                managerName: "박현우(대리)",
                managerContact: "010-2109-8765",
                firstTransactionDate: "2021-04-01",
                lastTransactionDate: "2021-04-30",
                supplyInfo: "일반 납품",
            },
            {
                no: 18,
                type: "유형10",
                representativeName: "안중근",
                businessNumber: "123-45-67906",
                address: "서울특별시 노원구",
                contact: "010-9012-3456",
                managerName: "이지은(과장)",
                managerContact: "010-0987-6543",
                firstTransactionDate: "2021-05-01",
                lastTransactionDate: "2021-03-31",
                supplyInfo: "정기 납품",
            },
            {
                no: 19,
                type: "유형11",
                representativeName: "강감찬",
                businessNumber: "123-45-67907",
                address: "서울특별시 강북구",
                contact: "010-0123-4567",
                managerName: "김서연(대리)",
                managerContact: "010-7654-3210",
                firstTransactionDate: "2021-06-01",
                lastTransactionDate: "2021-02-28",
                supplyInfo: "일반 납품",
            },
            {
                no: 20,
                type: "유형11",
                representativeName: "을지문덕",
                businessNumber: "123-45-67908",
                address: "서울특별시 성동구",
                contact: "010-3456-7890",
                managerName: "이가영(사원)",
                managerContact: "010-4321-0987",
                firstTransactionDate: "2021-07-01",
                lastTransactionDate: "2021-01-31",
                supplyInfo: "정기 납품",
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [searchResults, setSearchResults] = useState([]); // Define searchResults state

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = othersAddbusinesspartnerResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleSearch = () => {
        // Implement your search logic here
    };

    return (
        <div>
            <div className="procurement-page-container">
                <h2>거래처 추가 페이지</h2>
                <div className="input-container">
                    <label htmlFor="partnerType">유형</label>
                    <input type="text" id="partnerType"/>
                    <label htmlFor="partnerName">거래처명</label>
                    <div className="partner-search-container">
                        <input type="text" id="partnerName"/>
                        <button onClick={handleSearch}>검색</button>
                    </div>
                </div>
            </div>
            <div>
            <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            {currentResults.length > 0 && (
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>거래처 유형</th>
                            <th>대표자 명</th>
                            <th>사업자 번호</th>
                            <th>사업장 주소</th>
                            <th>사업자 연락처</th>
                            <th>담당자명(직급)</th>
                            <th>담당자 연락처</th>
                            <th>최초 거래일</th>
                            <th>최종 거래일</th>
                            <th>납입/ 납품 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.no}</td>
                                <td>{result.type}</td>
                                <td>{result.representativeName}</td>
                                <td>{result.businessNumber}</td>
                                <td>{result.address}</td>
                                <td>{result.contact}</td>
                                <td>{result.managerName}</td>
                                <td>{result.managerContact}</td>
                                <td>{result.firstTransactionDate}</td>
                                <td>{result.lastTransactionDate}</td>
                                <td>{result.supplyInfo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
             <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(othersAddbusinesspartnerResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
        
    );
};

export default OthersAddbusinesspartnerPage;