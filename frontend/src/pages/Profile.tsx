import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");

      // No token = not logged in
      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        // Token invalid or expired
        if (!response.ok) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error("Profile error:", error);
        alert("Unable to connect to the server");
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Loading profile...</h2>
      </div>
    );
  }

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
          maxWidth: "450px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1f6f4a",
            }}
          >
            My Profile
          </h1>

          <p style={{ color: "#666" }}>
            Your Thrive account details
          </p>
        </div>

        {user && (
          <div>
            <div style={infoBoxStyle}>
              <strong>Name</strong>
              <p>{user.name}</p>
            </div>

            <div style={infoBoxStyle}>
              <strong>Email</strong>
              <p>{user.email}</p>
            </div>

            <div style={infoBoxStyle}>
              <strong>User ID</strong>
              <p>{user.id}</p>
            </div>

            <div style={infoBoxStyle}>
              <strong>Account Created</strong>
              <p>
                {new Date(user.created_at).toLocaleString()}
              </p>
            </div>

            <button
              onClick={handleLogout}
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
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const infoBoxStyle = {
  background: "#f7faf8",
  padding: "12px 15px",
  borderRadius: "10px",
  marginBottom: "12px",
  color: "#333",
};

export default Profile;