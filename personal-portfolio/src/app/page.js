"use client";

import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/MainHome";
import { NavData } from "./data";
import NavButton from "./components/Button";

export default function Home() {
  const [selectedPage, setPage] = useState();

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <Nav>
        {NavData.map((NavItem) => (
          <NavButton
            key={NavItem.id}
            onSelect={() => handlePageChange(NavItem.name)}
          >
            {NavItem.name}
          </NavButton>
        ))}
      </Nav>
      <Main>
        <h3>{selectedPage}</h3>
      </Main>
    </>
  );
}
