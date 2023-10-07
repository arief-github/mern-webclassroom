import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos} from './Videos.jsx';
import {ChannelCard} from './ChannelCard.jsx';
import {fetchFromAPI} from "../utils/fetch.js";

const fetchChannelDetail = ({id, setChannelDetail}) => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]));
}

const fetchChannelVideos = ({id, setVideos}) => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items));
}

export const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    //get id as params
    const {id} = useParams();

    console.log(channelDetail, videos)

    useEffect(() => {
        fetchChannelDetail({id: id, setChannelDetail: setChannelDetail});
        fetchChannelVideos({id: id, setVideos: setVideos});
    }, [id, setChannelDetail, setVideos])

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                        zIndex: 10,
                        height: '300px'
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
            </Box>
            <Box display="flex" p="2">
                <Box sx={{mr: {sm: '100px'}}}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    )
}