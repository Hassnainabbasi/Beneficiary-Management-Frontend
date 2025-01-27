import { Download } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

const StaffForm = () => {
  const [token, setToken] = useState("");
  const [beneficiaryInfo, setBeneficiaryInfo] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [detail ,setDetail] = useState('')
  const [data, setData] = useState('')

  const fetchBeneficiaryInfo = async () => {
    if (!token.trim()) {
      setError("Token is required to retrieve beneficiary info.");
      return;
    }
    setError("");
    try {
      const response = await fetch(`${BASE_URL}/auth/departmentStaff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenNo: token }),
      });
     console.log(response)
      const result = await response.json();
      console.log(result)
      setDetail(result)
      if (response.ok) {
        setBeneficiaryInfo(result.userData);
        setError("");
      } else {
        setBeneficiaryInfo(null);
        setError(result.message || "Failed to fetch beneficiary info");
      }
    } catch (error) {
      console.error("Error fetching beneficiary info:", error);
      setError("Server error. Please try again later.");
    }
  };

  const handleDownloadReceipt = () => {
    const receiptContent = `Receipt\n\nToken Number: ${detail.userData.tokenNo}\nStatus: ${data.data.updateStatus}\nRemarks: ${data.data.remarks}\n\nBeneficiary Information:\nName: ${detail.userData?.name}\nAddress: ${detail.userData?.address}\nCNIC: ${detail.userData?.cnic}\nAssistance Type: ${detail.userData?.purpose}`;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `Receipt_${token}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!remarks.trim()) {
      Swal.fire("Remarks are required before submitting.");
      return;
    }

    try {
      const payload = {
        userId: beneficiaryInfo?._id, 
        remarks,
        updateStatus: status,
      };

      // Make API call
      const response = await fetch(`${BASE_URL}/auth/userClear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      console.log(result)
      setData(result)

      if (response.ok) {
        setShowReceipt(true);
        Swal.fire("Assistance details updated successfully!");
        setToken("");
        setBeneficiaryInfo(null);
        setRemarks("");
        setStatus("In Progress");
      } else {
        alert(result.message || "Failed to update assistance details.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#374151",
          }}
        >
          Department Staff Form
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Scan Token
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter token"
                required
                style={{
                  flex: "1",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                }}
              />
              <button
                type="button"
                onClick={fetchBeneficiaryInfo}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Retrieve Info
              </button>
            </div>
            {error && (
              <p
                style={{
                  color: "red",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                {error}
              </p>
            )}
          </div>

          {beneficiaryInfo && (
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            >
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Name:</strong> {detail.userData.name}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Address:</strong> {detail.userData.address}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>CNIC:</strong> {detail.userData.cnic}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Assistance Type:</strong> {detail.userData.purpose}
              </p>
            </div>
          )}

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Update Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Remarks
            </label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter remarks or actions taken"
              rows={4}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            ></textarea>
          </div>

          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update Assistance
            </button>
          </div>
        </form>

        {/* {showReceipt && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            
            <img src="https://icon-library.com/images/receipts-icon/receipts-icon-12.jpg"  className="w-10" alt="" />
            <button
      onClick={handleDownloadReceipt}
      style={{
        textAlign : "center"
         }}
    >
      <Download size={16} />
       </button>
              </div>
        )} */}
        {showReceipt && (
  <div
    style={{
      marginTop: "1rem",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <button
      onClick={handleDownloadReceipt}
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
    >
      <Download size={16} style={{ marginRight: "0.5rem" }} />
      Download Receipt
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default StaffForm;
