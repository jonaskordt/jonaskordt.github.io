import React from "react";
import styled from "styled-components";

import { PaperLinksProps } from "./paper-links.props";
import { DoiLink } from "../doi-link";
import { PdfLink } from "../pdf-link";
import { FlexRow } from "../../shared";

const Container = styled(FlexRow)`
  gap: 14px;
  justify-content: center;
`;

export const PaperLinks: React.FC<PaperLinksProps> = (props) => {
  const { doi, pdfName, link } = props;

  return (
    <Container>
      {doi && <DoiLink doi={doi} />}
      {(pdfName || link) && <PdfLink pdfName={pdfName} link={link} />}
    </Container>
  );
};
