import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addTopics } from '../../utils/State/AddTopics';
import TopicAPI from '../../API/Topic';

import { FaTimes } from 'react-icons/fa';
import saveToFile from '../../utils/saveToFile';
function DownloadModal({ quit, id }) {
    const categorie = useSelector(state => state.categorie.value);
    const dispatch = useDispatch();

    const [selected, setSelected] = useState([]);
    const [isDownloadFile, setIsDownloadFile] = useState(false);

    const download = async () => {
        const data = await TopicAPI.get(id);
        if (isDownloadFile) {
            saveToFile(data.json, data.name, 'json');
        }
        if (data) {
            selected.map(i => {
                addTopics(JSON.parse(data.json), i, dispatch);
            })
            alert("Tải bộ thẻ thành công!")
        }
        else alert("Tải bộ thẻ thất bại!");

        quit();
    }
    return (
        <>
            <div className="overlay fixed top-0 left-0 right-0 bottom-0 opacity-40 bg-black" onClick={quit}></div>
            <div className='z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <div className="title text-center font-bold text-white text-lg">Tải xuống bộ thẻ</div>
                <div className="bg-white p-4 w-[300px] mt-5 relative">
                    <FaTimes className='absolute right-1 top-1 cursor-pointer' size={20} onClick={quit} />
                    <div className="title text-center font-bold text-lg mt-4">Chọn thư mục</div>
                    <div className="overflow-y-auto max-h-[300px]">
                        <div className='flex justify-between'>
                            <span className='truncate'>Tải file về máy</span>

                            <input type="checkbox" className='w-5 h-5 cursor-pointer' onClick={() => setIsDownloadFile(prev => !prev)} checked={isDownloadFile} />
                        </div>
                        {
                            categorie.map(i => (
                                <div className='flex justify-between'>
                                    <span className='truncate'>{i.name}</span>

                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' onClick={() => {
                                        if (selected.indexOf(i.id) != -1) {
                                            setSelected(selected => {
                                                const newSelected = [...selected];
                                                newSelected.splice(selected.indexOf(i.id));
                                                return newSelected;
                                            })
                                        } else {
                                            setSelected(selected => [...selected, i.id])
                                        }
                                    }} checked={selected.indexOf(i.id) != -1} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="button ml-auto mt-5 py-2 px-6 w-fit rounded-[50px] cursor-pointer font-bold text-white text-center bg-primary" onClick={() => {
                        download();
                        quit();
                    }}>Tải</div>
                </div>


            </div>
        </>
    )
}

export default DownloadModal