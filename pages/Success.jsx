export default function Success() {
  const data = JSON.parse(localStorage.getItem("booking"));
  const id = Math.floor(Math.random() * 100000);

  return (
    <div>
      <h2>Seat Booked</h2>
      <p>Booking ID: {id}</p>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Mobile: {data?.mobile}</p>
    </div>
  );
}
