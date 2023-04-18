import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";

import {Stack,MenuList,MenuItem,Popper,Paper,Grow,ClickAwayListener,Button}from '@mui/material';
import Typography from '@mui/material/Typography';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event,subject) => {
   
    console.log(subject)
    navigate(`/${subject}`);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      
      <div>
        <Button
         style={{ color: 'white',margin:16 }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}

        >
        
          <Button  style={{ color: 'white',margin:16 }} onMouseOver={handleToggle}><Typography textAlign="center" >lessons</Typography></Button>
     </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={(e)=>{handleClose(e,"vocabulary")}}>Vocabulary</MenuItem>
                  <MenuItem onClick={(e)=>handleClose(e,"spelling")}>Spelling</MenuItem>
                  <MenuItem onClick={(e)=>handleClose(e,"grammer")}>Grammer</MenuItem>
                  <MenuItem onClick={(e)=>handleClose(e,"reading")}> Reading</MenuItem>
                  <MenuItem onClick={(e)=>handleClose(e,"pronounce")}>Pronounce</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
