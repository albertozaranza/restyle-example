import { createBox, createText } from "@shopify/restyle";

import { ThemeProps } from "../theme";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="primary_300">
      <Box>
        <Text variant="title">Home</Text>
      </Box>
    </Box>
  );
}
