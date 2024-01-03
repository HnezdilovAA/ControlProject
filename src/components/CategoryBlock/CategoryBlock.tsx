import './CategoryBlock.css'

type Props = {}
const CategoryBlock = (props: Props) => {
    return (
        <div className="CategoryBlockWraper">
            <div className="CategoryBlockMenu">
                <ul>
                    <li>Category name</li>
                    <li>Category name</li>
                    <li>Category name</li>
                    <li>Category name</li>
                    <li>Category name</li>
                    <li>Category name</li>
                </ul>
                <hr />
            </div>
            <div className="CategoryBlockItemAll">
                <div className="CategoryBlockItemOne">
                    <div className="CategoryBlockItem__1-2">
                        <div className="CategoryBlockItem-1">
                            <img src="./images/Category_big_1.jpg" alt="#" />
                            <h6>1 Month Ago </h6>
                            <h3>
                                Tick one more destination off of your bucket
                                list with one of our most popular vacations in
                                2022
                            </h3>
                            <p>
                                lit. Phasellus aliquet nibh id iaculis pharetra.
                                Maecenas eleifend sed ex. Donec quis magna sed
                                felis elementum blandit nec quis sem. Maecen.
                            </p>
                            <div className="btns-wrap-category">
                                <button>View Post</button>
                            </div>
                        </div>

                        <div className="CategoryBlockItem-2">
                            <div className="CategoryBlockItem-2-row">
                                <div className="CategoryBlockItem-2-1">
                                    <img
                                        src="./images/Category_small_1.jpg"
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
                                        src="./images/Category_small_2.jpg"
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
                        </div>
                    </div>
                </div>

                <div className="CategoryBlockItemSecond">
                    <h3>Manga reads</h3>
                    <div>
                        <div className="CategoryBlockItemSecond-row">
                            <div>
                                <img
                                    src="./images/Category_rigth_column-1-1.jpg"
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
                                    src="./images/Category_rigth_column-1-2.jpg"
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
    )
}
export default CategoryBlock
