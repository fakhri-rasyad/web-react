// import { HelloButton } from "../app/components/buttons/HelloButton";
export default function Home() {
  return (
    <section
      style={{
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "280px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Welcome to my App</h1>
      <HelloButton message="Click Me" />
      <HelloButton message="Hello" />
      {/* <button
        style={{
          padding: "8px",
          width: "250px",
        }}
      >
        Click Me
      </button> */}
    </section>
  );
}

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
