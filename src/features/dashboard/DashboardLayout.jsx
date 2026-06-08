import styled from "styled-components";
import { useRecentBookings } from "../bookings/useRecentBookings";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();

  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
