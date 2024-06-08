import React from 'react'
import { FaDownload, FaCopy } from "react-icons/fa";
import Copy from '../../utils/CopyToClipboard';

function Item({name, id, download}) {
  return (
    <div className='w-[190px] h-fit border-[2px] border-black rounded-lg p-3 relative'>
        <FaDownload className='absolute right-3 cursor-pointer' onClick={download}/>
        <div className="name truncate w-4/5 h-[20px]">{name}</div>
        <div className="id text-sm mt-2 text-[#ccc] hover:text-black cursor-pointer flex items-center"><span className='underline'>#{id}</span> <FaCopy onClick={() => Copy(id)} /></div>
    </div>
  )
}

export default Item