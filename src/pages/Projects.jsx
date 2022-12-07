import { useLayoutEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from '../../data/projects';

export const Projects = ({ pathname }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section className="section-esp" >
            <h1>Projects</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="row gap-3 justify-content-center">
                        {
                            projects.map(project => (
                                <ProjectCard key={project.id} {...project} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
