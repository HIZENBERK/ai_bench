import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Pagination.css';

const ProSearch = ({ setProcessingResults, setFilteredResults, setIncomingResults }) => {
    const [TextForSearch, setTextForSearch] = useState('');
    const [TextForSearch1, setTextForSearch1] = useState('');
    const [TextForSearch2, setTextForSearch2] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    const [orderNumbers, setOrderNumbers] = useState([]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/product/');
            console.log(response.data);
            setSearchResults(response.data); // 초기 데이터 설정
            setProcessingResults(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const fetchSearchResults1 = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/order/');
            console.log(response.data);
            setSearchResults1(response.data); // 초기 데이터 설정
            setFilteredResults(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const fetchInitialData = async () => {
        try {
            const [orderResponse, stockResponse] = await Promise.all([
                await axios.get('http://localhost:8000/api/order/'),
                await axios.get('http://localhost:8000/api/stock/')
            ])
            setOrderNumbers(orderResponse.data);
            const combinedResults = mergeData(stockResponse.data, orderResponse.data);
            setSearchResults2(combinedResults);
            setIncomingResults(combinedResults);
        } catch (error) {
            console.error('데이터가져오기 에러', error)
        }
    }

    const mergeData = (stockData, orderData) => {
        return stockData.map(stockItem => {
            const correspondingOrder = orderData.find(orderItem => orderItem.OrderNo === stockItem.OrderNo);
            return {
                ...stockItem,
                order: correspondingOrder || {}
            };
        });
    };

    // const fetchInitialData = async () => {
    //     try {
    //         const [orderResponse, stockResponse] = await Promise.all([
    //             axios.get('http://localhost:8000/api/order/'),
    //             axios.get('http://localhost:8000/api/stock/')
    //         ]);
    //         setOrderNumbers(orderResponse.data);
    //         const combinedResults = mergeData(stockResponse.data, orderResponse.data);
    //         setSearchResults2(combinedResults);
    //         setIncomingResults(combinedResults);
    //     } catch (error) {
    //
    //     }
    // };

    const handleSearchOption = (event) => {
        setSearchOption(event.target.value);
    };

    // 2차 가공 검색
    const handleSearch = () => {
        const lowerCasedFilter = TextForSearch.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고일시':
                    return item.StockDate.toLowerCase().includes(lowerCasedFilter);
                case '작업일':
                    return item.ProductDate.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                case '원료번호':
                    return item.ProductNo.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.ProductSituation.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setProcessingResults(filteredData);
    };

    const handleSearch2 = (searchValue) => {
        setTextForSearch(searchValue);
        const lowerCasedFilter = searchValue.toLowerCase();
        const filteredData = searchResults.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.StockDate.toLowerCase().includes(lowerCasedFilter);
                case '작업일':
                    return item.ProductDate.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                case '원료번호':
                    return item.ProductNo.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.ProductSituation.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setProcessingResults(filteredData);
    };

    // 발주 검색
    const handleSearch3 = () => {
        const lowerCasedFilter = TextForSearch1.toLowerCase();
        const filteredData = searchResults1.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.ETA.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.OrderSituation.toLowerCase().includes(lowerCasedFilter);
                case '발주번호':
                    return item.OrderNo.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setFilteredResults(filteredData);
    };

    const handleSearch4 = (searchValue1) => {
        setTextForSearch1(searchValue1);
        const lowerCasedFilter = searchValue1.toLowerCase();
        const filteredData = searchResults1.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.OrderDate.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.ETA.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.Client.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.OrderSituation.toLowerCase().includes(lowerCasedFilter);
                case '발주번호':
                    return item.OrderNo.toLowerCase().includes(lowerCasedFilter);
                case '부위':
                    return item.Part.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setFilteredResults(filteredData);
    };

    //입고 검색
    const handleSearch5 = () => {
        const lowerCasedFilter = TextForSearch2.toLowerCase();
        const combinedResults = searchResults2.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.order.OrderDate?.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.order.ETA?.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.order.Client?.toLowerCase().includes(lowerCasedFilter);
                case '입고번호':
                    return item.OrderNo?.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setIncomingResults(combinedResults);
    };

    const handleSearch6 = (searchValue2) => {
        setTextForSearch2(searchValue2);
        const lowerCasedFilter = searchValue2.toLowerCase();
        const combinedResults = searchResults2.filter(item => {
            switch (SearchOption) {
                case '발주일시':
                    return item.order.OrderDate?.toLowerCase().includes(lowerCasedFilter);
                case '입고예정일':
                    return item.order.ETA?.toLowerCase().includes(lowerCasedFilter);
                case '거래처':
                    return item.order.Client?.toLowerCase().includes(lowerCasedFilter);
                case '입고번호':
                    return item.OrderNo?.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setIncomingResults(combinedResults);
    };

    useEffect(() => {
        fetchSearchResults();
    }, []);

    useEffect(() => {
        fetchSearchResults1();
    }, []);

    useEffect(() => {
        fetchInitialData();
    }, []);




    return (
        <div className="input-container">
            {setProcessingResults != null ?
                <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                    <option value={'발주일시'}>발주일시</option>
                    <option value={'입고일시'}>입고일시</option>
                    <option value={'거래처'}>거래처</option>
                    <option value={'부위'}>부위</option>
                    <option value={'작업일'}>작업일</option>
                    <option value={'원료번호'}>원료번호</option>
                    <option value={'상태'}>상태</option>
                </select>
            : null}

            {setFilteredResults != null ?
                <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                    <option value={'발주일시'}>발주일시</option>
                    <option value={'입고예정일'}>입고예정일</option>
                    <option value={'거래처'}>거래처</option>
                    <option value={'부위'}>부위</option>
                    <option value={'작업일'}>작업일</option>
                    <option value={'발주번호'}>발주번호</option>
                    <option value={'상태'}>상태</option>
                </select>
            : null}

            {setIncomingResults != null ?
                <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                    <option value={'발주일시'}>발주일시</option>
                    <option value={'입고예정일'}>입고예정일</option>
                    <option value={'거래처'}>거래처</option>
                    <option value={'입고번호'}>입고번호</option>
                </select>
            : null}

            {/* 2차 가공 검색 */}
            {setProcessingResults != null ?
                <div>
                    <input type="text" id="TextForSearch" value={TextForSearch}
                           onChange={(e) => handleSearch2(e.target.value)}/>
                    <button onClick={handleSearch}>조회</button>
                </div>
                : null}

            {/* 발주 검색 */}
            {setFilteredResults != null ?
                <div>
                    <input type="text" id="TextForSearch1" value={TextForSearch1}
                           onChange={(e) => handleSearch4(e.target.value)} />
                    <button onClick={handleSearch3}>조회</button>
                </div>
            : null}

            {/*입고 검색*/}
            {setIncomingResults != null ?
                <div>
                    <input type="text" id="TextForSearch2" value={TextForSearch2}
                           onChange={(e) => handleSearch6(e.target.value)} />
                    <button onClick={handleSearch5}>조회</button>
                </div>
                : null}

        </div>
    );
}

export default ProSearch;
