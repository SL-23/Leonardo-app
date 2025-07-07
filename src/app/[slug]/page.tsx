import client from "@/apollo/apolloClient";
import { GET_MEDIA_PAGE } from "@/apollo/queries";

export default async function BlogPostPage({
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
    <div>
      <h1>Page {slug}</h1>
      <ul>
        {allMedia.map((item) => (
          <li key={item.id}>{item.title.romaji}</li>
        ))}
      </ul>
    </div>
  );
}
