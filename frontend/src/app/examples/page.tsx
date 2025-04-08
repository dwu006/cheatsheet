import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Examples - Cheatsheesh",
  description: "Browse example cheatsheets created with Cheatsheesh.",
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Example Cheatsheets</h1>
              <p className="text-muted-foreground max-w-[700px] md:text-lg">
                Browse through our collection of example cheatsheets to see what you can create with Cheatsheesh.
              </p>
            </div>

            <Tabs defaultValue="academic" className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="programming">Programming</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="academic" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Math Formulas */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium">Math Formulas</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Pythagorean</div>
                            <div className="text-muted-foreground">a² + b² = c²</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Quadratic</div>
                            <div className="text-muted-foreground">x = (-b ± √(b² - 4ac)) / 2a</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Math Formulas</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Essential formulas for algebra, geometry, and calculus.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Chemistry Elements */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-950/30 dark:to-teal-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium">Periodic Table</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-xs">
                          {["H", "Li", "Na", "K", "Be", "Mg", "Ca", "B", "Al"].map((element, i) => (
                            <div key={i} className="bg-gray-100 dark:bg-gray-800 p-1 rounded text-center">
                              {element}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Chemistry Elements</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Periodic table elements with properties and reactions.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* History Dates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-amber-600" />
                            <span className="text-sm font-medium">History Timeline</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">1776</div>
                            <div className="text-muted-foreground">Declaration of Independence</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">1865</div>
                            <div className="text-muted-foreground">End of Civil War</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">History Dates</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Key historical events and their significance.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="programming" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* JavaScript Syntax */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-yellow-600" />
                            <span className="text-sm font-medium">JavaScript</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Array Methods</div>
                            <div className="text-muted-foreground">map(), filter(), reduce()</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Promises</div>
                            <div className="text-muted-foreground">async/await, then()</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">JavaScript Syntax</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Common JavaScript methods, syntax, and patterns.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Python Syntax */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">Python</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">List Comprehension</div>
                            <div className="text-muted-foreground">[x for x in range(10)]</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Dictionary Methods</div>
                            <div className="text-muted-foreground">get(), items(), keys()</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Python Syntax</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Essential Python functions, methods, and patterns.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Git Commands */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium">Git Commands</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Basic</div>
                            <div className="text-muted-foreground">git add, git commit, git push</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Advanced</div>
                            <div className="text-muted-foreground">git rebase, git cherry-pick</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Git Commands</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Common Git commands and workflows for developers.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="business" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Marketing Terms */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-950/30 dark:to-green-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm font-medium">Marketing</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">KPIs</div>
                            <div className="text-muted-foreground">CAC, LTV, Conversion Rate</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Channels</div>
                            <div className="text-muted-foreground">SEO, PPC, Social Media</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Marketing Terms</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Essential marketing metrics, terms, and strategies.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Financial Ratios */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-950/30 dark:to-indigo-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-sky-600" />
                            <span className="text-sm font-medium">Finance</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Profitability</div>
                            <div className="text-muted-foreground">ROI, ROA, Profit Margin</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Liquidity</div>
                            <div className="text-muted-foreground">Current Ratio, Quick Ratio</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Financial Ratios</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Key financial ratios and formulas for business analysis.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Project Management */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950/30 dark:to-purple-950/30 p-6 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-[80%] h-[80%]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-violet-600" />
                            <span className="text-sm font-medium">Project Management</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Methodologies</div>
                            <div className="text-muted-foreground">Agile, Scrum, Kanban</div>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-medium mb-1">Terms</div>
                            <div className="text-muted-foreground">Sprint, Backlog, Velocity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Project Management</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Project management methodologies and terminology.
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/create">
                          Create Similar <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

