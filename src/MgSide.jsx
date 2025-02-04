import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import React from 'react'
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function MgSide() {

    //동적 라우팅
    const navigate = useNavigate();

    const navS6 =()=>{
        navigate("/gych");
    }

  return (
    <Box color= {"black"}  sx={{height:"98vh"}} >
    <Sidebar >
        <Menu>
            <MenuItem component={<Link to="/" />}> 404 NOT COFFEE </MenuItem>
            <MenuItem onClick={navS6} > 경영철학 </MenuItem>
            
        </Menu>
    </Sidebar>
    </Box>
  )
}

export default MgSide