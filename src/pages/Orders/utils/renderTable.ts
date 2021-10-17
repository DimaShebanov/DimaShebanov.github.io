import { RequestItem } from "../../../recoil/interfaces";

import { getCountKey } from "./getCountKey";

export const renderTable = (
  item: RequestItem,
  presentSizes: Array<string>,
  countMap: Record<string, string>
) => `
  <style>
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
  <h3>${item.name}</h3>
  <table>
      <thead>
          <td>Цвет</td>
          ${presentSizes
            .map((size) => `<td class="count">${size}</td>`)
            .join("")}
      </thead>
      <tbody>
          ${item.colors
            .map(
              ({ color }) =>
                `<tr>
                  <td>${color}</td>
                  ${presentSizes
                    .map(
                      (size) =>
                        `<td class="count">${
                          countMap[getCountKey(color, size)] || ""
                        }</td>`
                    )
                    .join("")}</tr>`
            )
            .join("")}
      </tbody>
  </table>
        `;
