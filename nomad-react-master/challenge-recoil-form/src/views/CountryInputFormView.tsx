import {SubmitHandler, useForm} from "react-hook-form";
import {
  CountryForm,
  CountryFormButton,
  CountryInputErrorText,
  CountryInputText
} from "../styles/CountryInputFormViewStyle";

interface CountryInputFormViewProps {
  addWannaGoCountry: (name: string) => void;
}

interface CountryInput {
  name: string;
}

const COUNTRY_FIELD_NAME = "name";

function CountryInputFormView({addWannaGoCountry}: CountryInputFormViewProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm<CountryInput>({
    defaultValues: {name: ""}
  });

  const onValidSubmit: SubmitHandler<CountryInput> = (data) => {
    addWannaGoCountry(data.name);
    resetField(COUNTRY_FIELD_NAME);
  }

  return (
    <>
      <CountryForm onSubmit={handleSubmit(onValidSubmit)}>
        <CountryInputText
          {...register(COUNTRY_FIELD_NAME, {required: "🫠 required!"})}
          type="text"
          placeholder="이름"
        />
        {
          errors.name === undefined
            ? null
            : <CountryInputErrorText>
                {errors.name?.message}
              </CountryInputErrorText>
        }
        <CountryFormButton>가자!</CountryFormButton>
      </CountryForm>
    </>
  );
}

export default CountryInputFormView;
