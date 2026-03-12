import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: 200px;
  width: 100%;
`;

function Loading() {
  return (
    <LoadingDiv>
      <CircularProgress sx={{ color: "var(--primary-orange)" }} />
    </LoadingDiv>
  );
}

export default Loading;
