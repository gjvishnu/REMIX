
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { Link } from "@remix-run/react";


import styles from "../abt.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export default function About(){
    return(
      <>
      <h1>About page</h1>
   <Link to="/">home</Link>
      </>   )
}