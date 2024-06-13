import React, { useState } from 'react';
import '../css/WorkOrderPage.css';

function SearchBar({ recentSearches, removeSearchItem }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <button>부위</button>
        <button>제품명</button>
        <button>제품 번호</button>
        <input type="text" placeholder="검색어" />
        <button>검색</button>
      </div>
      <div className="recent-searches">
        <h3>최근 검색</h3>
        {recentSearches.map((item, index) => (
          <div key={index} className="search-item">
            <div className="item-text">{item}</div>
            <button onClick={() => removeSearchItem(index)}>X</button>
          </div>
        ))}
      </div>
      <div className="rectangle1"></div> {/* 첫 번째 직사각형 네모 */}
      <div className="rectangle2"></div> {/* 두 번째 직사각형 네모 */}
    </div>
  );
}

function WorkOrderPage() {
  const [recentSearches, setRecentSearches] = useState([
    '모딘한담_한우_구이_채끝 200g',
    '모딘한담_한우_구이_채끝 250g',
  ]);

  const removeSearchItem = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <div className="work-order-page">
      <header className="work-order-header">
        <SearchBar recentSearches={recentSearches} removeSearchItem={removeSearchItem} />
      </header>
    </div>
  );
}

export default WorkOrderPage;
