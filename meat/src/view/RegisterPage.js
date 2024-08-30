//주문 등록 페이지
import React, {useEffect, useRef, useState} from "react";
import Pagination from '../component/Pagination'; // Make sure the path is correct
import '../css/Pagination.css';
import DatePicker from "../component/DatePicker";
import {useAuth} from "../component/AuthContext";
import PopupPostCode from "../component/DaumPost";
import axios from "axios";
import {format} from "date-fns";
import DeleteModal from "../component/DeleteModal";

const RegisterPage = () => {
    const [searchFields, setSearchFields] = useState([{ PurchaserName: "", PurchaserPrice: ""}]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [filteredResults, setFilteredResults] = useState([]);
    const [TextForSearch, setTextForSearch] = useState('');
    const [SearchOption, setSearchOption] = useState('');
    const [DisplayResults, setDisplayResults] = useState('');
    const [workingDay, setWorkingDay] = useState('');
    const [isPostCodeOpen, setIsPostCodeOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [registerResults, setRegisterResults] = useState([]);
    const [DeleteModalOpen, setDeleteModalOpen] = useState(false);

    const [PurchaseDate, setPurchaseDate] = useState('');
    const [PurchaseStep, setPurchaseStep] = useState('');
    const [Purchaser, setPurchaser] = useState('');
    const [PurchaseAddress, setPurchaseAddress] = useState('');
    const [PurchaseAddressDetail, setPurchaseAddressDetail] = useState('');
    const [PurchasePhone, setPurchasePhone] = useState('');
    const [PurchaseNo, setPurchaseNo] = useState('');
    const [Wrapping, setWrapping] = useState(false);
    const [PurchaserName, setPurchaserName] = useState('');
    const [PurchaserPrice, setPurchaserPrice] = useState('');



    useEffect(() => {
        const total = searchFields.reduce((sum, field) => sum + (parseFloat(field.PurchaserPrice) || 0), 0);
        setTotalPrice(total);
    }, [searchFields]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        console.log("Field Name:", name);
        console.log("Field Value:", value);

        const updatedFields = [...searchFields];
        updatedFields[index][name] = value;
        setSearchFields(updatedFields);

        if(name === 'PurchaserName') {
            setPurchaserName(value);
        } else if(name === 'PurchaserPrice') {
            setPurchaserPrice(value);
        }

        const total = updatedFields.reduce((sum, field) => sum + parseFloat(field.PurchaserPrice || 0), 0);
        setTotalPrice(total);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...searchFields];
        updatedFields.splice(index, 1);
        setSearchFields(updatedFields);
    };

    const handleAddField = () => {
        setSearchFields([...searchFields, { PurchaserName: "", PurchaserPrice: "" }]);
    };

    const handleSearch = () => {
        const filtered = registerResults.filter(result =>
            searchFields.every(field =>
                result.PurchaserName.includes(field.PurchaserName) &&
                (parseFloat(result.PurchaserPrice) >= parseFloat(field.PurchaserPrice) || !field.PurchaserPrice)
            )
        );
        setFilteredResults(filtered);
        const total = filtered.reduce((sum, result) => sum + parseInt(result.PurchaserPrice || 0), 0);
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

    const handleAddressClick = () => {
        setIsPostCodeOpen(true);
    }

    const closePostCode = () => {
        setIsPostCodeOpen(false);
    }

    const handleAddress = (selectedAddress) => {
        setPurchaseAddress(selectedAddress);
        setIsPostCodeOpen(false);
    }

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    // const currentResults = searchResults.slice(
    //     (currentPage - 1) * resultsPerPage,
    //     currentPage * resultsPerPage
    // );

    const handleDateChange = (date, id) => {
        if (id === 'PurchaseDate') {
            setPurchaseDate(date);
            console.log(PurchaseDate);
        }
    };

    const { authState} = useAuth();
    let empNo = 'admin';
    try {
        empNo = authState.empNo;
    } catch (e) {}

    const selectList = [
        {value: "배송", name: "배송"},
        {value: "픽업", name: "픽업"}
    ]

    const [selected, setSelected] = useState('배송')

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/register');
            console.log('FetchData:', response.data);
            setSearchResults(response.data);
            setFilteredResults(response.data);
        } catch (error){
            console.error('데이터 가져오기 실패');
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, []);

    useEffect(() => {
        console.log('SearchResults:', searchResults);
        console.log('Filtered:', filteredResults);
    }, [searchResults, filteredResults]);

    const handleRegisterNavigation = async () => {
        setPurchaseNo("");
        console.log(selected,Purchaser,PurchaseAddress,PurchaseAddressDetail,PurchasePhone,PurchaseNo,Wrapping,searchFields)
        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                Method: 'post',
                PurchaseDate: PurchaseDate,
                PurchaseStep: selected,
                Purchaser: Purchaser,
                PurchaseAddress: PurchaseAddress,
                PurchaseAddressDetail: PurchaseAddressDetail,
                PurchasePhone: PurchasePhone,
                PurchaseNo: PurchaseNo,
                Wrapping: Wrapping ? "YES" : "NO",
                PurchaserItems: searchFields,
                //PurchaserName: searchFields,
                //PurchaserPrice: searchFields
            });
            console.log(response);
            fetchSearchResults();
            setPurchaseDate('');
            //setPurchaseStep('');
            setPurchaser('');
            setPurchaseAddress('');
            setPurchaseAddressDetail('');
            setPurchasePhone('');
            setPurchaseNo('');
            setWrapping(false);
            setSearchFields([{PurchaserName: "", PurchaserPrice: ""}])
        } catch (error) {
            console.error('데이터 생성 에러:', error);
        }
    };

    const handleDelete = (PurchaseNo) => {
        setDeleteModalOpen(true);
        setPurchaseNo(PurchaseNo);
    }

    const confirmDelete = async () => {
        console.log(PurchaseNo)
        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                Method: 'delete',
                PurchaseNo: PurchaseNo
            });
            console.log(response)
            fetchSearchResults();
            setPurchaseDate('');
            setPurchaseStep('');
            setPurchaser('');
            setPurchaseAddress('');
            setPurchaseAddressDetail('');
            setPurchasePhone('');
            setPurchaseNo('');
            setWrapping(false);
            setSearchFields([{PurchaserName: '',PurchaserPrice: ''}])
            setDeleteModalOpen(false);
        } catch (error) {
            console.error('데이터삭제 에러:', error);
        }
    }

    const phoneRef = useRef();

    const handlePhone = (e) => {
        const value = e.target.value.replace(/\D+/g, ""); // 숫자만 남김
        const numberLength = 11;

        let result = '';

        for (let i = 0; i < value.length && i < numberLength; i++) {
            if (i === 3 || i === 7) {
                result += "-";
            }
            result += value[i];
        }
        setPurchasePhone(result);
    };

    const handleWrapping = (e) => {
        setWrapping(e.target.checked);
        console.log(Wrapping)
    }

    return (
        <div>
            <div className="processing-page-container">
                <h2>주문등록 페이지</h2>
                {/* input fields for product registration */}
                <div className="totalRegister">
                    <div className="input-registerpage">
                        <div className="input-container1">
                            <label htmlFor="PurchaseDate">등록일</label>
                            <DatePicker id="PurchaseDate" selectedDate={PurchaseDate} onChangeDate={handleDateChange}/>
                            {/*<input type="text" id="workingDay"/>*/}
                        </div>

                        <div className="input-container1">
                            <label htmlFor="input-container1">구분</label>
                            <select className="selectCustom" onChange={handleSelect} value={selected} id="PurchaseStep">
                                {selectList.map((option, index) => (
                                    <option value={option.value} key={index}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            {/*<input type="text" id="input-container1"/>*/}
                        </div>

                        <div className="input-container1">
                            <label htmlFor="customer">주문자</label>
                            <input type="text" id="Purchaser" value={Purchaser} onChange={(e) => setPurchaser(e.target.value)}/>
                        </div>

                        <div className="input-container1">
                            <label htmlFor="address">주소</label>
                            <input type="text" id="PurchaseAddress" value={PurchaseAddress} onClick={handleAddressClick} readOnly/>
                            {isPostCodeOpen && (
                                <div className="modalStyle">
                                    <div className="modalContentStyle">
                                        <PopupPostCode onClose={closePostCode} onSelect={handleAddress} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="input-container1">
                            <input type="text" id="PurchaserAddressDetail"
                                   value={PurchaseAddressDetail}
                                   onChange={(e) => setPurchaseAddressDetail(e.target.value)}
                                   placeholder="상세주소"/>
                        </div>

                        <div className="input-container1">
                            <label htmlFor="contact">연락처</label>
                            <input type="text" id="PurchasePhone"
                                   ref={phoneRef}
                                   value={PurchasePhone}
                                   onChange={handlePhone}
                                   placeholder="010-1234-5678"/>
                        </div>

                        <div className="input-container1">
                            <label htmlFor="orderRegistrar">주문등록자</label>
                            <text id="orderRegistrar">{empNo}</text>
                            {/*<input type="text" id="orderRegistrar" />*/}
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
                                        name="PurchaserName"
                                        className="price-container"
                                        value={field.PurchaserName}
                                        onChange={event => handleInputChange(index, event)}
                                    />

                                    <label htmlFor={`price-${index}`}>가격</label>
                                    <input
                                        type="text"
                                        id={`price-${index}`}
                                        name="PurchaserPrice"
                                        className="price-container"
                                        value={field.PurchaserPrice}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                    <div className="price-btn">
                                        <button onClick={() => handleRemoveField(index)}>삭제</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="add-btn">
                            <button onClick={handleAddField}>추가</button>
                        </div>
                        <div className="totalPrice">
                            <h3>가격 합계: {totalPrice}</h3>
                        </div>
                        <div className="registration">
                            <button className="Order-registration" onClick={handleRegisterNavigation}>주문 등록</button>
                            <label>선물 포장 여부</label>
                            <input
                                className="giftPossible"
                                type="checkbox"
                                id="Wrapping"
                                checked={Wrapping}
                                onChange={handleWrapping}/>
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
                            <th>구분</th>
                            <th>주문자</th>
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
                                <td>{index + 1}</td>
                                <td>{result.PurchaseDate ? format(new Date(result.PurchaseDate), 'yyyy-MM-dd') : null}</td>
                                <td>{result.PurchaseStep}</td>
                                <td>{result.Purchaser}</td>
                                <td>{result.PurchaseAddress} ,<br/>{result.PurchaseAddressDetail}</td>
                                <td>{result.PurchasePhone}</td>
                                <td>{result.PurchaseNo}</td>
                                <td>{result.Wrapping ? "YES" : "NO"}</td>
                                <td>
                                    <button>수정</button>
                                    /
                                    <button onClick={() => handleDelete(result.PurchaseNo)}>취소</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <DeleteModal
                    open={DeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={confirmDelete}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredResults.length / resultsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default RegisterPage;