import axios from "axios";

export const envoyerMail = async (champs) => {
  try {
    const res = await axios.post(
      "https://portfoliobackend-94z7.onrender.com/contact",
      { champs },
      { withCredentials: true }
    );
    const message = res?.data?.message;
    return { success: true, message };
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      "Tout est de notre fault! ressayez plus tard.";
    return { success: false, message };
  }
};
