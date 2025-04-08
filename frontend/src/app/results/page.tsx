"use client"

import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer, Share2, FileText } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const size = searchParams.get("size") || "index-card"
  const fileCount = Number.parseInt(searchParams.get("files") || "0")

  // Format the size for display
  let displaySize = "Index Card (3×5 inches)"
  if (size === "single-page") {
    displaySize = "Single Page (8.5×11 inches)"
  } else if (size === "double-page") {
    displaySize = "Double Page (11×17 inches)"
  } else if (size.startsWith("custom")) {
    const dimensions = size.replace("custom-", "")
    displaySize = `Custom Size (${dimensions} inches)`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block rounded-lg bg-green-100 dark:bg-green-950/50 px-3 py-1 text-sm text-green-600 dark:text-green-400 mb-4">
              Success!
            </div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">Your Cheatsheet is Ready</h1>
            <p className="text-muted-foreground max-w-2xl">
              Your cheatsheet has been generated successfully. You can now download it as a PDF or print it directly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <div className="bg-white dark:bg-gray-900 rounded-lg border shadow-lg p-4 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md p-6 max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Your Cheatsheet</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-200 dark:bg-purple-800"></div>
                      <div className="h-3 w-3 rounded-full bg-blue-200 dark:bg-blue-800"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                      <div className="font-medium mb-1">Content from your files</div>
                      <div className="text-muted-foreground text-sm">
                        {fileCount} file{fileCount !== 1 ? "s" : ""} processed and formatted for {displaySize}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded h-20"></div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded h-20"></div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded h-32"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Cheatsheet Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{displaySize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Files:</span>
                      <span className="font-medium">
                        {fileCount} file{fileCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span className="font-medium">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="text-center">
                <Button variant="link" className="text-purple-600 dark:text-purple-400" href="/create">
                  Create Another Cheatsheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

