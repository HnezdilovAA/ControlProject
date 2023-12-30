import { Container } from '@mui/material'
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
        </Container>
    )
}
export default Main
