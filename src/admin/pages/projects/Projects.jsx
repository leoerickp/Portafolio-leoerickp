import { format, parseISO } from "date-fns";
import { deleteRegister, getProjects, updateRegister } from "../../slices/projects/thunks";
import { setLimit, setOffset } from "../../slices/projects/projectsSlice";
import { ActionsButtons } from "../../components/ActionsButtons";
import { ProjectForm } from "./ProjectForm";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";

const sTitle = "Project";
const modelState = 'projects';
const getData = getProjects;
const DataForm = ProjectForm;
export const Projects = () => {
    const { data, offset, editData, deleteData, toggleData } = useListFrame({
        sTitle,
        modelState,
        updateRegister,
        deleteRegister
    });

    return (
        <ListFrame options={
            {
                sTitle,
                modelState,
                getData,
                setOffset,
                setLimit,
                updateRegister,
                DataForm
            }
        }>
            <table className="table table-hover table-responsive align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="">#</th>
                        <th scope="col">Project name</th>
                        <th scope="col" className="d-none d-md-table-cell">Company</th>
                        <th scope="col">Year</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((project, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td>{project.projectTitle.en ? project.projectTitle.en : project.projectTitle.es}</td>
                                    <td className="d-none d-md-table-cell">{project.company.en ? project.company.en : project.company.es}</td>
                                    <td>{format(parseISO(project.projectDate), "yyyy")}</td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} deleteData={deleteData} index={i} isVisible={project.isVisible} />
                                    </td>

                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
        </ListFrame>
    )
}
