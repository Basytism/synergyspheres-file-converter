// SynergySpheres 3.0 | File Converter UI
// Modern, branded 3D experience + responsive dashboard
// Framework: React + TailwindCSS + Three.js (3D), Framer Motion (animations)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileConverterCard } from "@/components/FileConverterCard";
import { FileDropZone } from "@/components/FileDropZone";
import { BrandingSphere } from "@/components/3D/BrandingSphere";
import { FileOutput } from "@/components/FileOutput";

export default function ConverterDashboard() {
  const [convertedFile, setConvertedFile] = useState(null);

  const handleConversion = async (file, type) => {
    // Placeholder logic - will connect to actual converter engines
    const mockOutput = new File(["converted content"], "output.txt", { type: "text/plain" });
    setConvertedFile(mockOutput);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#101c3c] text-white p-6">
      {/* Hero Section with 3D Branding */}
      <section className="flex flex-col items-center justify-center space-y-6">
        <div className="w-full h-[300px]">
          <BrandingSphere />
        </div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Synergy Spheres 3.0 – Smart File Converter Studio
        </motion.h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Seamlessly convert developer, Web3, and data formats in one secure, modern, open-source dashboard.
        </p>
      </section>

      {/* Tabs for Conversion Types */}
      <Tabs defaultValue="code" className="mt-10">
        <TabsList className="bg-[#1b1b2f] border border-gray-700 rounded-xl p-2 flex flex-wrap justify-center gap-2">
          <TabsTrigger value="code">Code & Config</TabsTrigger>
          <TabsTrigger value="web3">Web3</TabsTrigger>
          <TabsTrigger value="docs">Documents</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileConverterCard title="JSON ⇄ YAML" onConvert={handleConversion} />
          <FileConverterCard title="CSV ⇄ JSON" onConvert={handleConversion} />
          <FileConverterCard title="XML ⇄ JSON" onConvert={handleConversion} />
          <FileConverterCard title=".env ⇄ JSON" onConvert={handleConversion} />
        </TabsContent>

        <TabsContent value="web3" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileConverterCard title="Solidity ⇄ ABI (JSON)" onConvert={handleConversion} />
          <FileConverterCard title="IPFS CID ⇄ HTTP URL" onConvert={handleConversion} />
          <FileConverterCard title="Base64 ⇄ JSON" onConvert={handleConversion} />
          <FileConverterCard title="NFT Metadata ⇄ JSON" onConvert={handleConversion} />
        </TabsContent>

        <TabsContent value="docs" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileConverterCard title="DOCX ⇄ PDF" onConvert={handleConversion} />
          <FileConverterCard title="CSV ⇄ XLSX" onConvert={handleConversion} />
          <FileConverterCard title="TXT ⇄ JSON" onConvert={handleConversion} />
          <FileConverterCard title="JSON ⇄ PDF Report" onConvert={handleConversion} />
        </TabsContent>

        <TabsContent value="media" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileConverterCard title="PDF ⇄ PNG" onConvert={handleConversion} />
          <FileConverterCard title="MP4 ⇄ GIF" onConvert={handleConversion} />
          <FileConverterCard title="WASM ⇄ WAT" onConvert={handleConversion} />
        </TabsContent>
      </Tabs>

      {/* File Upload Area */}
      <div className="mt-12">
        <FileDropZone onConvert={handleConversion} />
      </div>

      {/* Converted Output Preview */}
      {convertedFile && (
        <div className="mt-8">
          <FileOutput file={convertedFile} />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        Powered by <strong>Synergy Spheres 3.0</strong> | Open Source & Secure by Design
      </footer>
    </div>
  );
}
