export default function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const finalDate = `${day}.${month}`;
  return finalDate;
}
