import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");

      console.log(data);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Unable to connect to the server");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef7f2, #dff3e8)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "32px",
              color: "#1f6f4a",
            }}
          >
            Create your account
          </h1>

          <p style={{ margin: 0, color: "#666" }}>
            Join Thrive and start your journey.
          </p>
        </div>

        <form onSubmit={handleSignup}>
          <label style={labelStyle}>Full Name</label>

          <input
            style={inputStyle}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label style={labelStyle}>Email</label>

          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label style={labelStyle}>Password</label>

          <input
            style={inputStyle}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "20px",
              border: "none",
              borderRadius: "10px",
              background: "#1f6f4a",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <span style={{ color: "#1f6f4a", fontWeight: "600" }}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "7px",
  marginTop: "16px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "12px 14px",
  border: "1px solid #d5d5d5",
  borderRadius: "9px",
  fontSize: "15px",
  outline: "none",
};

export default Signup;