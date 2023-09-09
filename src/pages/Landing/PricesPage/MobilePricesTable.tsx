import React, { useMemo } from "react";
import TermsTable from "@/pages/Landing/CooperationTerms/TermsTable";
import { TermsTableItem } from "@/pages/Landing/CooperationTerms/types";
import { PRICES_TABLE_DATA } from "@/pages/Landing/PricesPage/constants";
import { PricesTableColumnName } from "@/pages/Landing/PricesPage/types";
import styled from "styled-components";
import { spacing } from "@/styling/mixins";

const MobilePricesTable = () => {
  const termsTableItems: TermsTableItem[] = useMemo(
    () =>
      PRICES_TABLE_DATA.map(
        ({
          examplePrice,
          templatePrice,
          templateMultiplyPrice,
          pricePerUnit,
          model,
          consumption,
        }) => ({
          title: model,
          value: (
            <PricesValue>
              <PriceItem>
                <strong>{PricesTableColumnName.PRICE}</strong>
                <br />
                {pricePerUnit}
              </PriceItem>
              <PriceItem>
                <strong>{PricesTableColumnName.EXAMPLE}</strong>
                <br />
                {examplePrice}
              </PriceItem>
              <PriceItem>
                <strong>{PricesTableColumnName.TEMPLATE}</strong>
                <br />
                {templatePrice}
              </PriceItem>
              <PriceItem>
                <strong>{PricesTableColumnName.TEMPLATE_MULT}</strong>
                <br />
                {templateMultiplyPrice}
              </PriceItem>
              <Consuption>
                <strong>{PricesTableColumnName.CONSUMPTION}</strong>
                <br />
                {consumption}
              </Consuption>
            </PricesValue>
          ),
        })
      ),
    []
  );

  return <StyledTermsTable tableItems={termsTableItems} />;
};

export default MobilePricesTable;

const StyledTermsTable = styled(TermsTable)`
  margin-top: ${spacing(3)};
`;

const PricesValue = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceItem = styled.div`
  margin-bottom: ${spacing(2)};
`;

const Consuption = styled(PriceItem)`
  white-space: pre;
`;
