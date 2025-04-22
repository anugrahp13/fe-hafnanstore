// Helper untuk handle encrypted localStorage
export const setPaymentData = (data: object) => {
  const encrypted = btoa(JSON.stringify(data));
  localStorage.setItem("currentProduct", encrypted);
};

export const getPaymentData = () => {
  const data = localStorage.getItem("currentProduct");
  return data ? JSON.parse(atob(data)) : null;
};
