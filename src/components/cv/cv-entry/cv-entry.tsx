import React from "react";
import styled from "styled-components";

import { formatDate } from "../../../lib";
import { color, mediaQuery } from "../../../theme";
import { FlexColumn, Heading } from "../../shared";
import { CVEntryProps } from "./cv-entry.props";

const Container = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    color(props.isActive ? "blue" : "cvBackground")};
  border-radius: 10px;
  display: flex;
  padding: 10px;

  ${mediaQuery("phoneOnly")} {
    flex-direction: column;
  }
`;

const DateContainer = styled(FlexColumn)`
  flex-shrink: 0;
  width: 130px;

  ${mediaQuery("phoneOnly")} {
    flex-direction: row;
    padding-bottom: 10px;
    width: 100%;
  }
`;

const DateText = styled.p`
  font-weight: 600;
  padding-top: 3px;

  ${mediaQuery("phoneOnly")} {
    padding-right: 3px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 22px;
  margin-bottom: 0;
`;

const OrganizationLink = styled.a<{ hasLink?: boolean }>`
  font-size: 20px;
  font-style: italic;
  padding: 5px 0px;
  color: inherit;

  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: ${(props) => (props.hasLink ? "underline" : "none")};
  }

  :active {
    text-decoration: ${(props) => (props.hasLink ? "underline" : "none")};
  }
`;

const DetailList = styled.ul`
  font-size: 18px;
  margin: 0;
  padding-left: 20px;
`;

export const CVEntry: React.FC<CVEntryProps> = (props) => {
  const {
    heading,
    organization,
    details,
    start,
    end,
    noDay,
    noMonth,
    organizationLink,
    ...rest
  } = props;

  return (
    <Container isActive={!end} {...rest}>
      <DateContainer>
        <DateText>{formatDate(start, noDay, noMonth)} -</DateText>
        <DateText>{end ? formatDate(end, noDay, noMonth) : "present"}</DateText>
      </DateContainer>
      <FlexColumn>
        <StyledHeading text={heading} />
        <OrganizationLink
          href={organizationLink}
          target="_blank"
          rel="noopener noreferrer"
          hasLink={Boolean(organizationLink)}
        >
          {organization}
        </OrganizationLink>
        {details && (
          <DetailList>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </DetailList>
        )}
      </FlexColumn>
    </Container>
  );
};
