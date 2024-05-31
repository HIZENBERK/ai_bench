import React, { useState } from "react";

const OthersAddbusinesspartnerPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // 여기서 실제 검색 로직을 구현합니다.
        // 이 예제에서는 가상의 데이터를 사용합니다.
        const results = [
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

                
            }


            
        ];
        setSearchResults(results);
    };

    return (
        <div className="procurement-page-container">
            <h2>거래처 관리 페이지</h2>
            <div className="input-container">
                <label htmlFor="partnerType">유형</label>
                <input type="text" id="partnerType"/>
                <label htmlFor="partnerName">거래처명</label>
                <div className="partner-search-container">
                    <input type="text" id="partnerName"/>
                    <button onClick={handleSearch}>검색</button>
                </div>
            </div>
            {searchResults.length > 0 && (
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
                        {searchResults.map((result, index) => (
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
        </div>
    );
};

export default OthersAddbusinesspartnerPage;
