import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";

const LOCALES = ["en", "id", "ms"];
const SKIP_MIDDLEWARE = ["_next", "api", ".svg", ".ico"];
const ERROR_PAGES = ["/403", "/404", "/500", "/504"];

export default function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    let locale = "en";
    const { device } = userAgent(request);
    const url = request.nextUrl.clone();
    const viewport = device.type === "mobile" ? "mobile" : "desktop";

    const acceptLanguageHeader =
      request.headers.get("accept-language") ?? locale;
    const acceptLanguage = acceptLanguageHeader.slice(0, 2);

    if (SKIP_MIDDLEWARE.some((str) => pathname.includes(str))) {
      return NextResponse.next();
    }

    if (LOCALES.includes(acceptLanguage)) {
      locale = acceptLanguage;
    }

    if (pathname === "/") {
      url.pathname = `${viewport}${url.pathname}home`;
    } else {
      url.pathname = `${viewport}${url.pathname}`;
    }

    if (ERROR_PAGES.includes(pathname)) {
      url.pathname = `${viewport}${ERROR_PAGES[ERROR_PAGES.indexOf(pathname)]}`;
    }

    return NextResponse.rewrite(url);

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error middleware", error);
    return NextResponse.next();
  }
}
