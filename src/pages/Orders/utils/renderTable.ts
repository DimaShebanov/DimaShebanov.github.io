import { RequestItemColor } from "../../../recoil/interfaces";

export const renderTable = (item: RequestItemColor, sizes: Array<string>) => `
        <table>
            <thead>
                <td>Цвет</td>
                ${sizes.map((size) => `<td>${size}</td>`)}
            </thead>
            <tbody>
                ${item.sizes.map(({}) => )}
            </tbody>
        </table>
    `;
