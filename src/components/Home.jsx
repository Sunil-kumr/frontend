import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple dashboard after login.</p>

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Go to Register
        </Link >

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
