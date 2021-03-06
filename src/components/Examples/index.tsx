/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";
import {
  Embed,
  theme,
  NegativeMarginsContainer,
  Text,
  Button,
  useResponsiveContainerPadding,
  useTheme
} from "sancho";

export interface ExampleProps {
  title: string;
  href: string;
  image: string;
  subtitle: string;
  source?: string;
}

export const Example: React.FunctionComponent<ExampleProps> = ({
  title,
  href,
  image,
  subtitle,
  source
}) => {
  const responsiveContainerPadding = useResponsiveContainerPadding();
  const theme = useTheme();
  const dark = theme.colors.mode === "dark";
  return (
    <div
      css={[
        css`
          position: relative;
          flex: 0 0 100%;
          box-sizing: border-box;
          margin-top: ${theme.spaces.md};
          margin-bottom: ${theme.spaces.md};
          ${theme.mediaQueries.md} {
            flex: 0 0 50%;
          }
        `,
        responsiveContainerPadding
      ]}
    >
      <a
        href={href}
        css={css`
          text-decoration: none;
          display: block;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: auto;
            max-width: 700px;
            display: inline-block;
            position: relative;
            border-radius: 5px;
            box-shadow: ${dark ? "none" : "0 0 20px #a3a2c070"};
            overflow: hidden;
          `}
        >
          <div
            css={css`
              border-radius: 5px 5px 0 0;
              background-color: ${dark
                ? theme.colors.background.tint1
                : "white"};
            `}
          >
            <div
              css={css`
                margin: 0px 11px;
                & > div {
                  height: 8px;
                  width: 8px;
                  display: inline-block;
                  margin-right: 4px;
                  border-radius: 50%;
                  background-color: ${dark ? "white" : "rgba(0, 0, 0, 0.4)"};
                }
              `}
            >
              <div />
              <div />
              <div />
            </div>
          </div>
          <div
            css={css`
              margin: 0;
              width: 100%;
              position: relative;
              display: block;
              border-radius: 0 0 5px 5px;
            `}
          >
            <Embed width={468} height={263}>
              <img src={image} alt={title} />
            </Embed>
          </div>
        </div>
      </a>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: theme.spaces.sm,
          textAlign: "left"
        }}
      >
        <Text gutter={false} variant="h5">
          {title}
        </Text>
        <Text variant="subtitle">{subtitle}</Text>

        {source && (
          <div css={{ marginTop: theme.spaces.sm }}>
            <Button variant="outline" size="sm" component="a" href={source}>
              View the source
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Examples = () => (
  <NegativeMarginsContainer>
    <div
      css={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <Example
        title="Captioner"
        href="http://captioner.app"
        source="http://github.com/bmcmahen/captioner"
        subtitle="Make captions directly in your browser."
        image={require("./captioner.jpg")}
      />
      <Example
        title="Julienne"
        href="http://julienne.app"
        source="http://github.com/bmcmahen/julienne"
        subtitle="The easiest way to share recipes with family and friends."
        image={require("./julienne.jpg")}
      />
    </div>
  </NegativeMarginsContainer>
);
