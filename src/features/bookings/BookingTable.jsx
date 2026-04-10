import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";

function BookingTable() {
  const { bookings, isLoading, isError, error } = useBookings();

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <p role="alert">
        {error?.message ||
          "Could not load bookings. In Supabase: allow SELECT for the anon role on `bookings` (and related tables), and ensure foreign keys to `guests` and `cabins` exist."}
      </p>
    );

  const list = bookings ?? [];
  if (!list.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={list}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
