import DogTemplate from "../components/templates/DogTemplate";
import useDog from "../hooks/useDog";

const Dog = () => {
  const { handleSubmit, onSubmit, register, errors, dogState } = useDog();
  return (
    <>
      <DogTemplate
        {...{ handleSubmit, onSubmit, register, errors, dogState }}
      />
    </>
  );
};

export default Dog;
