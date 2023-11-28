// In a React component or a utility function

const fetchDataFromGoBackend = async () => {
  try {
      const response = await fetch("http://localhost:8080/api/data");
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      // Handle the received data as needed
  } catch (error) {
      console.error("Error:", error);
  }
};

export default fetchDataFromGoBackend;

