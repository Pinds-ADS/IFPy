import { Box, Paper, Stack, Typography, IconButton, Chip, Avatar } from '@mui/material'
import Logo from '../assets/IFPyLogo.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'



function Header(){
    
    const navigate = useNavigate()
    const location = useLocation()

    const isHome = location.pathname === "/"

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        }else{
            navigate("/")
        }
    }


 return (
    <>
        <Paper elevation={2} sx={{ 
            borderBottom: "1px solid", 
            borderColor: 'primary.main',
            borderRadius: 0.5
        }}>
            <Box sx={{
                display: "flex",
                maxWidth: "1200px",
                mx: "auto",
                px: 2,
                py: 1,
                alignItems: "center",
                gap: 3,
                backgroundColor: "#1a1a1a"
            }}>


            {!isHome && (
                <IconButton
                    onClick={handleBack}
                    sx={{
                    backgroundColor: "#f0f2f3",
                    "&:hover": { backgroundColor: "#e5e7eb" },
                    }}
                    size="small"
                >
                    <ArrowBackIcon sx={{ fontSize: 20 }} />
                </IconButton>
            )}

                <Stack spacing={0} sx={{ flexGrow: 1, minWidth: 0}}>
                    <Typography variant='body2'
                        sx={{
                            fontWeight: 600,
                            color: "#fff",
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            flexWrap: "wrap",
                            mb: "2px"
                        }}
                    
                    >
                        Guia Python - ADS
                        <Chip 
                            label="IFPB"
                            size='small'
                            avatar={<Avatar src={Logo}/>}
                            sx={{
                                backgroundColor: "rgba(47,158,65,0.15)",
                                color: "primary.main",
                                fontWeight: 600,
                            }}
                        />
                        
                    </Typography>

                    <Typography variant='caption' 
                        sx={{
                            fontWeight: 600,
                            color: "#9f9f9f",
                            display: "flex",
                            alignItems: "start"
                        }}
                    >
                        Python do Zero - Da Teoria à Prática
                    </Typography>
                </Stack>
            </Box>
        </Paper>
    </>
 )
}

export default Header