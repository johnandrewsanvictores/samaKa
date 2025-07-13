import api from "../../axious.js";

export const createBarangayAccount = async ({ barangayName, firstName, lastName, username, email, password }) => {
  return api.post(
    "/barangay/create-account",
    { barangayName, firstName, lastName, username, email, password },
    { withCredentials: true }
  );
};

export const fetchBarangays = async () => {
  const { data } = await api.get("/barangay");
  return data.barangays;
}; 