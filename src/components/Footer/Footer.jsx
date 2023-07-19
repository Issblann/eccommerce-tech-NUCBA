import React, { useState } from "react";
import {
  ContainerPrincipalFooterStyled,
  ContainerFooterStyled,
  ContainerSectionsAndLogoStyled,
  SectionStyled,
  LinksContainerStyled,
  DropdownIconStyled,
  ContainerIMGStyled,
  BottomSectionStyled,
} from "./FooterStyles";
import { Link } from "react-router-dom";
import hyperxLogo from "../../assets/logo/hyperx-logo-lg.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Footer = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Support",
      links: [
        { id: 1, text: "Product Support" },
        { id: 2, text: " Contact Support" },
      ],
      showDropdown: false,
    },
    {
      id: 2,
      title: "Company",
      links: [
        { id: 3, text: "About Support" },
        { id: 4, text: " Careers" },
        { id: 5, text: " Privacy" },
        { id: 6, text: " Term of Use" },
        { id: 7, text: " User of Cookies" },
      ],
      showDropdown: false,
    },
    {
      id: 3,
      title: "Other Resources",
      links: [
        { id: 8, text: "NGENUITY Software" },
        { id: 9, text: " Blog" },
        { id: 10, text: " Privacy" },
        { id: 11, text: " Partner Program" },
        { id: 12, text: " Student Discount" },
      ],
      showDropdown: false,
    },
  ]);

  const toggleDropdown = (sectionId) => {
    setSections((prevSections) => {
      const updatedSections = prevSections.map((section) => {
        if (section.id === sectionId) {
          return { ...section, showDropdown: !section.showDropdown };
        }

        return section;
      });
      return updatedSections;
    });
  };
  return (
    <ContainerPrincipalFooterStyled>
      <ContainerFooterStyled>
        <ContainerSectionsAndLogoStyled>
          {sections.map((section) => {
            return (
              <div key={section.id}>
                <SectionStyled>
                  <h1>{section.title}</h1>
                  <DropdownIconStyled
                    onClick={() => toggleDropdown(section.id)}
                  >
                    {section.showDropdown ? (
                      <AiOutlineMinus fontSize="18px" />
                    ) : (
                      <AiOutlinePlus fontSize="18px" />
                    )}
                  </DropdownIconStyled>
                </SectionStyled>

                <LinksContainerStyled show={section.showDropdown}>
                  {section.links.map((link) => {
                    return <Link key={link.id}>{link.text}</Link>;
                  })}
                </LinksContainerStyled>
              </div>
            );
          })}

          <ContainerIMGStyled>
            <img src={hyperxLogo} alt="hyperxLogo" />
          </ContainerIMGStyled>
        </ContainerSectionsAndLogoStyled>

        <BottomSectionStyled>
          <Link>United States</Link>
          <Link>Copyright © 2023 HP - All rights reserved.</Link>
        </BottomSectionStyled>
      </ContainerFooterStyled>
    </ContainerPrincipalFooterStyled>
  );
};

export default Footer;
