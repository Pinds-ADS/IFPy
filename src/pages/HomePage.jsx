import Header from "../components/Header"
import {Box, Typography, Grid, Card, CardActionArea, Chip, CardContent} from '@mui/material'
import Logo from '../assets/IFPyLogo.svg'
import { useNavigate } from "react-router-dom"


function HomePage() {
    const navigate = useNavigate()

    return (
        <Box sx={{ backgroundColor: "#212224", flexGrow: 1, minHeight: "100vh"}} >
            <Header/>

            <Box mt={10} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                maxHeight: '900px', 
               
            }}>
                
                <Box
                    component="img"
                    sx={{
                        height: 150,
                        width: 150,
                        maxHeight: { xs: 200, md: 150 },
                        maxWidth: { xs: 250, md: 150 },
                    }}
                    alt="Logo da Guia Python."
                    src={Logo}
                />

                <Typography variant="h2" color="#fff" mt={5} maxWidth={"600px"} >
                    &lt; Python do Zero / &gt;
                </Typography>

                <Typography variant="body1" color="#9d9d9d" mt={5} sx={{
                    maxWidth: "650px",
                    textAlign: "center",
                    fontSize: "16px"
                    
                }}>
                    Comece sua jornada em Python aqui. Este guia foi feito para você, calouro(a), aprender o básico no seu próprio ritmo e sem pressão. Vamos lá?
                </Typography>

                <Grid container spacing={3} mt={5} display={"flex"} flexDirection={"column"}>
                    <Grid item xs={false} md={8} maxWidth={"500px"}>
                        <CardActionArea sx={{
                            borderRadius: "5",
                            height: "100%"
                        }}
                        onClick={() => navigate("/instructions")
                        }>
                            <Card sx={{
                                backgroundColor: "#1a1a1a",
                                borderRadius: 2,
                                border: "1px solid #5c5c5c",
                                height: "100%",
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Chip size="small"
                                        label="Teoria"
                                        sx={{
                                        backgroundColor: "rgba(47,158,65,0.15)",
                                        color: "#2f9e41",
                                        fontWeight: 800,
                                        fontSize: "0.8rem",
                                        borderRadius: "8px",
                                        mb: 2,
                                    }}/>

                                    <Typography variant="h5"
                                        sx={{
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                        mb: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "#fff"
                                    }}>
                                        Estudar a Base
                                    </Typography>

                                    <Typography variant="body2" sx={{ 
                                        color: "text.secondary", lineHeight: 1.3 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item spacing={1} xs={12} md={8} maxWidth={"500px"}>
                        <CardActionArea sx={{
                            borderRadius: "5",
                            height: "100%"
                        }}
                        onClick={() => navigate("/")
                        }>
                            <Card sx={{
                                backgroundColor: "#1a1a1a",
                                borderRadius: 2,
                                border: "1px solid #5c5c5c",
                                height: "100%",
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Chip size="small"
                                        label="Prática"
                                        sx={{
                                        backgroundColor: "rgba(47,158,65,0.15)",
                                        color: "#2f9e41",
                                        fontWeight: 800,
                                        fontSize: "0.8rem",
                                        borderRadius: "8px",
                                        mb: 2,
                                    }}/>

                                    <Typography variant="h5"
                                        sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "#fff"
                                    }}>
                                        Fazer exercícios
                                    </Typography>

                                    <Typography variant="body2" sx={{ 
                                        color: "text.secondary", lineHeight: 1.3 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora, dale, dele, dele,
                                        doli.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

export default HomePage