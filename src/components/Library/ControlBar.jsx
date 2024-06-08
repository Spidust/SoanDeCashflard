import React, { useState } from 'react'
import { FaUpload, FaSearch, FaTimes } from "react-icons/fa";

function ControlBar({ searchQuery, setSearchQuery, searchHandler, upload, setTopics, defaultTopic }) {
    return (
        <div className='py-4 px-10 rounded-md bg-primary flex w-fit mx-auto'>
            <div className="searchBar flex items-center relative">
                <input type="text" className='focus:outline-none p-2 border-[1px] border-[#ccc] rounded-lg w-[250px]' placeholder='Tìm kiếm đề' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} />
                <FaSearch size={22} className='absolute right-2 cursor-pointer text-[#ccc] hover:text-[#333]' onClick={searchHandler} />
                {searchQuery.length > 0 && <FaTimes size={22} className='absolute right-8 cursor-pointer text-[#ccc] hover:text-[#333]' onClick={() => {setSearchQuery(""); setTopics(defaultTopic)}} />
                }
            </div>
            <div className="upload flex p-3 text-white cursor-pointer hover:bg-secondary ml-2 rounded-lg" onClick={upload}>
                <FaUpload size={22}></FaUpload>
            </div>
        </div>
    )
}

export default ControlBar