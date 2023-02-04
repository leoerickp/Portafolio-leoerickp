import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormContext } from "../context/form/FormContext";
import { LabeledCardForm } from "./LabeledCardForm";
import { SaveButtonsBar } from "./SaveButtonsBar";

export const FrameForm = ({ children, pathname, options: { getDataForSaving, updateRegister, createRegister, handleSubmit, disabled = false } }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { showSaveDialog, closeForm, formValues } = useContext(FormContext);


  const saveData = (data) => {
    showSaveDialog('Confirmation alert', 'Really, do you like to save the information?', async () => {
      try {
        const dataForSaving = await getDataForSaving(data);
        if (formValues) {
          dispatch(updateRegister(userData.token, formValues._id, dataForSaving));
        }
        else {
          dispatch(createRegister(userData.token, dataForSaving));
        }
        closeForm();
      } catch (error) {

      }
    });
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LabeledCardForm >
      <form onSubmit={handleSubmit(saveData)}>
        {children}
        <SaveButtonsBar disabled={disabled} />
      </form>
    </LabeledCardForm >
  )
}
