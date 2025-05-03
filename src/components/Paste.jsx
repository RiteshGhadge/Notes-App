import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import './paste.css';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEdit, FaEye, FaTrash, FaCopy, FaShareAlt } from 'react-icons/fa'; // Import icons

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterdata = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledelete(pasteid) {
    dispatch(removeFromPastes(pasteid));
    toast.success('Paste deleted successfully');
  }

  return (
    <div className="paste-container">
      {/* Search Bar */}
      <input
        type="search"
        placeholder="Search your pastes here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Paste Grid */}
      <div className="grid">
        {filterdata.length > 0 ? (
          filterdata.map((paste) => (
            <div key={paste._id} className="paste-box">
              {/* Title */}
              <h1 className="paste-title">{paste.title}</h1>

              {/* Icons Row */}
              <div className="icon-row">
                <NavLink to={`/?pasteid=${paste._id}`} className="icon edit-icon">
                  <FaEdit title="Edit" />
                </NavLink>
                <NavLink to={`/pastes/${paste._id}`} className="icon view-icon">
                  <FaEye title="View" />
                </NavLink>
                <button
                  className="icon delete-icon"
                  onClick={() => handledelete(paste?._id)}
                  title="Delete"
                >
                  <FaTrash />
                </button>
                <button
                  className="icon copy-icon"
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success('Copied to clipboard');
                  }}
                  title="Copy"
                >
                  <FaCopy />
                </button>
                <button className="icon share-icon" title="Share">
                  <FaShareAlt />
                </button>
              </div>

              {/* Date */}
              <p className="paste-date">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                }).format(new Date(paste.createAt))}
              </p>

              {/* Content */}
              <p className="paste-content">{paste.content}</p>
            </div>
          ))
        ) : (
          <div className="no-pastes">No pastes found</div>
        )}
      </div>
    </div>
  );
}

export default Paste;