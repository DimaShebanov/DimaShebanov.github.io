import React from "react";

import styled from "styled-components";
import { color, spacing } from "@/styling/mixins";
import { Container } from "@/components/landing";
import { down } from "styled-breakpoints";

import { TermsTableItem } from "./types";

interface Props {
  tableItems: TermsTableItem[];
  className?: string;
}

const TermsTable = ({ tableItems, className }: Props) => (
  <div className={className}>
    {tableItems.map(({ title, value }) => (
      <TermsRow key={title}>
        <StyledContainer>
          <h4>{title}</h4>
          <h6>{value}</h6>
        </StyledContainer>
      </TermsRow>
    ))}
  </div>
);

export default TermsTable;

const TermsRow = styled.div`
  border-top: 1px solid ${color("primaryBlack")};
  padding: ${spacing(3)} 0;

  &:last-child {
    border-bottom: 1px solid ${color("primaryBlack")};
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: ${spacing(3)};
  white-space: pre-line;

  h4 {
    text-transform: uppercase;
  }

  ${down("lg")} {
    grid-template-columns: 1fr;
    grid-gap: ${spacing(2)};
    grid-template-rows: min-content 1fr;
  }
`;
