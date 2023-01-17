import { RequestItem } from "../../../types/request-types";

import { getCountKey } from "./getCountKey";
import { getTableData } from "./getTableData";

export const renderTableStyle = () => `
 <style>
    .item {
        display: flex;
        justify-content: space-between;
        gap: 16px;
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

const renderSingleItem = (item: RequestItem) => {
  const { countsMap, sizes } = getTableData(item.colors);
  return `
      <h3>Назва моделі: ${item.name}</h3>
      <h5>Коментарі: ${item.comments}</h5>
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
          <img src="${item.imageUrl}" alt="Без світлини" class="image">
      </div>
    `;
};
