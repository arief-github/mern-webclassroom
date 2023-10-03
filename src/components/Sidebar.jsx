import {Stack} from "@mui/material";
import {categories} from '../utils/constants.jsx'

export const Sidebar = (props) => {
    const {selectedCategory, setSelectedCategory} = props

    return (
        <Stack
            direction="row"
            sx={{
                height: {sx: 'auto', md: '95%'},
                overflowY: 'auto',
                flexDirection: {
                    md: 'column'
                }
            }}
        >
            {
                categories.map(({icon, name}) => (
                    <button
                        className="category-btn"
                        style={{
                            background: name === selectedCategory && '#FC1503',
                            color: 'white'
                        }}
                        key={name}
                        onClick={() => setSelectedCategory(name)}
                    >
                        <span style={{
                            color: name === selectedCategory ? 'white' : 'red', marginRight: "15px"
                        }}>{icon}</span>
                        <span style={{opacity: name === selectedCategory ? '1' : '0.8'}}>{name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}