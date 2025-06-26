import axios from "axios";

const API_BASE = "http://20.244.56.144/evaluation-service";
const clientID = "7a0b5875-a812-494e-b6cc-17e39c35b16b";
const clientSecret = "pvrbbehRQhkeNZbh";

export const getAuthToken = async () => {
  try {
    const response = await axios.post(`${API_BASE}/auth`, {
      email: "rawirishm@abc.edu",
      name: "ram Krishna",
      roline: "aslib",
      accessCode: "agakxc",
      clientID,
      clientSecret,
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};
