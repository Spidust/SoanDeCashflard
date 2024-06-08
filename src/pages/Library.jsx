import React, { useState } from 'react'
import ControlBar from '../components/Library/ControlBar';
import Item from '../components/Library/Item';
import DownloadModal from '../components/Library/DownloadModal';
import TopicAPI from '../API/Topic';
import UploadModal from '../components/Library/UploadModal';

const defaultTopics = [{ id: "yYMftThCu", name: "Tiếng Anh" }];

function Library() {
    const [topics, setTopics] = useState(defaultTopics);
    const [selected, setSelected] = useState(false);
    const [upload, setUpload] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const searchHandler = async () => {
        if (searchQuery.length == 0) {
            return setTopics(defaultTopics);
        }
        const data = await TopicAPI.search(searchQuery);
        if (data) {
            return setTopics(data);
        }
    }
    return (
        <div>
            <ControlBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchHandler={searchHandler} upload={() => setUpload(true)} setTopics={setTopics} defaultTopic={defaultTopics}/>

            <div className="items border-[1px] content-start border-black p-1 mx-auto mt-5 flex flex-wrap gap-1 w-[416px] md:w-[618px] lg:w-[823px] h-[50vh] overflow-y-scroll">
                {topics.map(i => <Item name={i.name} id={i.id} download={() => setSelected(i.id)}/>)}
                
                {selected && <DownloadModal id={selected} quit={() => setSelected(false)}/>}
                {upload && <UploadModal quit={() => setUpload(false)}/>}
            </div>
        </div>
    )
}

export default Library;