import React, { useState, useEffect } from "react";
import Pagination from '../component/Pagination';
import '../css/Pagination.css'; // Make sure the path is correct

const DeliveryaccidentPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

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
            },
            {
                no: 3,
                trackingNumber: "DEF789",
                recipient: "Michael Brown",
                totalFreight: "$60",
                productPrice: "$110",
                compensationAmount: "$15",
                registrationDate: "2024-06-03",
                dispatchDate: "2024-06-05",
                actualDeliveryDate: "2024-06-07",
                depositAmount: "$85",
                compensationDate: "2024-06-11",
                edit: "Edit"
            },
            {
                no: 4,
                trackingNumber: "GHI012",
                recipient: "Emily Johnson",
                totalFreight: "$80",
                productPrice: "$130",
                compensationAmount: "$5",
                registrationDate: "2024-06-04",
                dispatchDate: "2024-06-06",
                actualDeliveryDate: "2024-06-08",
                depositAmount: "$95",
                compensationDate: "2024-06-13",
                edit: "Edit"
            },
            {
                no: 5,
                trackingNumber: "JKL345",
                recipient: "William Davis",
                totalFreight: "$55",
                productPrice: "$105",
                compensationAmount: "$18",
                registrationDate: "2024-06-05",
                dispatchDate: "2024-06-07",
                actualDeliveryDate: "2024-06-09",
                depositAmount: "$82",
                compensationDate: "2024-06-14",
                edit: "Edit"
            },
            {
                no: 6,
                trackingNumber: "MNO678",
                recipient: "Olivia Wilson",
                totalFreight: "$75",
                productPrice: "$125",
                compensationAmount: "$8",
                registrationDate: "2024-06-06",
                dispatchDate: "2024-06-08",
                actualDeliveryDate: "2024-06-10",
                depositAmount: "$88",
                compensationDate: "2024-06-15",
                edit: "Edit"
            },
            {
                no: 7,
                trackingNumber: "PQR901",
                recipient: "James Martinez",
                totalFreight: "$65",
                productPrice: "$115",
                compensationAmount: "$12",
                registrationDate: "2024-06-07",
                dispatchDate: "2024-06-09",
                actualDeliveryDate: "2024-06-11",
                depositAmount: "$87",
                compensationDate: "2024-06-16",
                edit: "Edit"
            },
            {
                no: 8,
                trackingNumber: "STU234",
                recipient: "Sophia Anderson",
                totalFreight: "$85",
                productPrice: "$135",
                compensationAmount: "$3",
                registrationDate: "2024-06-08",
                dispatchDate: "2024-06-10",
                actualDeliveryDate: "2024-06-12",
                depositAmount: "$97",
                compensationDate: "2024-06-17",
                edit: "Edit"
            },
            {
                no: 9,
                trackingNumber: "VWX567",
                recipient: "Logan Garcia",
                totalFreight: "$58",
                productPrice: "$108",
                compensationAmount: "$17",
                registrationDate: "2024-06-09",
                dispatchDate: "2024-06-11",
                actualDeliveryDate: "2024-06-13",
                depositAmount: "$83",
                compensationDate: "2024-06-18",
                edit: "Edit"
            },
            {
                no: 10,
                trackingNumber: "YZA890",
                recipient: "Ava Martinez",
                totalFreight: "$78",
                productPrice: "$128",
                compensationAmount: "$7",
                registrationDate: "2024-06-10",
                dispatchDate: "2024-06-12",
                actualDeliveryDate: "2024-06-14",
                depositAmount: "$93",
                compensationDate: "2024-06-19",
                edit: "Edit"
            },
            {
                no: 11,
                trackingNumber: "BCD123",
                recipient: "Ethan Thompson",
                totalFreight: "$62",
                productPrice: "$112",
                compensationAmount: "$13",
                registrationDate: "2024-06-11",
                dispatchDate: "2024-06-13",
                actualDeliveryDate: "2024-06-15",
                depositAmount: "$86",
                compensationDate: "2024-06-20",
                edit: "Edit"
            },
            {
                no: 12,
                trackingNumber: "EFG456",
                recipient: "Isabella Clark",
                totalFreight: "$82",
                productPrice: "$132",
                compensationAmount: "$2",
                registrationDate: "2024-06-12",
                dispatchDate: "2024-06-14",
                actualDeliveryDate: "2024-06-16",
                depositAmount: "$96",
                compensationDate: "2024-06-21",
                edit: "Edit"
            },
            {
                no: 13,
                trackingNumber: "HIJ789",
                recipient: "Mason Baker",
                totalFreight: "$56",
                productPrice: "$106",
                compensationAmount: "$19",
                registrationDate: "2024-06-13",
                dispatchDate: "2024-06-15",
                actualDeliveryDate: "2024-06-17",
                depositAmount: "$81",
                compensationDate: "2024-06-22",
                edit: "Edit"
            },
            {
                no: 14,
                trackingNumber: "KLM012",
                recipient: "Amelia Green",
                totalFreight: "$76",
                productPrice: "$126",
                compensationAmount: "$9",
                registrationDate: "2024-06-14",
                dispatchDate: "2024-06-16",
                actualDeliveryDate: "2024-06-18",
                depositAmount: "$89",
                compensationDate: "2024-06-23",
                edit: "Edit"
            },
            {
                no: 15,
                trackingNumber: "NOP345",
                recipient: "Lucas Hill",
                totalFreight: "$68",
                productPrice: "$118",
                compensationAmount: "$11",
                registrationDate: "2024-06-15",
                dispatchDate: "2024-06-17",
                actualDeliveryDate: "2024-06-19",
                depositAmount: "$84",
                compensationDate: "2024-06-24",
                edit: "Edit"
            },
            {
                no: 16,
                trackingNumber: "QRS678",
                recipient: "Ella Young",
                totalFreight: "$88",
                productPrice: "$138",
                compensationAmount: "$1",
                registrationDate: "2024-06-16",
                dispatchDate: "2024-06-18",
                actualDeliveryDate: "2024-06-20",
                depositAmount: "$98",
                compensationDate: "2024-06-25",
                edit: "Edit"
            },
            {
                no: 17,
                trackingNumber: "TUV901",
                recipient: "Jackson Lopez",
                totalFreight: "$59",
                productPrice: "$109",
                compensationAmount: "$16",
                registrationDate: "2024-06-17",
                dispatchDate: "2024-06-19",
                actualDeliveryDate: "2024-06-21",
                depositAmount: "$85",
                compensationDate: "2024-06-26",
                edit: "Edit"
            },
            {
                no: 18,
                trackingNumber: "WXY234",
                recipient: "Scarlett King",
                totalFreight: "$79",
                productPrice: "$129",
                compensationAmount: "$6",
                registrationDate: "2024-06-18",
                dispatchDate: "2024-06-20",
                actualDeliveryDate: "2024-06-22",
                depositAmount: "$94",
                compensationDate: "2024-06-27",
                edit: "Edit"
            },
            {
                no: 19,
                trackingNumber: "ZAB567",
                recipient: "Benjamin Wright",
                totalFreight: "$64",
                productPrice: "$114",
                compensationAmount: "$14",
                registrationDate: "2024-06-19",
                dispatchDate: "2024-06-21",
                actualDeliveryDate: "2024-06-23",
                depositAmount: "$87",
                compensationDate: "2024-06-28",
                edit: "Edit"
            },
            {
                no: 20,
                trackingNumber: "BCD890",
                recipient: "Grace Scott",
                totalFreight: "$77",
                productPrice: "$127",
                compensationAmount: "$4",
                registrationDate: "2024-06-20",
                dispatchDate: "2024-06-22",
                actualDeliveryDate: "2024-06-24",
                depositAmount: "$92",
                compensationDate: "2024-06-29",
                edit: "Edit"
            },
        ];
        setSearchResults(results);
    }, []);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    // eslint-disable-next-line
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className="procurement-page-container">
            <h2>베송 사고 페이지</h2>
            <div className="results-per-page">
                <label htmlFor="resultsPerPage">한페이지에 볼 리스트 개수:</label>
                <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                </select>
            </div>
            <table className="table-container">
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
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(searchResults.length / resultsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default DeliveryaccidentPage;
