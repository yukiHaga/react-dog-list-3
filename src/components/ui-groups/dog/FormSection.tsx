import {
  FormSection as StyledFormSection,
  Form,
  InputWrapper,
  TextInput,
  ErrorMessage,
  SubmitButton,
} from "../../../components/ui-groups/dog/styledDog";
import { UseDog } from "../../../hooks/useDog";

const FormSection = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}: Omit<UseDog, "dogState">) => {
  return (
    <StyledFormSection>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <TextInput
            type="text"
            placeholder="犬の名前を英語で入力してください"
            {...register("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputWrapper>
        <SubmitButton type="submit">検索</SubmitButton>
      </Form>
    </StyledFormSection>
  );
};

export default FormSection;
