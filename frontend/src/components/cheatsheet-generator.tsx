"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Upload, FileText, ImageIcon, FileVideo, CreditCard, File, Maximize2, Sparkles, Layout } from "lucide-react"

export function CheatsheetGenerator() {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState("any-size")
  const [customWidth, setCustomWidth] = useState(8.5)
  const [customHeight, setCustomHeight] = useState(11)
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <ImageIcon className="h-5 w-5 text-purple-600" />
    if (file.type.startsWith("video/")) return <FileVideo className="h-5 w-5 text-purple-600" />
    if (file.type === "application/pdf") return <FileText className="h-5 w-5 text-purple-600" />
    return <File className="h-5 w-5 text-purple-600" />
  }

  const handleGenerate = () => {
    setIsGenerating(true)

    // Simulate processing time
    setTimeout(() => {
      // In a real app, you would process the files and generate the cheatsheet here
      // For now, we'll just redirect to the results page

      // Create a query string with the size information
      let sizeInfo = selectedSize
      if (selectedSize === "custom") {
        sizeInfo = `custom-${customWidth}x${customHeight}`
      }

      router.push(`/results?size=${sizeInfo}&files=${files.length}`)
    }, 1500)
  }

  return (
    <section className="py-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-purple-200 dark:border-purple-900">
            <CardContent className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">1. Upload Your Content</h3>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                      isDragging
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                        : "border-gray-300 dark:border-gray-700"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="h-10 w-10 mx-auto mb-4 text-purple-600" />
                    <h4 className="text-lg font-medium mb-2">Drag & Drop Files Here</h4>
                    <p className="text-sm text-muted-foreground mb-4">Support for text, PDF, and images</p>
                    <div className="relative">
                      <Input
                        id="file-upload"
                        type="file"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                      />
                      <Button variant="outline" className="relative">
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Uploaded Files:</h4>
                      <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-md">
                            {getFileIcon(file)}
                            <span className="text-sm truncate">{file.name}</span>
                            <span className="text-xs text-muted-foreground ml-auto">
                              {(file.size / 1024).toFixed(0)} KB
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">2. Choose Size & Format</h3>

                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any-size" id="any-size" />
                      <Label htmlFor="any-size" className="flex items-center gap-2 cursor-pointer">
                        <Layout className="h-4 w-4" />
                        <span>Any Size</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="index-card" id="index-card" />
                      <Label htmlFor="index-card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        <span>Index Card (3×5 inches)</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single-page" id="single-page" />
                      <Label htmlFor="single-page" className="flex items-center gap-2 cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <span>Single Page (8.5×11 inches)</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="double-sided" id="double-sided" />
                      <Label htmlFor="double-sided" className="flex items-center gap-2 cursor-pointer">
                        <FileText className="h-4 w-4 transform rotate-180" />
                        <span>Double Sided</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom" className="flex items-center gap-2 cursor-pointer">
                        <Maximize2 className="h-4 w-4" />
                        <span>Custom Size</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {selectedSize === "custom" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="width">Width (inches): {customWidth}</Label>
                        </div>
                        <Slider
                          id="width"
                          min={1}
                          max={24}
                          step={0.5}
                          value={[customWidth]}
                          onValueChange={(value) => setCustomWidth(value[0])}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="height">Height (inches): {customHeight}</Label>
                        </div>
                        <Slider
                          id="height"
                          min={1}
                          max={36}
                          step={0.5}
                          value={[customHeight]}
                          onValueChange={(value) => setCustomHeight(value[0])}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">3. Generate Your Cheatsheet</h3>
                    <div className="space-y-3">
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 gap-2"
                        onClick={handleGenerate}
                        disabled={files.length === 0 || isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4" />
                            Generate Cheatsheet
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
