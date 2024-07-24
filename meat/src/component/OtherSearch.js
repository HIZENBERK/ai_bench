import React, { useState, useEffect } from "react";
import Pagination from '../component/Pagination';
import axios from "axios";

const OtherSearch = ({setCustomerSearch}) => {
    const [ClientType, setClientType] = useState('');
    const [ClientName, setClientName] = useState('');
    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Client/');
            console.log(response.data);
            setData(response.data);
            setCustomerSearch(response.data);
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const handleSearch1 = () => {
        const lowerCasedClientType = ClientType.toLowerCase();
        const lowerCasedClientName = ClientName.toLowerCase();
        const filteredData = data.filter(item => {
            return (
                (!ClientType || item.ClientType.toLowerCase().includes(lowerCasedClientType)) &&
                (!ClientName || item.ClientName.toLowerCase().includes(lowerCasedClientName))
            );
        });
        setCustomerSearch(filteredData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="input-container">
                <label htmlFor="ClientType">유형</label>
                    <input
                        type="text"
                        id="ClientType"
                        value={ClientType}
                        onChange={(e) => setClientType(e.target.value)}/>
                <label htmlFor="ClientName">거래처명</label>
                    <input
                        type="text"
                        id="ClientName"
                        value={ClientName}
                        onChange={(e) => setClientName(e.target.value)}  />
                <button onClick={handleSearch1}>검색</button>
            </div>
        </div>
    )
};

export default OtherSearch;