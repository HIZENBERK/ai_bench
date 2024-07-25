//매입 명세
import React, { useState } from 'react';
import Pagination from '../component/Pagination'; // Make sure the path is correct
import '../css/Pagination.css'; // Ensure this path is correct

const SettlementSalesPage = () => {
    const data = {
        2021: [
            {
                part: "윗등심",
                January: "59.9",
                February: "48.5",
                March: "48.5",
                April: "39.8",
                May: "39.8",
                June: "39.8",
                July: "39.8",
                August: "39.8",
                September: "39.8",
                October: "39.8",
                November: "39.8",
                December: "39.8",
            },
            {
                part: "아랫등심",
                January: "39.8",
                February: "31.6",
                March: "31.6",
                April: "20.8",
                May: "20.8",
                June: "20.8",
                July: "20.8",
                August: "20.8",
                September: "20.8",
                October: "20.8",
                November: "20.8",
                December: "20.8",
            },
            {
                part: "부챗살",
                January: "20.8",
                February: "15.1",
                March: "15.1",
                April: "28.1",
                May: "28.1",
                June: "28.1",
                July: "28.1",
                August: "28.1",
                September: "28.1",
                October: "28.1",
                November: "28.1",
                December: "28.1",
            }
        ],
        2022: [
            {
                part: "부챗살",
                January: "59.9",
                February: "48.5",
                March: "48.5",
                April: "39.8",
                May: "39.8",
                June: "39.8",
                July: "39.8",
                August: "39.8",
                September: "39.8",
                October: "39.8",
                November: "39.8",
                December: "39.8",
            },
            {
                part: "아랫등심",
                January: "39.8",
                February: "31.6",
                March: "31.6",
                April: "20.8",
                May: "20.8",
                June: "20.8",
                July: "20.8",
                August: "20.8",
                September: "20.8",
                October: "20.8",
                November: "20.8",
                December: "20.8",
            }
        ],
        2023: [
            {
                part: "꽃등심",
                January: "59.9",
                February: "48.5",
                March: "48.5",
                April: "39.8",
                May: "39.8",
                June: "39.8",
                July: "39.8",
                August: "39.8",
                September: "39.8",
                October: "39.8",
                November: "39.8",
                December: "39.8",
            }
        ],
        2024: [
            {
                part: "차돌박이",
                January: "59.9",
                February: "48.5",
                March: "48.5",
                April: "39.8",
                May: "39.8",
                June: "39.8",
                July: "39.8",
                August: "39.8",
                September: "39.8",
                October: "39.8",
                November: "39.8",
                December: "39.8",
            }
        ],

    }

    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [currentYears, setCurrentYears] = useState(2021);

    const filteredData = currentYears ? data[currentYears] : null;

    const handleYearChange = (e) => {
        setCurrentYears(parseInt(e.target.value));
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredData.slice(indexOfFirstResult, indexOfLastResult);


    const allTotal = (data) => {
        const total = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };

        data.forEach(item => {
            total.January += parseFloat(item.January);
            total.February += parseFloat(item.February);
            total.March += parseFloat(item.March);
            total.April += parseFloat(item.April);
            total.May += parseFloat(item.May);
            total.June += parseFloat(item.June);
            total.July += parseFloat(item.July);
            total.August += parseFloat(item.August);
            total.September += parseFloat(item.September);
            total.October += parseFloat(item.October);
            total.November += parseFloat(item.November);
            total.December += parseFloat(item.December);
        });

        return total;
    };

    const monthTotal = allTotal(filteredData);

    return (
        <div>
            <div className="processing-page-container">
                <h2>매입명세 페이지</h2>
                {/* Search field */}
                <div className="input-container">
                    <select className="yearselect" onChange={handleYearChange} value={currentYears}>
                        <option value="2021">2021년</option>
                        <option value="2022">2022년</option>
                        <option value="2023">2023년</option>
                        <option value="2024">2024년</option>
                    </select>
                </div>
                <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <table className="table-money">
                    <thead>
                        <tr>
                            <th colSpan="13">{currentYears}년도 부위별 총 매입 중량 </th>
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
                        {currentResults.map(item => (
                            <tr key={item.id}>
                                <td>{item.part}</td>
                                <td>{item.January}</td>
                                <td>{item.February}</td>
                                <td>{item.March}</td>
                                <td>{item.April}</td>
                                <td>{item.May}</td>
                                <td>{item.June}</td>
                                <td>{item.July}</td>
                                <td>{item.August}</td>
                                <td>{item.September}</td>
                                <td>{item.October}</td>
                                <td>{item.November}</td>
                                <td>{item.December}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody>
                        <tr>
                            <th>총 중량</th>
                            <th>{monthTotal.January.toFixed(1)}</th>
                            <th>{monthTotal.February.toFixed(1)}</th>
                            <th>{monthTotal.March.toFixed(1)}</th>
                            <th>{monthTotal.April.toFixed(1)}</th>
                            <th>{monthTotal.May.toFixed(1)}</th>
                            <th>{monthTotal.June.toFixed(1)}</th>
                            <th>{monthTotal.July.toFixed(1)}</th>
                            <th>{monthTotal.August.toFixed(1)}</th>
                            <th>{monthTotal.September.toFixed(1)}</th>
                            <th>{monthTotal.October.toFixed(1)}</th>
                            <th>{monthTotal.November.toFixed(1)}</th>
                            <th>{monthTotal.December.toFixed(1)}</th>
                        </tr>
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredData.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default SettlementSalesPage;
