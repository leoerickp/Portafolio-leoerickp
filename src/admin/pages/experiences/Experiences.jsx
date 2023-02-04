import { format, parseISO } from "date-fns";
import { ActionsButtons } from "../../components/ActionsButtons";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";
import { setLimit, setOffset } from "../../slices/experience/experiencesSlice";
import { getExperiences, updateRegister } from "../../slices/experience/thunks";
import { ExperienceForm } from "./ExperienceForm";

const sTitle = "Experience";
const modelState = 'experiences';
const getData = getExperiences;
const DataForm = ExperienceForm;
const childInfoRoute = `/admin/positions`;
export const Experiences = () => {
    const { data, offset, editData, infoData, toggleData } = useListFrame({
        sTitle,
        modelState,
        updateRegister,
        childInfoRoute
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
                        <th scope="col">#</th>
                        <th scope="col" className="d-none d-md-table-cell">Code</th>
                        <th scope="col">Company name</th>
                        <th scope="col" className="d-none d-md-table-cell">Updated date</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((experience, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td className="d-none d-md-table-cell">{experience.company}</td>
                                    <td>{experience.companyName.en ? experience.companyName.en : experience.companyName.es}</td>
                                    <td className="d-none d-md-table-cell">{format(parseISO(experience.updatedDate), "dd/MM/yyyy hh:mm:ss")}</td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} infoData={infoData} index={i} isVisible={experience.isVisible} />
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