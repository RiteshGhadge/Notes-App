import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateTopastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import './Home.css'; // Import the CSS file

function Home() {
  const [title, settitle] = useState('');
  const [value, setValue] = useState('');
  const [SearchParams, setSearchParams] = useSearchParams();
  const pasteid = SearchParams.get('pasteid');

  const dispatch = useDispatch();

  const allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteid) {
      const paste = allpaste.find((item) => item._id === pasteid);
      settitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteid]);

  function createpaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteid || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    if (pasteid) {
      dispatch(updateTopastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    settitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <>
      <div className="home-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your paste title"
            className="styled-input"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <button
            className="styled-button"
            onClick={createpaste}
          >
            {pasteid ? 'Update Paste' : 'Create Paste'}
          </button>
        </div>

        <div className="textarea-container">
          <button
            className="copy-button"
            onClick={() => {
              navigator.clipboard.writeText(value);
              toast.success('Copied to clipboard');
            }}
          >
            Copy
          </button>
          <textarea
            placeholder="Enter your paste content here"
            className="styled-textarea"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Home;