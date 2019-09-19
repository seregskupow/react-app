import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        // const Redirect = path => {
        //   window.location.assign(path);
        // };
        return (
          <SidebarWrap  show={sidebarOpen} className="sidebar">
            <ul>
              {links.map(item => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="sidebar-link"
                    onClick={handleSidebar}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarWrap>
        );
      }}
    </ProductConsumer>
  );
}

const SidebarWrap = styled.div`
transform:${props =>props.show?'translateX(0)':'translateX(-100%)'}
`;
