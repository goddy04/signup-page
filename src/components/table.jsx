import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filtered data based on search term
  const filteredData = data.filter(item =>
    item.program_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the index of the first and last records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-container">
      <h2>Manage Programs</h2>

      <input
        type="text"
        placeholder="Search by program name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <table className="program-table">
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item) => (
            <tr key={item._id}>
              <td>{item.program_name}</td>
              <td>{new Date(item.program_start_date).toLocaleDateString()}</td>
              <td>{new Date(item.program_end_date).toLocaleDateString()}</td>
              <td className={item.status === 1 ? 'draft-status' : 'live-status'}>
                    {item.status === 1 ? 'DRAFT' : 'LIVE'}
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
