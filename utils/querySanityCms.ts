export const querySanityCms = async (query: string) => {
  const response = await fetch(
    "https://7jzr31g2.api.sanity.io/v1/graphql/production/default" as RequestInfo,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );

  const json = await response.json();

  const { data } = json;
  return data;
};
