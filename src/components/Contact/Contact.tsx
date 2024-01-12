import Menu from 'components/Menu/Menu'
import './Contact.css'
import Logo from 'components/Logo/Logo'
import CartHeader from 'components/SearchHeader/SearchHeader'
import GetGiftBlock from 'components/GetGiftBlock/GetGiftBlock'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import CenterBlockTravel from 'components/CenterBlockTravel/CenterBlockTravel'
import Footer from 'layout/Footer'
import CenterBlockContact from 'components/CenterBlockContact/CenterBlockContact'

type Props = {}
const Contact = (props: Props) => {
    return (
        <>
            {' '}
            <div className="wraper-all-page">
                <div className="wraper-container-headercenter">
                    <div className="wraper-container">
                        <div className="wraper-contact-header">
                            <Container maxWidth="xl">
                                <Toolbar>
                                    <div>
                                        <Logo />
                                    </div>
                                    <div className="menu-contact">
                                        <Menu />
                                    </div>
                                    <div className="cart-contact">
                                        <CartHeader />
                                    </div>
                                    <div>
                                        <div>
                                            <GetGiftBlock />
                                        </div>
                                    </div>
                                </Toolbar>
                            </Container>
                        </div>
                    </div>
                </div>

                <CenterBlockContact />
                <Footer />
            </div>
        </>
    )
}
export default Contact
