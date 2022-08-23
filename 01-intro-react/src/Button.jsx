// import PropTypes from "prop-type";

export function Button({ text }) {
  return (
    <button
      onClick={function () {
        console.log("Eventos en React");
      }}
    >
      {text}
    </button>
  );
}

// Button.propType = {
//   text: PropTypes.string.isRequired,
// };
