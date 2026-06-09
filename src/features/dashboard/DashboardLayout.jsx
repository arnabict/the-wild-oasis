import styled from "styled-components";
import { useRecentBookings, useRecentStays } from "../bookings/useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

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
