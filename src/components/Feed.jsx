import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Sidebar} from "./Sidebar.jsx";
import {fetchFromAPI} from "../utils/fetch.js";
import {Videos} from "./Videos";

export const Feed = () => {
    // dynamic state for rendering category, especially for changing header text and params for search
    const [selectedCategory, setSelectedCategory] = useState("New");

    // dynamic state for showing videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(null)

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack sx={{
            flexDirection: {sx: 'column', md: 'row'}
        }}>
            <Box sx={{
                height: {sx: 'auto', md: '92vh'},
                borderRight: '1px solid #3d3d3d',
                px: {sx: 0, md: 2}
            }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

                <Typography className="copyright" variant="body-2" sx={{mt: 1.5, color: '#fff'}}>
                    Copyright 2023 Arief Kurniawan
                </Typography>
            </Box>
            <Box p={2} sx={{
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{
                    color: 'white'
                }}>
                    {selectedCategory} <span style={{color: '#f31503'}}>Videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}