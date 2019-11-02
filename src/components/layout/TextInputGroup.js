import React from "react";
import PropTypes from "prop-types";

export default function TextInputGroup({
	label,
	name,
	value,
	placeholder,
	type,
	onChange,
	error
}) {
	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<input
				className={error ? "error" : null}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && <div className="error__message">{error}</div>}
		</React.Fragment>
	);
}

TextInputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
};

TextInputGroup.defaultProps = {
	type: "text"
};
