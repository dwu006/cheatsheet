import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Pricing - Cheatsheesh",
  description: "Choose the right plan for your cheatsheet needs.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">Simple, Transparent Pricing</h1>
              <p className="text-muted-foreground max-w-[700px] md:text-lg">
                Choose the plan that works best for you. All plans include core features.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-3xl mx-auto">
              {/* Free Plan */}
              <Card className="border-2">
                <CardHeader className="pb-8 pt-6">
                  <CardTitle className="text-xl">Free</CardTitle>
                  <div className="mt-4 flex items-baseline text-center justify-center">
                    <span className="text-4xl font-bold tracking-tight">$0</span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="pt-4">
                    Perfect for occasional use and trying out the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>5 cheatsheets per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic templates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>PDF downloads</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span>Video file support</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span>Custom branding</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button className="w-full" asChild>
                    <Link href="/create">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-purple-200 dark:border-purple-900 relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-md">Popular</span>
                </div>
                <CardHeader className="pb-8 pt-6">
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <div className="mt-4 flex items-baseline text-center justify-center">
                    <span className="text-4xl font-bold tracking-tight">$5</span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="pt-4">
                    For power users who need more features and flexibility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Unlimited cheatsheets</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>All templates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>PDF & PNG downloads</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Video file support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Custom branding</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="#">Coming Soon ...</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
                <div className="text-left">
                  <h3 className="font-medium mb-2">Can I upgrade or downgrade at any time?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can upgrade to Pro or downgrade to Free at any time. Billing is prorated.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards and PayPal for Pro subscriptions.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">Is there a limit to file sizes?</h3>
                  <p className="text-sm text-muted-foreground">
                    Free accounts can upload files up to 5MB each. Pro accounts can upload files up to 50MB each.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">Do you offer refunds?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer a 14-day money-back guarantee if you&apos;re not satisfied with your Pro subscription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

