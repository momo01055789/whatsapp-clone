"use client";

import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Home() {
  return (
    <main className="m-5">
      <div className="flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel">
        {/* Green background decorator for Light Mode */}
        <div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-30" />
        <ClerkProvider
          publishableKey={
            process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string
          }
        >
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <LeftPanel />
            <RightPanel />
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </div>
    </main>
  );
}
