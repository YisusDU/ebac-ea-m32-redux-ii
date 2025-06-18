import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./useStoreTypes";
import { addGuide } from "../state/guides.slice";
import validateFields from "./useValidateFields";
import { Guide } from "../types/guides";

const useGuideRegister = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //Redux dispatch:
  const dispatch = useAppDispatch();
  const guides = useAppSelector((state) => state.guides.guides);

  const handleValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    //Validate the guide number
    const guideNumber = (formData.get("guide__number") as string)?.trim();

    const existingGuide = guides.some(
      (guide: Guide) => guide["guide__number"] === guideNumber
    );
    // console.log("existingGuide", existingGuide);

    if (existingGuide) {
      // console.log("existingGuide", existingGuide);
      // console.log("The guide number is valid?", isValidNumber)
      setErrors({ guide__number: "El número de guía ya existe" });
      return;
    } else {
      // console.log("the guide number is valid")
    }

    //validate all the fields empty
    const requiredFields = [
      "guide__number",
      "guide__origin",
      "guide__destination",
      "guide__recipient",
      "guide__date",
      "guide__hour",
      "guide__status",
    ];

    const { isValid } = validateFields(requiredFields, formData, setErrors);

    //Validate if the form is valid to go ahead
    // console.log("Formulario válido:", validForm ? "true" : "false");
    if (!isValid) {
      e.preventDefault();
      return;
    }

    //Take the info into an object
    const guideData: Guide = {
      guide__number: (formData.get("guide__number") as string)?.trim() || "",
      guide__origin: (formData.get("guide__origin") as string)?.trim() || "",
      guide__destination:
        (formData.get("guide__destination") as string)?.trim() || "",
      guide__recipient:
        (formData.get("guide__recipient") as string)?.trim() || "",
      guide__stage: [
        {
          guide__date: (formData.get("guide__date") as string)?.trim() || "",
          guide__status:
            (formData.get("guide__status") as string)?.trim() || "",
          guide__hour: (formData.get("guide__hour") as string)?.trim() || "",
        },
      ],
    };

    //Redux dispatch:
    dispatch(addGuide(guideData));

    alert("Guía registrada con éxito");

    //clean the form
    form.reset();
  };
  return { errors, handleValidate, setErrors };
};

export { useGuideRegister };
