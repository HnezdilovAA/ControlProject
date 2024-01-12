import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import ContactsPageAll from 'pages/ContactsPageAll/ContactsPageAll'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            {/* <Header /> */}

            <Container
                maxWidth="xl"
                sx={{
                    padding: '30px 0px 0px 0px',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<ContactsPageAll />} />
                </Routes>

                {/* <Main /> */}
            </Container>
            {/* <Footer /> */}
        </StyledEngineProvider>
    )
}
export default App
