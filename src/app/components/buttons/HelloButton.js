const HelloButton = ({ message }) => {
  return (
    <button
      style={{
        padding: "8px",
        width: "250px",
      }}
    >
      {message}
    </button>
  );
};

export default HelloButton;
