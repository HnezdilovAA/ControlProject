import Menu from 'components/Menu/Menu'
import './AboutUs.css'
import Logo from 'components/Logo/Logo'
import CartHeader from 'components/SearchHeader/SearchHeader'
import GetGiftBlock from 'components/GetGiftBlock/GetGiftBlock'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import CenterBlockTravel from 'components/CenterBlockTravel/CenterBlockTravel'
import Footer from 'layout/Footer'
import CenterBlockContact from 'components/CenterBlockContact/CenterBlockContact'
import AboutUsContent from 'components/AboutUsContent/AboutUsContent'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <>
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

                <AboutUsContent />
                <Footer />
            </div>
        </>
    )
}
export default AboutUs
