import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { isTemplateElement } from "@babel/types";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()} all
                    rights reserved{""}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(link => (
                    <a href={link.url} key={link.id}>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const FooterWrapper = styled.footer``;
