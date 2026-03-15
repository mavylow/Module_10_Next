import styled from "styled-components";
import {Frame} from "@components/FrameWrapper/index.styled";

export const PostFrame = styled(Frame)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: none;

`;

export const PostArticle = styled.article`
  width: 100%;
  font-size: 16px;

  .frame {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h2 {
    font-size: 16px;
  }

  h3,
  p {
    font-size: clamp(14px, 3vw, 20px);
  }

  span {
    font-size: clamp(12px, 1.5vw, 16px);
  }

  label,
  input::placeholder {
    font-size: 14px;
  }



    &:last-child ${PostFrame} {
    border-bottom: 2px solid var(--border-color);
  }

  @media (max-width: 375px) {
    svg {
      height: 18px;
    }
  }
`;

export const WithoutComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;



export const PostHeader = styled.div`
  display: grid;
  grid-template-rows: 24px 1fr;
  grid-template-columns: 48px 1fr;

  h2,
  time {
    padding-left: min(1em, 3%);
    align-self: center;
  }

  time {
    color: var(--light-text-color);
  }
`;

export const PostAvatar = styled.img`
  height: 48px;
  width: 48px;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
  object-fit: cover;
  grid-row: 1 / span 2;
`;


export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: 24px;
`;

export const Likes = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: fit-content
`;

export const Comments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PostComments = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  gap: 16px;
`;

export const AddComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    width: 100%;
    height: 58px;
  }

  button {
    width: clamp(163px, 40%, 211px);
    height: clamp(36px, 5vw, 44px);
    font-size: 14px;
  }
  }
`;
