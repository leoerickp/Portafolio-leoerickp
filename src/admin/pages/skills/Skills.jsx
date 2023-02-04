import { SkillForm } from "./SkillForm";
import { getSkills, updateRegister } from "../../slices/skills/thunks";
import { setLimit, setOffset } from "../../slices/skills/skillsSlice";
import { ActionsButtons } from "../../components/ActionsButtons";
import { ListFrame } from "../../components/ListFrame";
import { useListFrame } from "../../hooks/use-list-frame";

const sTitle = "Skill";
const modelState = 'skills';
const getData = getSkills;
const DataForm = SkillForm;
export const Skills = () => {
    const { data, offset, editData, toggleData } = useListFrame({
        sTitle,
        modelState,
        updateRegister
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
                        <th scope="col" className="">Technology</th>
                        <th scope="col" className="d-none d-md-table-cell">Self rate</th>
                        <th scope="col" className="d-none d-md-table-cell">Amount Prjs.</th>
                        <th scope="col" className="">Image</th>
                        <th scope="col" className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //JSON.stringify(data)
                        data?.map((skill, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{offset + i + 1}</th>
                                    <td>{skill.technology}</td>
                                    <td className="d-none d-md-table-cell">{skill.selfRate}</td>
                                    <td className="d-none d-md-table-cell">{skill.amountPrjs}</td>
                                    <td><img src={skill.imgUrl} alt={skill.technology} className="rounded d-block img-tech" /></td>
                                    <td className="d-table-cell">
                                        <ActionsButtons editData={editData} toggleData={toggleData} index={i} isVisible={skill.isVisible} />
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