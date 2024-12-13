"use client";
import styled from "styled-components";

const PageListGroup = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    text-decoration: none;
    color: rgb(24, 24, 27);
  }
`;

const PageCard = styled.li`
  padding: 8px;
  border: 1px solid rgb(24, 24, 27);
  border-radius: 4px;
  transition: background-color 0.2s;
  max-width: 300px;
  width: 100%;
  &:hover {
    background-color: rgb(24, 24, 27);
    a {
      color: white;
    }
  }
`;

export { PageListGroup, PageCard };
