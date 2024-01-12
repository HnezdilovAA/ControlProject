import PostList from 'components/Posts/PostList'
import CategoryBlock from 'components/CategoryBlock/CategoryBlock'
import Slider from 'components/Slider/Slider'
import TravelBlock from 'components/TravelBlock/TravelBlock'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
// import Footer from './Footer'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <PostList />
            <TravelBlock />
            <Slider />
            <CategoryBlock />
            <Footer />
        </>
    )
}
export default Home
