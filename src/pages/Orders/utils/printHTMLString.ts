export const printHTMLString = (htmlString: string) => {
  const winPrint = window.open();

  winPrint?.document.write(htmlString);
  winPrint?.focus();
  setTimeout(() => {
    winPrint?.print();
    winPrint?.close();
  }, 1000);
};
