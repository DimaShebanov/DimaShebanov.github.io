export const printHTMLString = (htmlString: string) => {
  const winPrint = window.open();

  winPrint?.document.write(htmlString);
  winPrint?.document.close();
  winPrint?.focus();

  winPrint?.addEventListener("load", () => {
    winPrint?.print();
  });
};
