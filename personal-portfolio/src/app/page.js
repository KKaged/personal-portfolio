"use client";

import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/MainHome";
import About from "./pages/About";
import NavButton from "./components/Button";
import { NavData } from "./data";

export default function Home() {
  const [selectedPage, setPage] = useState(null);

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <Nav className={"display-flex justify-center"}>
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
        {selectedPage === "Blog" ? (
          <>
            <h1>Daniel</h1>
            <p>He is a really cool guy</p>
          </>
        ) : (
          <About />
        )}
      </Main>
    </>
  );
}
