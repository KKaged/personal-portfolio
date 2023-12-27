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
      <Nav clasName={"display-flex justify-center"}>
        {NavData.map((NavItem) => (
          <NavButton
            key={NavItem.id}
            onSelect={() => handlePageChange(NavItem.name)}
          >
            {NavItem.name}
          </NavButton>
        ))}
      </Nav>
      <Main></Main>
    </>
  );
}
