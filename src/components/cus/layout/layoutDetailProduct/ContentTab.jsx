import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [color2, setColor2] = React.useState('#f2b203');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop: '20px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            TabIndicatorProps={{ style: { background: '#ff6b00' } }}
          >
            <Tab
              sx={{ color: '#676767', fontWeight: '900' }}
              label='Mô tả'
              value='1'
            />
            <Tab
              sx={{ color: '#676767', fontWeight: '900' }}
              label='Đánh giá'
              value='2'
            />
            <Tab
              sx={{ color: '#676767', fontWeight: 'bolder' }}
              label='Địa chỉ sản phẩm'
              value='3'
            />
          </TabList>
        </Box>
        <TabPanel value='1' style={{ backgroundColor: '#f9f9f9' }}>
          Item One
        </TabPanel>
        <TabPanel value='2' style={{ backgroundColor: '#f9f9f9' }}>
          Item Two
        </TabPanel>
        <TabPanel value='3' style={{ backgroundColor: '#f9f9f9' }}>
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
}
