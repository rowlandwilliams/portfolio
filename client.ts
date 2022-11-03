import { createClient } from "urql";

export const client = createClient({
  url: "https://7jzr31g2.api.sanity.io/v1/graphql/production/default",
});
