import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import logo from "./sancho-new.png";

const logohref = "https://sancho-ui.com" + logo;

interface Props {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: any;
  title?: string;
}

export function SEO({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title
}: Props) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: `${data.site.siteMetadata.title} - ${title}`
              },
              {
                property: `og:image`,
                content: logohref
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:url`,
                content: `https://sancho-ui.com`
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: `${data.site.siteMetadata.title} - ${title}`
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              {
                name: `twitter:image`,
                content: logohref
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
