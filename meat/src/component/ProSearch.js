import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Pagination.css';

const ProSearch = ({ setProcessingResults, setFilteredResults, setIncomingResults, setRegisterResult }) => {
    const [TextForSearch, setTextForSearch] = useState('');
    const [TextForSearch1, setTextForSearch1] = useState('');
    const [TextForSearch2, setTextForSearch2] = useState('');
    const [TextForSearch3, setTextForSearch3] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    const [searchResults3, setSearchResults3] = useState([]);
    const [orderNumbers, setOrderNumbers] = useState([]);
    const [ProcessingResult, setProcessingResult] = useState([]);
    const [registerResults, setRegisterResults] = useState([]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/product/');
            console.log(response.data);
            setSearchResults(response.data); // 초기 데이터 설정
            setProcessingResult(response.data);
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

    const fetchSearchResults2 = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/register/');
            console.log(response.data);
            setSearchResults3(response.data);
            setRegisterResults(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러 :', error);
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

    const handleSearchOption = (event) => {
        setSearchOption(event.target.value);
    };

    // 2차 가공 검색
    const handleSearch = () => {
        const lowerCasedFilter = TextForSearch.toLowerCase();
        const filteredData = ProcessingResult.filter(item => {
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

    // 주문등록 검색
    const handleSearch7 = () => {
        const lowerCasedFilter = TextForSearch3.toLowerCase();
        const RegisterResults = registerResults.filter(item => {
            switch (SearchOption) {
                case '등록일':
                    return item.PurchaseDate.toLowerCase().includes(lowerCasedFilter);
                case '구분':
                    return item.PurchaseStep.toLowerCase().includes(lowerCasedFilter);
                case '주문자':
                    return item.Purchaser.toLowerCase().includes(lowerCasedFilter);
                case '주소':
                    return item.PurchaseAddress.toLowerCase().includes(lowerCasedFilter);
                case '연락처':
                    return item.PurchasePhone.toLowerCase().includes(lowerCasedFilter);
                case '주문번호':
                    return item.PurchaseNo.toLowerCase().includes(lowerCasedFilter);
                case '기프트래핑':
                    return item.Wrapping.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setRegisterResult(RegisterResults);
    }

    const handleSearch8 = (searchValue3) => {
        setTextForSearch3(searchValue3);
        const lowerCasedFilter = searchValue3.toLowerCase();
        const filterResult = searchResults3.filter(item => {
            switch (SearchOption) {
                case '등록일':
                    return item.PurchaseDate.toLowerCase().includes(lowerCasedFilter);
                case '구분':
                    return item.PurchaseStep.toLowerCase().includes(lowerCasedFilter);
                case '주문자':
                    return item.Purchaser.toLowerCase().includes(lowerCasedFilter);
                case '주소':
                    return item.PurchaseAddress.toLowerCase().includes(lowerCasedFilter);
                case '연락처':
                    return item.PurchasePhone.toLowerCase().includes(lowerCasedFilter);
                case '주문번호':
                    return item.PurchaseNo.toLowerCase().includes(lowerCasedFilter);
                case '기프트래핑':
                    return item.Wrapping.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setRegisterResult(filterResult)
    }

    useEffect(() => {
        fetchSearchResults();
    }, []);

    useEffect(() => {
        fetchSearchResults1();
    }, []);

    useEffect(() => {
        fetchInitialData();
    }, []);

    useEffect(() => {
        fetchSearchResults2();
    }, []);


    return (
        <div className="input-container">

            {/* 2차 가공 검색 */}
            {setProcessingResults != null ?
                <div className="selectInput">
                    <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'발주일시'}>발주일시</option>
                        <option value={'입고일시'}>입고일시</option>
                        <option value={'거래처'}>거래처</option>
                        <option value={'부위'}>부위</option>
                        <option value={'작업일'}>작업일</option>
                        <option value={'원료번호'}>원료번호</option>
                        <option value={'상태'}>상태</option>
                    </select>
                    <div className="textInput">
                        <input type="text" id="TextForSearch" value={TextForSearch}
                               onChange={(e) => handleSearch2(e.target.value)}/>
                        <button onClick={handleSearch}>조회</button>
                    </div>
                </div>
                : null}

            {/* 발주 검색 */}
            {setFilteredResults != null ?
                <div className="selectInput">
                    <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'발주일시'}>발주일시</option>
                        <option value={'입고예정일'}>입고예정일</option>
                        <option value={'거래처'}>거래처</option>
                        <option value={'부위'}>부위</option>
                        <option value={'작업일'}>작업일</option>
                        <option value={'발주번호'}>발주번호</option>
                        <option value={'상태'}>상태</option>
                    </select>
                    <div className="textInput">
                        <input type="text" id="TextForSearch1" value={TextForSearch1}
                               onChange={(e) => handleSearch4(e.target.value)}/>
                        <button onClick={handleSearch3}>조회</button>
                    </div>
                </div>
                : null}

            {/*입고 검색*/}
            {setIncomingResults != null ?
                <div className="selectInput">
                    <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'발주일시'}>발주일시</option>
                        <option value={'입고예정일'}>입고예정일</option>
                        <option value={'거래처'}>거래처</option>
                        <option value={'입고번호'}>입고번호</option>
                    </select>
                    <div className="textInput">
                        <input type="text" id="TextForSearch2" value={TextForSearch2}
                               onChange={(e) => handleSearch6(e.target.value)}/>
                        <button onClick={handleSearch5}>조회</button>
                    </div>
                </div>
                : null}

            {/*주문등록 검색*/}
            {setRegisterResult != null ?
                <div className="selectInput">
                    <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                        <option value={'등록일'}>등록일</option>
                        <option value={'구분'}>구분</option>
                        <option value={'주문자'}>주문자</option>
                        <option value={'주소'}>주소</option>
                        <option value={'연락처'}>연락처</option>
                        <option value={'주문번호'}>주문번호</option>
                        <option value={'기프트 래핑'}>기프트 래핑</option>
                    </select>
                    <div className="textInput">
                        <input type="text" id="TextForSearch3" value={TextForSearch3}
                               onChange={(e) => handleSearch8(e.target.value)}/>
                        <button onClick={handleSearch7}>조회</button>
                    </div>
                </div>
            : null}
        </div>
    );
}

export default ProSearch;
