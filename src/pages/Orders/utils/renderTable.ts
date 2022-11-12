import { RequestItem } from "../../../recoil/interfaces";

import { getCountKey } from "./getCountKey";

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
  item: RequestItem,
  presentSizes: Array<string>,
  countMap: Record<string, string>,
  omitStyle?: boolean
) => `
  ${omitStyle ? "" : renderTableStyle()}   
  <h3>Название модели: ${item.name}</h3>
  <h5>Комментарии: ${item.comments}</h5>
  <div class="item">
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
      <img src="${item.imageUrl}" alt="Без картинки" class="image">
  </div>
  <br/>
  <br/>
`;
