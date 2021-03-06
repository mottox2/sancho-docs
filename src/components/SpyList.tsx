/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Text, useTheme } from "sancho";
import { getId } from "./ExamplePreview";

export interface Item {
  id: string;
  name: string;
  parent?: boolean;
}

interface SpyListProps {
  items: Item[];
}

export function SpyList({ items }: SpyListProps) {
  const theme = useTheme();
  const [ids] = React.useState(() => items.map(item => item.id));

  return (
    <ul
      css={{
        padding: theme.spaces.lg,
        margin: 0,
        position: "sticky",
        flex: "0 0 200px",
        width: "200px",
        top: "64px"
      }}
    >
      {items.map((item, i) => {
        // const active = inView[inView.length - 1] === item.id
        const active = false; // disable scroll spy for now
        const props = item.name === "API" || item.name === "Props";
        return (
          <li
            css={{
              listStyle: "none",
              margin: 0,
              padding: `${0} ${theme.spaces.lg}`,
              borderLeft: `1px solid ${theme.colors.border.muted}`,
              paddingRight: 0
            }}
            key={item.id}
          >
            <a
              href={"#" + getId(item.id)}
              css={{
                textDecoration: "none",
                display: "block"
              }}
            >
              <Text
                variant={"body"}
                muted
                css={{
                  display: "block",
                  lineHeight: 1.75,
                  paddingLeft:
                    item.parent || i === 0 || props ? 0 : theme.spaces.md,
                  color: active
                    ? theme.colors.text.default
                    : theme.colors.text.muted,
                  fontSize: theme.fontSizes[0]
                }}
              >
                {item.name}
              </Text>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
