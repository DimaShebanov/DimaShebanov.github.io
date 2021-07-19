export type UseToggleState = (
  state: boolean | (() => boolean)
) => [
  boolean,
  // set true
  () => void,
  // set false
  () => void,
  // toggle
  () => void
];
