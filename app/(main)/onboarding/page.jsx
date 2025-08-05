import { redirect } from "next/navigation";
import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function OnboardingPage() {
  try {
    // Check if user is already onboarded
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded) {
      redirect("/dashboard");
    }
  } catch (error) {
    // During build time or when user is not authenticated, just show the form
    console.log("User not authenticated during build");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
