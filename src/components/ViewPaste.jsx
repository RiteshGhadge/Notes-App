import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function ViewPaste() {
  const { id } = useParams();

  const allpastes = useSelector((state) => state.paste.pastes);
  const paste = allpastes.filter((item) => item._id === id)[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        View Paste
      </h1>

      {/* Title Section */}
      <div className="mb-8">
        <label className="block text-xl font-semibold text-gray-700 mb-2">
          Paste Title
        </label>
        <input
          type="text"
          placeholder="Enter your paste title"
          className="border-2 border-blue-300 rounded-md p-3 w-full bg-blue-50 text-gray-800 font-medium cursor-not-allowed"
          value={paste?.title || ''}
          disabled
        />
      </div>

      {/* Content Section */}
      <div className="relative mb-8">
        <label className="block text-xl font-semibold text-gray-700 mb-2">
          Paste Content
        </label>
        {/* Copy Button */}
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
          onClick={() => {
            navigator.clipboard.writeText(paste?.content || '');
            toast.success('Copied to clipboard');
          }}
        >
          Copy
        </button>
        <textarea
          placeholder="Paste content here"
          className="border-2 border-blue-300 rounded-md p-3 w-full h-40 bg-blue-50 text-gray-800 font-medium cursor-not-allowed"
          value={paste?.content || ''}
          disabled
        ></textarea>
      </div>

      {/* Footer Section */}
      <div className="text-center text-gray-500 text-sm">
        <p>
          Created on:{' '}
          <span className="font-semibold text-gray-700">
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            }).format(new Date(paste?.createAt || Date.now()))}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ViewPaste;