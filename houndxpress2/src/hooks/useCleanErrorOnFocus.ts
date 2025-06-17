//Clean errors at try it again
const useCleanErrorOnFocus =
  (
    errors: { [key: string]: string },
    setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
  ) =>
  (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

export { useCleanErrorOnFocus };
