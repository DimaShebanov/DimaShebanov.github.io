import React, { useCallback } from "react";
import { Container, Section, SectionTitle, Show } from "@/components/landing";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { color, fontSize, spacing } from "@/styling/mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { down } from "styled-breakpoints";

import { PRICES_TABLE_COLUMNS, PRICES_TABLE_DATA } from "./constants";

import MobilePricesTable from "./MobilePricesTable";

const PricesPage = () => {
  const history = useHistory();

  const onBackClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Section background="yellow">
      <Container>
        <StyledSectionTitle>
          <StyledIconButton onClick={onBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </StyledIconButton>
          ШО <span>ПО ЧОМУ?</span>
        </StyledSectionTitle>
        <h6>
          Тут і зараз ти можеш ознайомитись із "приблизним" прайсом на послуги
          пошиття (у ціну входить крій, пошиття і прасування готових виробів) та
          розробку лекал, а також дізнаєшся приблизні витрати. Ціни вказані
          "від", при мінімальній складності виробу. Ми шиємо виключно якісно! На
          підвищення ціни впливає лише декоративна обробка, додаткові кишені та
          інші "плюшки" :)
        </h6>
        <Show up="xl">
          <StyledTable stickyHeader>
            <TableHead>
              {PRICES_TABLE_COLUMNS.map((name) => (
                <StyledHeadCell key={name}>{name}</StyledHeadCell>
              ))}
            </TableHead>
            <TableBody>
              {PRICES_TABLE_DATA?.map(
                ({
                  examplePrice,
                  templatePrice,
                  templateMultiplyPrice,
                  pricePerUnit,
                  model,
                  consumption,
                }) => (
                  <StyledBodyRow key={model}>
                    <StyledBodyCell>{model}</StyledBodyCell>
                    <PriceCell>{pricePerUnit}</PriceCell>
                    <PriceCell>{examplePrice}</PriceCell>
                    <PriceCell>{templatePrice}</PriceCell>
                    <PriceCell>{templateMultiplyPrice}</PriceCell>
                    <ConsumptionCell>{consumption}</ConsumptionCell>
                  </StyledBodyRow>
                )
              )}
            </TableBody>
          </StyledTable>
        </Show>
        <Show down="xl">
          <MobilePricesTable />
        </Show>
      </Container>
    </Section>
  );
};

export default PricesPage;

const StyledSectionTitle = styled(SectionTitle)`
  position: relative;

  ${down("lg")} {
    text-align: center;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-right: auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTable = styled(Table)`
  margin-top: ${spacing(3)};
  background-color: ${color("yellow")};
`;

const StyledTableCell = styled(TableCell)<{ width?: string }>`
  ${fontSize("sm")};
  min-width: ${(p) => p.width};
`;

const StyledHeadCell = styled(StyledTableCell)`
  white-space: pre-wrap;
  background-color: ${color("primaryBlack")};
  color: ${color("white")};
  border-bottom: none;
`;

const StyledBodyRow = styled(TableRow)``;

const StyledBodyCell = styled(StyledTableCell)`
  border-bottom-color: ${color("primaryBlack")};
`;

const PriceCell = styled(StyledBodyCell)`
  white-space: nowrap;
`;

const ConsumptionCell = styled(StyledBodyCell)`
  white-space: pre;
  word-break: keep-all;
`;
