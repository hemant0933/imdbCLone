import React,{useState} from 'react';
import { AppBar, Toolbar,styled,Box, Typography, InputBase } from '@mui/material';
import { logoURL } from '../constant/constant';
import {Menu,BookmarkAdd, ExpandMore} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom';
// components
import HeaderMenu from './HeaderMenu';
import { routhPath } from '../constant/route';
const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > *{
        padding: 0 16px;
    }
    & > div{
        display: flex;
        align-items:center;
        cursor:pointer;
        & > p{
            font-size: 14px;
            font-weight: 600;
        }
    }
    & > p{
        font-size: 14px;
            font-weight: 600;
    }
`;

const InputSearchField = styled(InputBase)`
    background:#fff;
    height:30px;
    width: 55%;
    border-radius:5px;
`

const Logo =  styled('img')({
    width: 64,
    cursor: 'pointer',
})
const Header = () => {

    const [open,setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }

  return (
    <AppBar position='static'>
        <StyledToolBar>
            <Logo src={logoURL} alt="imageLogo" onClick={() => navigate(routhPath.home)}/>
            <Box onClick={handleClick}>
                <Menu />
                <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose}/>
            <InputSearchField/>
            <Typography>IMDB<Box component="span">Pro</Box></Typography>
            <Box>
                <BookmarkAdd/>
                <Typography>Watchlist</Typography>
            </Box>
            <Typography>EN</Typography>
            <ExpandMore/>
        </StyledToolBar>
    </AppBar>
  );
}

export default Header;
