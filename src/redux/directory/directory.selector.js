import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const sectionSelection = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
