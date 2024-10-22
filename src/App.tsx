import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import References from './pages/References';
import Extracurriculars from './pages/Extracurriculars';
import Footer from './components/Footer';
import { styled } from 'styled-components';


const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 98vw;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

const Root = () => {
    return (
        <PageWrapper>
                <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/references" element={<References />} />
                    <Route path="/extracurriculars" element={<Extracurriculars />} />
                </Routes>
            </Container>
            <Footer />
        </PageWrapper>
    );
};

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

export default function App() {
    return <RouterProvider router={router} />;
}
