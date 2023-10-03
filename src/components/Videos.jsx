import {Stack, Box} from '@mui/material';
import { VideoCard, ChannelCard } from './';

export const Videos = ({videos}) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
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