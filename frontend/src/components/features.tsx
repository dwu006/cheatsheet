import { Upload, Ruler, Download, Printer, Palette, Clock } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950/50 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything You Need for Perfect Cheatsheets
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our powerful tools make it easy to create, customize, and share your cheatsheets for any purpose.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Upload className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Multiple File Formats</h3>
            <p className="text-center text-muted-foreground">
              Upload text, PDFs, images, and even videos to extract content for your cheatsheets.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Ruler className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Flexible Sizing</h3>
            <p className="text-center text-muted-foreground">
              Choose from index cards, single page, double page, or create your own custom sizes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Customizable Design</h3>
            <p className="text-center text-muted-foreground">
              Personalize your cheatsheets with different themes, fonts, colors, and layouts.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Download className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Easy Download</h3>
            <p className="text-center text-muted-foreground">
              Download your cheatsheets as PDF, PNG, or JPEG files to use anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Printer className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Print Ready</h3>
            <p className="text-center text-muted-foreground">
              All cheatsheets are optimized for printing with perfect margins and formatting.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 dark:bg-purple-950/50 p-3">
              <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Save Time</h3>
            <p className="text-center text-muted-foreground">
              Generate complete cheatsheets in seconds instead of spending hours creating them manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

