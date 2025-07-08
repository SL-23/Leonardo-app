import client from "@/apollo/apolloClient";
import { GET_MEDIA_PAGE } from "@/apollo/queries";
import AuthWrapper from "../../components/AuthWrapper";
import CharItem from "../../components/CharItem";
import { Stack, Text } from "@chakra-ui/react";

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allMedia = [];

  const { data } = await client.query({
    query: GET_MEDIA_PAGE,
    variables: { page: slug, perPage: 10 },
    fetchPolicy: "no-cache",
  });
  allMedia.push(...data.Page.media);

  return (
    <AuthWrapper>
      <Stack alignItems="center">
        <Text as="h1" textStyle="3xl">
          Page {slug}
        </Text>
        <ul className="container">
          {allMedia.map((item) => (
            <div key={item.id}>
              <CharItem
                name={item.title.romaji}
                imgSrc={item.characters.nodes[0].image.large}
              />
            </div>
          ))}
        </ul>
      </Stack>
    </AuthWrapper>
  );
}
