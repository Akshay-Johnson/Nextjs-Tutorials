import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders=new Headers(request.headers)
  // console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("authorization"));
  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage"));

  return new Response("<h5>profile api </h5>",{
    headers : {"Content-Type": "text/html",
                "Set-Cookie":"theme=dark "

    }});
}