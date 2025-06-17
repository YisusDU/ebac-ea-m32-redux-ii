import { SetStateAction, useState } from "react";
import validateFields from "./useValidateFields";
import { Guide } from "../components/GuideReguister/types";

const useUpdateForm = (
  guideIndex: number,
  currentGuide: Guide,
  setGuides: React.Dispatch<SetStateAction<Guide[]>>
) => {
  //Set errors from the form
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //Validate the form on submit
  const handleValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    //validate all the fields empty
    const requiredFields = ["guide__date", "guide__hour", "guide__status"];
    const { isValid } = validateFields(requiredFields, formData, setErrors);

    // console.log("Formulario válido:", validForm ? "true" : "false");
    if (!isValid) {
      e.preventDefault();
      return;
    }

    //Take the info into an object
    const newGuideStage = {
      guide__date: (formData.get("guide__date") as string)?.trim() || "",
      guide__status: (formData.get("guide__status") as string)?.trim() || "",
      guide__hour: (formData.get("guide__hour") as string)?.trim() || "",
    };

    /* console.log(newGuideStage); */

    //Update the main table of guides
    setGuides((prev) =>
      prev.map((guide, idx) =>
        idx === guideIndex
          ? { ...guide, guide__stage: [...guide.guide__stage, newGuideStage] }
          : guide
      )
    );
    alert("Guía registrada con éxito");

    //clean the form
    form.reset();
  };
  return { handleValidate, errors, setErrors };
};

export { useUpdateForm };
