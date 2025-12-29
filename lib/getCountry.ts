// import { headers } from "next/headers";

// export function getCountry() {
//   const country = headers().get("x-nf-country");
//   return country; // e.g. "RS"
// }


// lib/getCountry.ts
import { headers } from "next/headers";

export function getCountry() {
  if (process.env.NODE_ENV === "development") {
    return "RS"; // simulate Serbia
  }

  return headers().get("x-nf-country");
}
