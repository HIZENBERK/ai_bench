//결산 > 금액 페이지
import React, { useState } from "react";
import Pagination from '../component/Pagination'; // Ensure this path is correct
import '../css/Pagination.css';

const OthersProductPage = () => {
    const data = {
        2021: [
            {
                part: "윗등심",
                January: "₩66,250",
                February: "₩66,250",
                March: "₩66,250",
                April: "₩66,250",
                May: "₩66,250",
                June: "₩66,250",
                July: "₩66,250",
                August: "₩66,250",
                September: "₩66,250",
                October: "₩66,250",
                November: "₩66,250",
                December: "₩66,250",
            },
            {
                part: "아랫등심",
                January: "₩66,250",
                February: "₩66,250",
                March: "₩66,250",
                April: "₩66,250",
                May: "₩66,250",
                June: "₩66,250",
                July: "₩66,250",
                August: "₩66,250",
                September: "₩66,250",
                October: "₩66,250",
                November: "₩66,250",
                December: "₩66,250",
            },
        ],
        2022: [
            {
                part: "부채살",
                January: "₩66,250",
                February: "₩66,250",
                March: "₩66,250",
                April: "₩66,250",
                May: "₩66,250",
                June: "₩66,250",
                July: "₩66,250",
                August: "₩66,250",
                September: "₩66,250",
                October: "₩66,250",
                November: "₩66,250",
                December: "₩66,250",
            },
        ],
        2023: [
            {
                part: "차돌박이",
                January: "₩66,250",
                February: "₩66,250",
                March: "₩66,250",
                April: "₩66,250",
                May: "₩66,250",
                June: "₩66,250",
                July: "₩66,250",
                August: "₩66,250",
                September: "₩66,250",
                October: "₩66,250",
                November: "₩66,250",
                December: "₩66,250",
            },
        ],
        2024: [
            {
                part: "채끝",
                January: "₩66,250",
                February: "₩66,250",
                March: "₩66,250",
                April: "₩66,250",
                May: "₩66,250",
                June: "₩66,250",
                July: "₩66,250",
                August: "₩66,250",
                September: "₩66,250",
                October: "₩66,250",
                November: "₩66,250",
                December: "₩66,250",
            },
        ],
        "total" :[
            {
                total: "합계",
                January: "",
                February: "",
                March: "",
                April: "",
                May: "",
                June: "",
                July: "",
                August: "",
                September: "",
                October: "",
                November: "",
                December: "",
            }
        ]
    };


    const [currentYears, setCurrentYears] = useState(2021);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10); // Default value is 10

    const filteredData = currentYears ? data[currentYears] : [];

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredData.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleYearChange = (e) => {
        setCurrentYears(e.target.value);
    }

    const handleResultsPerPageChange = (event) => {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className="others-product-page-container">
            <div className="procurement-page-container">
                <div className="input-header">
                    <select className="yearselect" onChange={handleYearChange} value={currentYears}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>

                    <div className="resultsPerPage">
                        <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수: </label>
                        <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>

                {currentYears && (
                    <table className="table-money">
                        <thead>
                        <tr>
                            <th colSpan="13">{currentYears} 원료용 평균 구매 단가표</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>1월</th>
                            <th>2월</th>
                            <th>3월</th>
                            <th>4월</th>
                            <th>5월</th>
                            <th>6월</th>
                            <th>7월</th>
                            <th>8월</th>
                            <th>9월</th>
                            <th>10월</th>
                            <th>11월</th>
                            <th>12월</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.part}</td>
                                <td>{result.January}</td>
                                <td>{result.February}</td>
                                <td>{result.March}</td>
                                <td>{result.April}</td>
                                <td>{result.May}</td>
                                <td>{result.June}</td>
                                <td>{result.July}</td>
                                <td>{result.August}</td>
                                <td>{result.September}</td>
                                <td>{result.October}</td>
                                <td>{result.November}</td>
                                <td>{result.December}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredData.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
                <div>
                </div>
            </div>
        </div>
    );
};

export default OthersProductPage;
