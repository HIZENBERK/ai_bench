//주문 등록 페이지
import React, {useEffect, useState} from "react";
import Pagination from '../component/Pagination'; // Make sure the path is correct
import '../css/Pagination.css'; // Ensure this path is correct

const RegisterPage = () => {
    const [registerResults] = useState([
        { 
        no: 1,
        registrationDate: "2024-06-01",
        category: "Electronics",
        customer: "John Doe",
        address: "123 Main St, City, Country",
        contact: "+1234567890",
        orderNumber: "ORD001",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 2,
        registrationDate: "2024-06-02",
        category: "Clothing",
        customer: "Jane Smith",
        address: "456 Elm St, City, Country",
        contact: "+0987654321",
        orderNumber: "ORD002",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 3,
        registrationDate: "2024-06-03",
        category: "Furniture",
        customer: "Michael Johnson",
        address: "789 Oak St, City, Country",
        contact: "+1357924680",
        orderNumber: "ORD003",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 4,
        registrationDate: "2024-06-04",
        category: "Books",
        customer: "Emily Brown",
        address: "987 Pine St, City, Country",
        contact: "+2468013579",
        orderNumber: "ORD004",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 5,
        registrationDate: "2024-06-05",
        category: "Sports Equipment",
        customer: "William Wilson",
        address: "654 Maple St, City, Country",
        contact: "+9876543210",
        orderNumber: "ORD005",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 6,
        registrationDate: "2024-06-06",
        category: "Beauty Products",
        customer: "Sarah Lee",
        address: "321 Birch St, City, Country",
        contact: "+0123456789",
        orderNumber: "ORD006",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 7,
        registrationDate: "2024-06-07",
        category: "Home Appliances",
        customer: "David Clark",
        address: "147 Cedar St, City, Country",
        contact: "+9876543210",
        orderNumber: "ORD007",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 8,
        registrationDate: "2024-06-08",
        category: "Toys",
        customer: "Olivia Garcia",
        address: "369 Elm St, City, Country",
        contact: "+1357924680",
        orderNumber: "ORD008",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 9,
        registrationDate: "2024-06-09",
        category: "Food",
        customer: "Daniel Martinez",
        address: "258 Oak St, City, Country",
        contact: "+2468013579",
        orderNumber: "ORD009",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 10,
        registrationDate: "2024-06-10",
        category: "Jewelry",
        customer: "Sophia Lopez",
        address: "753 Pine St, City, Country",
        contact: "+1234567890",
        orderNumber: "ORD010",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 11,
        registrationDate: "2024-06-11",
        category: "Electronics",
        customer: "Alexander Hernandez",
        address: "159 Maple St, City, Country",
        contact: "+9876543210",
        orderNumber: "ORD011",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 12,
        registrationDate: "2024-06-12",
        category: "Clothing",
        customer: "Isabella Martinez",
        address: "753 Oak St, City, Country",
        contact: "+1357924680",
        orderNumber: "ORD012",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 13,
        registrationDate: "2024-06-13",
        category: "Furniture",
        customer: "Mason Gonzalez",
        address: "456 Elm St, City, Country",
        contact: "+2468013579",
        orderNumber: "ORD013",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 14,
        registrationDate: "2024-06-14",
        category: "Books",
        customer: "Ava Perez",
        address: "951 Pine St, City, Country",
        contact: "+0123456789",
        orderNumber: "ORD014",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 15,
        registrationDate: "2024-06-15",
        category: "Sports Equipment",
        customer: "Ethan Rivera",
        address: "258 Birch St, City, Country",
        contact: "+1234567890",
        orderNumber: "ORD015",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 16,
        registrationDate: "2024-06-16",
        category: "Beauty Products",
        customer: "Madison Carter",
        address: "357 Cedar St, City, Country",
        contact: "+1357924680",
        orderNumber: "ORD016",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
    { 
        no: 17,
        registrationDate: "2024-06-17",
        category: "Home Appliances",
        customer: "Benjamin Torres",
        address: "852 Elm St, City, Country",
        contact: "+2468013579",
        orderNumber: "ORD017",
        giftWrapping: "Yes",
        edit: <button>Edit</button>
    },
    { 
        no: 18,
        registrationDate: "2024-06-18",
        category: "Toys",
        customer: "Charlotte Flores",
        address: "753 Birch St, City, Country",
        contact: "+0123456789",
        orderNumber: "ORD018",
        giftWrapping: "No",
        edit: <button>Edit</button>
    },
        // Add more data as required (up to 20 items)
    ]);
    
    const [searchFields, setSearchFields] = useState([{ productName: "", price: "" }]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [setFilteredResults] = useState([]);
    const [TextForSearch, setTextForSearch] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [DisplayResults, setDisplayResults] = useState(registerResults);

    useEffect(() => {
        const total = searchFields.reduce((sum, field) => sum + (parseFloat(field.price) || 0), 0);
        setTotalPrice(total);
    }, [searchFields]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedFields = [...searchFields];
        updatedFields[index][name] = value;
        setSearchFields(updatedFields);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...searchFields];
        updatedFields.splice(index, 1);
        setSearchFields(updatedFields);
    };

    const handleAddField = () => {
        setSearchFields([...searchFields, { productName: "", price: "" }]);
    };

    const handleSearch = () => {
        const filtered = registerResults.filter(result =>
            searchFields.every(field =>
                result.productName.includes(field.productName) &&
                (parseFloat(result.price) >= parseFloat(field.price) || !field.price)
            )
        );
        setFilteredResults(filtered);
        const total = filtered.reduce((sum, result) => sum + parseInt(result.price || 0), 0);
        setTotalPrice(total);
    };

    const handleSearchOption = (e) => {
        setSearchOption(e.target.value);
    }

    const handleSearch1 = () => {
        const lowerCasedFilter = TextForSearch.toLowerCase();
        const filterResults = registerResults.filter(item => {
            switch (SearchOption) {
                case '등록일':
                    return item.registrationDate.toLowerCase().includes(lowerCasedFilter);
                case '카테고리':
                    return item.category.toLowerCase().includes(lowerCasedFilter);
                case '고객':
                    return item.customer.toLowerCase().includes(lowerCasedFilter);
                case '주소':
                    return item.address.toLowerCase().includes(lowerCasedFilter);
                case '연락처':
                    return item.contact.toLowerCase().includes(lowerCasedFilter);
                case '주문번호':
                    return item.orderNumber.toLowerCase().includes(lowerCasedFilter);
                case '기프트래핑':
                    return item.giftWrapping.toLowerCase().includes(lowerCasedFilter);
                default:
                    return false;
            }
        });
        setDisplayResults(filterResults);
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
    const currentResults = DisplayResults.slice(indexOfFirstResult, indexOfLastResult);

    return (
        <div>
            <div className="processing-page-container">
                <h2>주문등록 페이지</h2>
                {/* input fields for product registration */}
                <div className="totalRegister">
                    <div className="input-registerpage">
                        <div className="input-container">
                            <label htmlFor="workingDay">등록일(요일)</label>
                            <input type="text" id="workingDay"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="category">구분</label>
                            <input type="text" id="category"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="customer">주문자</label>
                            <input type="text" id="customer"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="address">주소</label>
                            <input type="text" id="address"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="contact">연락처</label>
                            <input type="text" id="contact"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="orderRegistrar">주문등록자</label>
                            <input type="text" id="orderRegistrar" />
                        </div>
                    </div>

                {/* search fields */}
                    <div className="priceTotal">
                        {searchFields.map((field, index) => (
                            <div className="" key={index}>
                                <div className="orderprice">
                                    <label htmlFor={`productName-${index}`}>제품명</label>
                                    <input
                                        type="text"
                                        id={`productName-${index}`}
                                        name="productName"
                                        className="price-container"
                                        value={field.productName}
                                        onChange={event => handleInputChange(index, event)}
                                    />

                                    <label htmlFor={`price-${index}`}>가격</label>
                                    <input
                                        type="text"
                                        id={`price-${index}`}
                                        name="price"
                                        className="price-container"
                                        value={field.price}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                    <div className="price-btn">
                                        <button onClick={() => handleRemoveField(index)}>삭제</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* buttons for adding/removing search fields and initiating search */}
                        <div className="add-btn">
                            <button onClick={handleAddField}>추가</button>
                        </div>
                        <div className="totalPrice">
                            <h3>가격 합계: {totalPrice}</h3>
                        </div>
                        <div className="registration">
                            <button className="Order-registration" onClick={handleSearch}>주문 등록</button>
                            <label>선물 포장 여부</label>
                            <input className="giftPossible" type="checkbox"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="processing-page-container">
            <div className="dropdown-container">
                    <label htmlFor="resultsPerPage">한 페이지에 볼 리스트 개수:</label>
                    <select id="resultsPerPage" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div className="input-container">
                    {/*<label htmlFor="orderDateTimeSearch">컬럼별 조회 목록</label>*/}
                    <select id="SearchOption" onChange={handleSearchOption} value={SearchOption} >
                        <option value={'등록일'}>등록일</option>
                        <option value={'카테고리'}>카테고리</option>
                        <option value={'고객'}>고객</option>
                        <option value={'주소'}>주소</option>
                        <option value={'연락처'}>연락처</option>
                        <option value={'주문번호'}>주문번호</option>
                        <option value={'기프트래핑'}>기프트래핑</option>
                    </select>
                    <input
                        type="text"
                        id="orderDateTimeSearch"
                        value={TextForSearch}
                        onChange={(e) => setTextForSearch(e.target.value)}
                        placeholder="검색"
                    />
                    <button onClick={handleSearch1}>조회</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>등록일</th>
                        <th>카테고리</th>
                            <th>고객</th>
                            <th>주소</th>
                            <th>연락처</th>
                            <th>주문번호</th>
                            <th>기프트 래핑</th>
                            <th>편집</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((result, index) => (
                            <tr key={index}>
                                <td>{result.no}</td>
                                <td>{result.registrationDate}</td>
                                <td>{result.category}</td>
                                <td>{result.customer}</td>
                                <td>{result.address}</td>
                                <td>{result.contact}</td>
                                <td>{result.orderNumber}</td>
                                <td>{result.giftWrapping}</td>
                                <td>{result.edit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(registerResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default RegisterPage;