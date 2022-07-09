/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */

// eslint-disable-next-line import/extensions
import { firstAndLast } from "./src/firstAndLast";

module.exports.run = async () => {
  await firstAndLast();
};
