import { CheatsheetGenerator } from "@/components/cheatsheet-generator"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Create Cheatsheet - Cheatsheesh",
  description: "Upload your content, choose your size, and download your custom cheatsheet.",
}

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-4 md:text-4xl">Create Your Cheatsheet</h1>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your content, customize your cheatsheet, and download it in minutes.
          </p>
          <CheatsheetGenerator />
        </div>
      </main>
      <Footer />
    </div>
  )
}

