import './CategorySecond.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import CartHeader from 'components/SearchHeader/SearchHeader'
import GetGiftBlock from 'components/GetGiftBlock/GetGiftBlock'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Footer from 'layout/Footer'

type Props = {}
const CategorySecond = (props: Props) => {
    return (
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

            <div className="CategoryBlockWraper">
                <div className="CategoryBlockMenu">
                    <ul>
                        <Button color="inherit">
                            <Link to="/categoryone">
                                <li>Category 1</li>
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/categorysecond">
                                {' '}
                                <li className="BorderBottonClick">
                                    Category 2
                                </li>
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/categorythird">
                                <li>Category 3</li>
                            </Link>
                        </Button>
                    </ul>
                    <hr />
                </div>
                <div className="CategoryBlockItemAll">
                    <div className="CategoryBlockItemOne">
                        <div className="CategoryBlockItem__1-2">
                            <div className="CategoryBlockItem-1">
                                <img src="./images/itemPhoto1.jpg" alt="#" />
                                <h6>1 Month Ago </h6>
                                <h3>
                                    Tick one more destination off of your bucket
                                    list with one of our most popular vacations
                                    in 2022
                                </h3>
                                <p>
                                    lit. Phasellus aliquet nibh id iaculis
                                    pharetra. Maecenas eleifend sed ex. Donec
                                    quis magna sed felis elementum blandit nec
                                    quis sem. Maecen.
                                </p>
                                <div className="btns-wrap-category">
                                    <button>View Post</button>
                                </div>
                            </div>

                            <div className="CategoryBlockItem-2">
                                <div className="CategoryBlockItem-2-row">
                                    <div className="CategoryBlockItem-2-1">
                                        <img
                                            src="./images/Category_small_2.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="CategoryBlockItem-2-2">
                                        <p>Akame Ga Kill:</p>
                                        <p>Season finale</p>
                                        <p>21 March 2021</p>
                                    </div>
                                </div>

                                <div className="CategoryBlockItem-2-row">
                                    <div className="CategoryBlockItem-2-1">
                                        <img
                                            src="./images/Category_small_1.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="CategoryBlockItem-2-2">
                                        <p>Naruto Uzumaki:</p>
                                        <p>Hidden Village</p>
                                        <p>21 March 2021</p>
                                    </div>
                                </div>

                                <div className="CategoryBlockItem-2-row">
                                    <div className="CategoryBlockItem-2-1">
                                        <img
                                            src="./images/Category_small_4.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="CategoryBlockItem-2-2">
                                        <p>Love juice Season</p>
                                        <p>Priemere</p>
                                        <p>21 March 2021</p>
                                    </div>
                                </div>

                                <div className="CategoryBlockItem-2-row">
                                    <div className="CategoryBlockItem-2-1">
                                        <img
                                            src="./images/Category_small_3.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="CategoryBlockItem-2-2">
                                        <p>Love juice Season</p>
                                        <p>Priemere</p>
                                        <p>21 March 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="CategoryBlockItemSecond">
                        <h3>Manga reads</h3>
                        <div>
                            <div className="CategoryBlockItemSecond-row">
                                <div>
                                    <img
                                        src="./images/Category_rigth_column-1-2.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div className="CategoryBlockItemSecondText">
                                    <p>
                                        <p>More destination.</p>
                                        <p>Popular vacations in 2021 year</p>
                                    </p>
                                    <br />
                                    <p>21 March 2021</p>
                                </div>
                            </div>

                            <div className="CategoryBlockItemSecond-row">
                                <div>
                                    <img
                                        src="./images/Category_rigth_column-1-1.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <p>More destination.</p>
                                        <p>Popular vacations in 2021 year</p>
                                    </p>
                                    <br />
                                    <p className="CategoryBlockItemSecondData">
                                        21 March 2021
                                    </p>
                                </div>
                            </div>

                            <div className="CategoryBlockItemSecond-row">
                                <div>
                                    <img
                                        src="./images/Category_rigth_column-1-3.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <p>More destination.</p>
                                        <p>Popular vacations in 2021 year</p>
                                    </p>
                                    <br />
                                    <p>21 March 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CategorySecond
