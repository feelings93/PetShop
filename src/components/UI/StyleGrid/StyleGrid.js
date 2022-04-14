import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const StyleGrid = styled(DataGrid)(({ theme }) => ({
  // border: 0,
  color:
    theme.palette.mode === 'light'
      ? 'rgba(0,0,0,.85)'
      : 'rgba(255,255,255,0.85)',
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',

  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-columnHeaders': {
    background: '#f4f6f8',
    color: '#rgb(99, 115, 129)',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  // '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
  //   borderRight: `1px solid ${
  //     theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
  //   }`,
  // },
  // '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
  //   borderBottom: `1px solid ${
  //     theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
  //   }`,
  // },
  '& .MuiDataGrid-renderingZone': {
    maxHeight: 'none !important',
  },

  '& .MuiDataGrid-row': {
    maxHeight: 'none !important',
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0,0,0,.85)'
        : 'rgba(255,255,255,0.65)',
    lineHeight: 'unset !important',
    maxHeight: 'none !important',
    whiteSpace: 'normal',
    borderBottom: 'none',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    padding: 0,
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}));

export default StyleGrid;
