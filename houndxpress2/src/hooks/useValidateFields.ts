const validateFields = (
  fields: string[],
  formaData: FormData,
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
) => {
  const newErrors: { [key: string]: string } = {};
  fields.forEach((field) => {
    const value = (formaData.get(field) as string)?.trim();
    if (!value) {
      newErrors[field] = "Este campo es obligatorio";
    }
  });
  setErrors(newErrors);

  return {
    isValid: Object.keys(newErrors).length === 0,
  };
};

export default validateFields;
