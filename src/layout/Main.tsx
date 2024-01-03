import { Container } from '@mui/material'
import CategoryBlock from 'components/CategoryBlock/CategoryBlock'
import Slider from 'components/Slider/Slider'
import TravelBlock from 'components/TravelBlock/TravelBlock'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                padding: '30px 0px 0px 0px',
            }}
        >
            <Home />
            <TravelBlock />
            <Slider />
            <CategoryBlock />
        </Container>
    )
}
export default Main
