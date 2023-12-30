import Button from '@mui/material/Button'
import './Menu.css'

type Props = {}

function Menu({}: Props) {
    return (
        <>
            <div className="header-menu">
                <Button color="inherit">DESTINATIONS</Button>
                <Button color="inherit">FOOD</Button>
                <Button color="inherit">WELL BEING</Button>
                <Button color="inherit">SPORT</Button>
                <Button color="inherit">FAMILYt</Button>
                <Button color="inherit">LIFESTYLE</Button>
            </div>
        </>
    )
}
export default Menu
