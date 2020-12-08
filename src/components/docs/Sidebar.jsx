import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FeaturedBadge } from "formidable-oss-badges";

const SidebarContainer = styled.aside`
  display: flex;
  flex-shrink: 0;
  width: ${({ theme }) => theme.layout.sidebarWidth};
  min-height: 100%;
  position: fixed;
`;

const LighterStripe = styled.div`
  width: 12px;
  background: ${({ theme }) => theme.colors.primary};
`;

const LightStripe = styled.div`
  width: 12px;
  background: ${({ theme }) => theme.colors.darkPrimary};
`;

const SidebarContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)} 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkerPrimary};

  ${(props) => props.theme.media.desktop`
    display: flex;
  `}
`;

const BadgeWrapper = styled.div`
  width: 6.6rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 5px 0;
`;

const ListItemLink = styled(NavLink)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  padding: 0 ${({ theme }) => theme.spacing(2.5)};
`;

const Sidebar = ({ navLinks, projectName }) => {
  console.log(navLinks);
  return (
    <SidebarContainer>
      <LighterStripe />
      <LightStripe />
      <SidebarContent>
        <BadgeWrapper>
          <FeaturedBadge name={projectName} />
        </BadgeWrapper>
        <List>
          {navLinks.map((page, i) => (
            <ListItem key={i}>
              <ListItemLink to={"/docs/" + page.route}>
                {page.name}
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </SidebarContent>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectName: PropTypes.string.isRequired,
};

export default Sidebar;
