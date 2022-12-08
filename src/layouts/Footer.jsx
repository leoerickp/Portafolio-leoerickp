import { NavLink } from "react-router-dom"


export const Footer = () => {
    return (
        <footer className="footer align-items-center">
            <dir className="d-flex justify-content-around m-0 p-0 pl-3 pt-2">
                <div>
                    <h5>About me</h5>
                    <ul className="m-2 p-0">
                        <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
                        <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h5>My stack</h5>
                    <ul className="m-2 p-0">
                        <li><NavLink className="nav-link" to="/frontend">Frontend tech</NavLink></li>
                        <li><NavLink className="nav-link" to="/backend">Backend tech</NavLink></li>
                        <li><NavLink className="nav-link" to="/others">Other knowledge</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h5>Others</h5>
                    <ul className="m-2 p-0">
                        <li><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
                        <li><NavLink className="nav-link" to="/photos">Photos</NavLink></li>
                        <li><NavLink className="nav-link" to="contact">Contact</NavLink></li>
                    </ul>
                </div>
            </dir>
            <p className="text-center m-0 bg-dark opacity-100">&copy; Leo Erick Pereyra Rodriguez - 2022</p>
        </footer>
    )
}
