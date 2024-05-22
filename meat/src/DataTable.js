import React from "react";

const DataTable = ({ headers, items = [] }) => {
    if (!headers || !headers.length) {
        throw new Error('<DataTable /> headers is required.');
    }

    const headerKey = headers.map((header) => header.value);

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header.value}>{header.text}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    {headerKey.map((key) => (
                        <td key={key + index}>{item[key]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
