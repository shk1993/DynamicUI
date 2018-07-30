export const silenceConsoleErrors = () => {
  /* silence -- Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail. */
  /* tslint:disable-next-line */
  console.error = () => {};
  /* tslint:disable-next-line */
  console.warn = () => {};
};
