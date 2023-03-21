import { AppBar, Toolbar, Typography } from '@mui/material';
import ProgressBar from "../ProgressBar";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Typography variant="h4" gutterBottom>Learning Path</Typography>
                <ProgressBar />
            </Toolbar>
        </AppBar>
    )
}
export default Header;