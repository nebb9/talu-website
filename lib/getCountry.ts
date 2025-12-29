import { headers } from "next/headers";

export function getCountry() {
  const country = headers().get("x-nf-country");
  return country; // e.g. "RS"
}