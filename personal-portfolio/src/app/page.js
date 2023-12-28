"use client";

import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/MainHome";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NavButton from "./components/Button";
import { NavData } from "./data";

export default function Home() {
  const [selectedPage, setPage] = useState();

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
        {!selectedPage && <About />}
        {selectedPage === "About" && <About />}
        {selectedPage === "Blog" && <Blog />}
        {selectedPage === "Projects" && <Projects />}
        {selectedPage === "Contact" && <Contact />}
      </Main>
    </>
  );
}
