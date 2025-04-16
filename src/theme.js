import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Playfair Display', serif`,
    regina: {
      fontFamily: 'Meie Script, cursive',
      fontWeight: 'normal',
      fontSize: '1.5rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
    // Override MuiButton focus and active color
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#e2cebe',  
          },
          '&:hover': {
            backgroundColor: '#e2cebe',  
            color: 'black',
          },
        },
      },
    },
    
    MuiLink: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#e2cebe',  
          },
          '&:hover': {
            color: '#e2cebe',  
          },
        },
      },
    },
  
    MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e2cebe',  
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',  
            },
          },
        },
      },
      
   
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused' : {
            borderColor: '#e2cebe', 
          },
        },
      },
    },
  
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#e2cebe5e',  
          },
          '&.Mui-selected': {
            backgroundColor: '#e2cebe5e',
            color: 'black', 
          },
        },
      },
    },
  },
});

export default theme;
