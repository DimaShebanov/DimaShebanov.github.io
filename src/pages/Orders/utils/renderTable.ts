import { isEmpty } from "lodash";

import { RequestItem } from "../../../types/request-types";

import { getCountKey } from "./getCountKey";
import { getTableData } from "./getTableData";

export const renderTableStyle = () => `
 <style>
    body {
        padding: 16px;
    }
    
    h3 {
        white-space: pre-wrap;
    }
    
    .item {
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }
    
    @media print {
        .pagebreak { page-break-before: always; } /* page-break-after works, as well */
    }
    
    .image {
        max-width: 300px;
        max-height: 300px;
    }
    
    table {
        border-collapse: collapse;
    }
    thead td {
        font-weight: 600;
    }
    td {
        font-size: 24px;
        padding: 8px;
        border: 1px solid black;
    }
    .count {
        text-align: center;
    }
  </style>
`;

export const renderTable = (
  items: RequestItem[],
  brandName: string,
  orderDate: string
) => `
  ${renderTableStyle()}
  <h1>Назва бренду: ${brandName}</h1>
  <h2>Дата замовлення: ${orderDate}</h2>
  ${items.map(renderSingleItem).join("")}
  <br/>
  <br/>
`;

const getPageBreak = (index: number, length: number) =>
  index % 2 && index !== length - 1 ? '<div class="pagebreak"/>' : "";

const renderSingleItem = (
  item: RequestItem,
  index: number,
  arr: RequestItem[]
) => {
  const { countsMap, sizes } = getTableData(item.colors);
  const hasComments = !isEmpty(item.comments);
  return `
      <h2>Назва моделі: ${item.name}</h2>
      <h3>Коментарі: ${hasComments ? "\n" : ""}${item.comments}</h3>
      <div class="item">
          <table>
              <thead>
                  <td>Колір</td>
                  ${sizes
                    .map((size) => `<td class="count">${size}</td>`)
                    .join("")}
              </thead>
              <tbody>
                  ${item.colors
                    .map(
                      ({ color }) =>
                        `<tr>
                          <td>${color}</td>
                          ${sizes
                            .map(
                              (size) =>
                                `<td class="count">${
                                  countsMap[getCountKey(color, size)] || ""
                                }</td>`
                            )
                            .join("")}</tr>`
                    )
                    .join("")}
              </tbody>
          </table>
          <img src="${item.image?.url}" alt="Без світлини" class="image">
      </div>
      ${getPageBreak(index, arr.length)}
    `;
};
