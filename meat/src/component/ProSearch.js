import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Pagination.css';

const ProSearch = (setProcessingResults) => {
    const [TextForSearch, setTextForSearch] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

    // useEffect(() => {
    //     const fetchSearchResults = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8000/api/product/');
    //             console.log(response.data);
    //             setSearchResults(response.data); // 초기 데이터 설정
    //             setProcessingResults(response.data);
    //         } catch (error) {
    //             console.error('데이터 가져오기 에러:', error);
    //         }
    //     };
    // }, [setProcessingResults]);

    const handleSearchOption = (event) => {
        setSearchOption(event.target.value);
    }

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
                case '제품번호':
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
        console.log(searchValue);
        setTextForSearch(searchValue);
        const lowerCasedFilter = searchValue.toLowerCase();
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
                case '제품번호':
                    return item.ProductNo.toLowerCase().includes(lowerCasedFilter);
                case '상태':
                    return item.ProductSituation.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setProcessingResults(filteredData);
    };

    useEffect(() => {
        fetchSearchResults();
    }, [setProcessingResults]);


    return (
        <div className="input-container">
            <select id="SearchOption" value={SearchOption} onChange={handleSearchOption}>
                <option value={'발주일시'}>발주일시</option>
                <option value={'입고일시'}>입고일시</option>
                <option value={'거래처'}>거래처</option>
                <option value={'부위'}>부위</option>
                <option value={'작업일'}>작업일</option>
                <option value={'제품번호'}>제품번호</option>
                <option value={'상태'}>상태</option>
            </select>
            <input type="text" id="TextForSearch" value={TextForSearch}
                   onChange={(e) => handleSearch2(e.target.value)}/>
            <button onClick={handleSearch}>조회</button>
        </div>
    );
}

export default ProSearch;