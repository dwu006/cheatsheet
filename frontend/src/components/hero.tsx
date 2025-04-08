import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Create Perfect Cheatsheets in Seconds
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Upload your content, choose your size, and download beautifully formatted cheatsheets for any subject or
                topic.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-purple-600 hover:bg-purple-700" size="lg" asChild>
                <Link href="/create">
                  Create Your Cheatsheet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Examples
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px]">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">Math Formulas</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-200 dark:bg-purple-800"></div>
                        <div className="h-3 w-3 rounded-full bg-blue-200 dark:bg-blue-800"></div>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="font-medium mb-1">Pythagorean Theorem</div>
                        <div className="text-muted-foreground">a² + b² = c²</div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="font-medium mb-1">Quadratic Formula</div>
                        <div className="text-muted-foreground">x = (-b ± √(b² - 4ac)) / 2a</div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="font-medium mb-1">Area of Circle</div>
                        <div className="text-muted-foreground">A = πr²</div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="font-medium mb-1">Volume of Sphere</div>
                        <div className="text-muted-foreground">V = (4/3)πr³</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

