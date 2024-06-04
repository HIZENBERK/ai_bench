import React, { useState, useEffect } from "react";

const DeliveryaccidentPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = [
            {
                no: 1,
                trackingNumber: "ABC123",
                recipient: "John Doe",
                totalFreight: "$50",
                productPrice: "$100",
                compensationAmount: "$20",
                registrationDate: "2024-06-01",
                dispatchDate: "2024-06-03",
                actualDeliveryDate: "2024-06-05",
                depositAmount: "$80",
                compensationDate: "2024-06-10",
                edit: "Edit"
            },
            {
                no: 2,
                trackingNumber: "XYZ456",
                recipient: "Jane Smith",
                totalFreight: "$70",
                productPrice: "$120",
                compensationAmount: "$10",
                registrationDate: "2024-06-02",
                dispatchDate: "2024-06-04",
                actualDeliveryDate: "2024-06-06",
                depositAmount: "$90",
                compensationDate: "2024-06-12",
                edit: "Edit"
            }
        ];
        setSearchResults(results);
    }, []);

    return (
        <div className="procurement-page-container">
            <h2>베송 사고 페이지</h2>
            <button>한페이지에 볼 리스트 개수</button>
            <table className="results-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>운송장번호</th>
                        <th>받는 분</th>
                        <th>총운임</th>
                        <th>상품 가격</th>
                        <th>변상요청금액</th>
                        <th>등록일자</th>
                        <th>발송일자</th>
                        <th>실배송일자</th>
                        <th>입금금액</th>
                        <th>변상일자</th>
                        <th>수정</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.no}</td>
                            <td>{result.trackingNumber}</td>
                            <td>{result.recipient}</td>
                            <td>{result.totalFreight}</td>
                            <td>{result.productPrice}</td>
                            <td>{result.compensationAmount}</td>
                            <td>{result.registrationDate}</td>
                            <td>{result.dispatchDate}</td>
                            <td>{result.actualDeliveryDate}</td>
                            <td>{result.depositAmount}</td>
                            <td>{result.compensationDate}</td>
                            <td>{result.edit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryaccidentPage;
