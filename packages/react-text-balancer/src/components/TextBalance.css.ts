import { recipe } from "@vanilla-extract/recipes";

export const text = recipe({
  variants: {
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
});
