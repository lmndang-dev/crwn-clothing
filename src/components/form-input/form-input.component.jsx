import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* Move up the label to the top of the input field when the user selected the input */}
      <Input
        {...otherProps} // Spread operator to pass all other props to the input
        // This will include type, required, onChange, name, value, etc.
      />

      {/* The group class is used to style the input and label together */}
      {/* The label will only be shown if the label prop is passed */}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
