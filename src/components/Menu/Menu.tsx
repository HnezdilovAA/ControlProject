import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './Menu.css'

type Props = {}

function Menu(props: Props) {
    return (
        <>
            <div className="header-menu">
                <Button color="inherit">
                    <Link to="/">HOME</Link>
                </Button>
                <Button color="inherit">FOOD</Button>
                <Button color="inherit">SPORT</Button>
                <Button color="inherit">
                    <Link to="/category">CATEGORY</Link>
                </Button>

                <Button color="inherit">
                    <Link to="/aboutus">ABOUT US</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/contacts">CONTACT</Link>
                </Button>
            </div>
        </>
    )
}
export default Menu
