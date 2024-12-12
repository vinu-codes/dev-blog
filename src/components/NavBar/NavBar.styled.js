"use client";

import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  border-bottom: 1px solid #e2e8f0;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 16px;
    font-size: 14px;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export { Header, Nav };
