import { authMiddleware } from "@clerk/nextjs/server";

// To use authMiddleware we need to use the depreciated version of Clerk
// To install Clerk v4.29.1 run the following command:
// bun install @clerk/nextjs@4.29.1

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/clerk-webhook",
    "/api/drive-activity/notification",
    "/api/payment/success",
  ],
  ignoredRoutes: [
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "/api/flow",
    "/api/cron/wait",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
