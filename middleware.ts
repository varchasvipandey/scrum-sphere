import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { Routes } from "./lib/routes";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [Routes.signIn],
  ignoredRoutes: ["/"],

  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path: string;

      if (auth.orgId) path = `${Routes.dashboard}/${auth.orgId}`;
      else path = Routes.selectOrg;

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if (!auth.userId && !auth.isPublicRoute) return redirectToSignIn({ returnBackUrl: req.url });
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
