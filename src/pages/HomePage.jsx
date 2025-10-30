import Header from "../components/Header"
import {Box} from '@mui/material'


function HomePage() {
    return (
        <Box sx={{ backgroundColor: "#212224", flexGrow: 1, minHeight: "100vh"}} >
            <Header/>
        </Box>
    )
}

export default HomePage