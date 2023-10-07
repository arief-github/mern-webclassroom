import {Stack, Box} from '@mui/material';
import { VideoCard, ChannelCard } from './';
import Loader from "./Loader.jsx";

export const Videos = ({videos, direction}) => {
    if(!videos?.length) return <Loader/>;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {
                videos?.map((item) => (
                    <Box key={item.id}>
                        {item.id.videoId ? <VideoCard video={item}/> : null}
                        {item.id.channelId ? <ChannelCard channelDetail={item}/> : null}
                    </Box>
                ))
            }
        </Stack>
    )
}