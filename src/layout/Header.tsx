import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CenterBlockTravel from 'components/CenterBlockTravel/CenterBlockTravel'
import CartHeader from 'components/SearchHeader/SearchHeader'
import './Header.css'
import GetGiftBlock from 'components/GetGiftBlock/GetGiftBlock'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="wraper-container">
            <div className="container-header-photo">
                <Container maxWidth="xl" className="header-photo">
                    <Toolbar className="text_foto">
                        <Logo />
                        <Menu />
                        <CartHeader />
                        <GetGiftBlock />
                    </Toolbar>
                </Container>
            </div>
            <div className="CenterBlockTravelHeader">
                <CenterBlockTravel />
            </div>
        </div>
    )
}
export default Header
