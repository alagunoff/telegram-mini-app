"use client";

import { useThemeParams } from "@tma.js/sdk-react";
import classNames from "classnames";
import Link from "next/link";

import { links } from "./_page-constants";

function Page() {
  const themeParams = useThemeParams(true);

  return (
    <>
      <h1 className="mb-2 text-xl" style={{ color: themeParams?.textColor }}>
        Home Page
      </h1>
      <p className="mb-2" style={{ color: themeParams?.textColor }}>
        This page is a home page in this boilerplate. You can use the links
        below to visit other pages with their own functionality.
      </p>
      <ul className="space-y-2">
        {links.map(({ title, path, icon }) => (
          <li className="leading-none" key={path}>
            <Link
              className={classNames({
                "flex items-center gap-x-1": !!icon,
              })}
              style={{ color: themeParams?.linkColor }}
              href={path}
            >
              {icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Page;
