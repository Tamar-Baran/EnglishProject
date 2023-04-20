import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'pink',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    position:'center',
    color: 'theme.palette.text.secondary',
    height: 60,
  }));

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: '102%',
        maxWidth: 10000,
        
        position: 'relative',
        overflow: 'auto',
        height: '100%',
        maxHeight: 400,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
     
        <li >
          <ul>
            {/* <ListSubheader></ListSubheader> */}
            <Box sx={{ width: '85%', color: 'pink', margin:'5%'}}>
            <Stack spacing={2}>
                <Item><spam>Item 1</spam></Item>
                <Item> </Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            </Box>
          </ul>
        </li>
      
    </List>
  );
}





