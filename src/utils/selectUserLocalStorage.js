export const getUserFromLocalStorage = () =>
  localStorage.getItem("token") || null;
