import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa';
import WatchFileInput from '../../utils/WatchFileInput';
import TopicAPI from '../../API/Topic';
import Copy from '../../utils/CopyToClipboard';
import Validate from '../../core/Validate';

function UploadModal({ quit }) {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        if (document.getElementById("file-input")) {
            WatchFileInput(setInput);
        }
    }, []);

    const upload = async () => {
        
        try {

            const json = JSON.parse(input);
            const data = Object.entries(json);

            const finalData = {};

            for (let i of data) {
                finalData[i[0]] = Validate.Topic(i[1]);
            }

            if (name.length == 0) {
                return alert('Tên không được để trống');
            }

            const res = await TopicAPI.upload(name, JSON.stringify(finalData));

            if (res) {
                Copy(res.id);
                alert('Đã đăng tải bộ đề: ' + res.name + '\nID: ' + res.id + '(đã copy vào bộ nhớ tạm)');
                quit();
            } else {
                alert('Có lỗi đã xảy ra')
            }
        } catch(e) {
            alert("Có lỗi đã xảy ra")
        }

        
    }
    return (
        <><div className="overlay fixed top-0 left-0 right-0 bottom-0 opacity-40 bg-black" onClick={quit}></div>

            <div className='z-10 fixed max-w-[400px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <div className="title text-center font-bold text-white text-lg">Đăng tải bộ thẻ</div>

                <div className="flex flex-wrap items-center gap-2 bg-modal p-4 rounded-lg relative">
                    <FaTimes className='absolute right-2 top-2 text-white cursor-pointer' onClick={quit}></FaTimes>
                    <label htmlFor="name">Tên:</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className='w-full rounded-sm p-[10px] focus:outline-none' placeholder='Tên bộ thẻ' />

                    <h2 className="w-full">Chọn file hoặc dán nội dung:</h2>
                    <input
                        type="text"
                        className="w-full rounded-sm p-[10px] focus:outline-none"
                        value={input.slice(0, 100)}
                        placeholder="Nội dung"
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <input type="file" id="file-input" accept=".json" />

                    <div
                        className="export w-full cursor-pointer rounded-md bg-[#0f8] p-2 text-center"
                        onClick={upload}
                    >
                        Đăng
                    </div>
                </div>
            </div></>
    )
}

export default UploadModal