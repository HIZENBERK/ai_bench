//재고 현황 페이지
import React, {useEffect, useState} from 'react';
import Pagination from '../component/Pagination';
import '../css/ProductInventoryPage.css';
import '../component/WebcamBarcodeScanner';
import WebcamBarcodeScanner from "../component/WebcamBarcodeScanner";

const ProductInventoryPage = () => {
    const [inventoryResults] = useState([
        {
            no: 1,
            registrationDate: "2024-06-01",
            productNumber: "PRD001",
            material: "Plastic",
            trackingNumber: "TRK001",
            productName: "Toy Car",
            worker: "John Doe",
            salesDeadline: "2024-12-01",
            consumptionDeadline: "2025-01-01",
            remainingQuantity: 100,
            salesPrice: 200,
            quantityOrPerformance: 90,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
        {
            no: 2,
            registrationDate: "2024-06-02",
            productNumber: "PRD002",
            material: "Metal",
            trackingNumber: "TRK002",
            productName: "Bike",
            worker: "Jane Smith",
            salesDeadline: "2024-11-01",
            consumptionDeadline: "2025-02-01",
            remainingQuantity: 50,
            salesPrice: 150,
            quantityOrPerformance: 45,
            edit: <button>Edit</button>
        },
    ]);

    const [filteredResults, setFilteredResults] = useState(inventoryResults);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

    const handleEditClick = (index) => {
        console.log(`Edit button clicked for index ${index}`);
        // 여기서 원하는 편집 동작을 추가할 수 있습니다.
    };

    // const handleScanComplete = (scannedData) => {
    //     const {productNumber} = scannedData;
    //     const filtered = inventoryResults.filter(result =>
    //     result.productNumber === productNumber
    //     );
    //     setFilteredResults(filtered);
    // };

    const handleScanComplete = (scannedData) => {
        const {productNumber, salesDeadline, consumptionDeadline, worker} = scannedData;
        const filtered = inventoryResults.filter(result =>
            result.productNumber === productNumber &&
            result.salesDeadline === salesDeadline &&
            result.consumptionDeadline === consumptionDeadline &&
            result.worker === worker
        );
        setFilteredResults(filtered);
    };


    useEffect(() => {
        setFilteredResults(inventoryResults);
    }, [inventoryResults]);

    return (
        <div className="product-inventory-page-container">
            <h2>재고 현황 페이지</h2>
            <div>
            <WebcamBarcodeScanner onScanComplete={handleScanComplete}/>
            </div>
            <div className="dropdown-container">
                <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>등록일(요일)</th>
                            <th>제품번호</th>
                            <th>부자재</th>
                            <th>이력번호</th>
                            <th>제품명</th>
                            <th>작업자</th>
                            <th>판매기한</th>
                            <th>소비기한</th>
                            <th>잔여수량</th>
                            <th>판매가격 (부가세)</th>
                            <th>수량/실적</th>
                            <th>편집</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.no}</td>
                                <td>{result.registrationDate}</td>
                                <td>{result.productNumber}</td>
                                <td>{result.material}</td>
                                <td>{result.trackingNumber}</td>
                                <td>{result.productName}</td>
                                <td>{result.worker}</td>
                                <td>{result.salesDeadline}</td>
                                <td>{result.consumptionDeadline}</td>
                                <td>{result.remainingQuantity}</td>
                                <td>{result.salesPrice}</td>
                                <td>{result.quantityOrPerformance}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEditClick(index)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(inventoryResults.length / resultsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductInventoryPage;