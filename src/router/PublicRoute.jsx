import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../layouts";
import { Contact } from "../pages/Contact";
import { Experience } from "../pages/Experience";
import { Frameworks } from "../pages/Frameworks";
import { Home } from "../pages/Home";
import { Languages } from "../pages/Languages";
import { Oknoledge } from "../pages/Oknowledge";
import { Photos } from "../pages/Photos";
import { Projects } from "../pages/Projects";
import { Resume } from "../pages/Resume";

export const PublicRoute = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/backend" element={<Frameworks />} />
                    <Route path="/frontend" element={<Languages />} />
                    <Route path="/others" element={<Oknoledge />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
