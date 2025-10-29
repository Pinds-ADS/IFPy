import { createTheme } from "@mui/material/styles";

const greenMain = "#2f9e41";
const greenSoft = "rgba(47,158,65,0.12)";
const redMain = "#cd191e";

const theme = createTheme({
  palette: {
    primary: {
      main: greenMain,
    },
    secondary: {
      main: redMain,
    },
    background: {
      default: "#f5f6f7",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#5f5f5f",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif",
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "-0.02em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          padding: "12px 18px",
          boxShadow: "0 8px 20px rgba(47,158,65,0.28)",
          "&:hover": {
            boxShadow: "0 10px 24px rgba(47,158,65,0.38)",
            transform: "translateY(-1px)",
            transition: "0.15s",
          },
        },
        outlined: {
          backgroundColor: "#fff",
          borderColor: greenMain,
          "&:hover": {
            backgroundColor: greenSoft,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid #e5e7eb",
          boxShadow: "0 12px 32px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.03)",
          transition: "all .15s ease",
          "&:hover": {
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.04)",
            borderColor: greenMain,
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
