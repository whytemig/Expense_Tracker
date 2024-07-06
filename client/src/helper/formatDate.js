export function formatDate(timestamp) {
  const date = new Date(parseInt(timestamp)); // Parse the timestamp to ensure it's an integer representing milliseconds
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-CA", options);
}

export const formatDateHelper = (dateString) => {
  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // Adjust for local time zone
  return date.toISOString().split("T")[0]; // Return date in yyyy-MM-dd format
};

// Example usage:
const timestamp = 1704067200000;
const formattedDate = formatDate(timestamp);
console.log(formattedDate); // Output: "12 Dec 2023"
