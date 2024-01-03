import Typography from '@mui/material/Typography'
import logo from './logo1.svg'
import logo1 from './logo2.svg'
import './Logo.css'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="logoBlock">
                <img className="logo-1" src={logo} alt="Упсс..." />
                <img className="logo-2" src={logo1} alt="" />
            </div>
        </Typography>
    )
}
export default Logo
