export const fetchKR = async () => {
  try {
    const response = await fetch("http://localhost:3030/api/KR");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchUS = async () => {
  try {
    const response = await fetch("http://localhost:3030/api/US");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchJP = async () => {
  try {
    const response = await fetch("http://localhost:3030/api/JP");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchCN = async () => {
  try {
    const response = await fetch("http://localhost:3030/api/CN");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
