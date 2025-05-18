import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* Move up the label to the top of the input field when the user selected the input */}
      <input
        className="form-input"
        {...otherProps} // Spread operator to pass all other props to the input
        // This will include type, required, onChange, name, value, etc.
      />

      {/* The group class is used to style the input and label together */}
      {/* The label will only be shown if the label prop is passed */}
      {label && (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : null
          } form-input-label`}
          // The label will have class shrink when the input has a value
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
