// lib/queries.ts
import { gql } from "@apollo/client";

export const GET_MEDIA_PAGE = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        title {
          romaji
        }
        characters(perPage: 1) {
          nodes {
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
    }
  }
`;
