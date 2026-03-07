"use client";

import { useState } from "react";

// Component data types
interface Component {
  id: string;
  name: string;
  brand: string;
  price: number;
  specs: {
    [key: string]: string | number;
  };
  image?: string;
}

interface ComponentCategory {
  id: string;
  name: string;
  icon: string;
  components: Component[];
}

// Sample component data
const componentData: ComponentCategory[] = [
  {
    id: "cpu",
    name: "CPU (Processor)",
    icon: "🔲",
    components: [
      {
        id: "cpu-1",
        name: "Intel Core i5-13600K",
        brand: "Intel",
        price: 319,
        specs: {
          cores: 14,
          threads: 20,
          baseClock: "3.5 GHz",
          boostClock: "5.1 GHz",
          tdp: "125W",
          socket: "LGA1700",
        },
      },
      {
        id: "cpu-2",
        name: "Intel Core i7-13700K",
        brand: "Intel",
        price: 419,
        specs: {
          cores: 16,
          threads: 24,
          baseClock: "3.4 GHz",
          boostClock: "5.4 GHz",
          tdp: "125W",
          socket: "LGA1700",
        },
      },
      {
        id: "cpu-3",
        name: "Intel Core i9-13900K",
        brand: "Intel",
        price: 589,
        specs: {
          cores: 24,
          threads: 32,
          baseClock: "3.0 GHz",
          boostClock: "5.8 GHz",
          tdp: "125W",
          socket: "LGA1700",
        },
      },
      {
        id: "cpu-4",
        name: "AMD Ryzen 5 7600X",
        brand: "AMD",
        price: 299,
        specs: {
          cores: 6,
          threads: 12,
          baseClock: "4.7 GHz",
          boostClock: "5.3 GHz",
          tdp: "105W",
          socket: "AM5",
        },
      },
      {
        id: "cpu-5",
        name: "AMD Ryzen 7 7800X3D",
        brand: "AMD",
        price: 449,
        specs: {
          cores: 8,
          threads: 16,
          baseClock: "4.2 GHz",
          boostClock: "5.0 GHz",
          tdp: "120W",
          socket: "AM5",
          cache: "96MB L3",
        },
      },
      {
        id: "cpu-6",
        name: "AMD Ryzen 9 7950X",
        brand: "AMD",
        price: 699,
        specs: {
          cores: 16,
          threads: 32,
          baseClock: "4.5 GHz",
          boostClock: "5.7 GHz",
          tdp: "170W",
          socket: "AM5",
        },
      },
    ],
  },
  {
    id: "gpu",
    name: "GPU (Graphics Card)",
    icon: "🎮",
    components: [
      {
        id: "gpu-1",
        name: "NVIDIA RTX 4060",
        brand: "NVIDIA",
        price: 299,
        specs: {
          memory: "8GB GDDR6",
          coreClock: "1830 MHz",
          boostClock: "2460 MHz",
          tdp: "115W",
          ports: "HDMI 2.1, 3x DisplayPort 1.4a",
        },
      },
      {
        id: "gpu-2",
        name: "NVIDIA RTX 4070",
        brand: "NVIDIA",
        price: 599,
        specs: {
          memory: "12GB GDDR6X",
          coreClock: "1920 MHz",
          boostClock: "2475 MHz",
          tdp: "200W",
          ports: "HDMI 2.1, 3x DisplayPort 1.4a",
        },
      },
      {
        id: "gpu-3",
        name: "NVIDIA RTX 4080",
        brand: "NVIDIA",
        price: 1199,
        specs: {
          memory: "16GB GDDR6X",
          coreClock: "2205 MHz",
          boostClock: "2505 MHz",
          tdp: "320W",
          ports: "HDMI 2.1, 3x DisplayPort 1.4a",
        },
      },
      {
        id: "gpu-4",
        name: "AMD Radeon RX 7600",
        brand: "AMD",
        price: 269,
        specs: {
          memory: "8GB GDDR6",
          gameClock: "2250 MHz",
          boostClock: "2655 MHz",
          tdp: "165W",
          ports: "HDMI 2.1, 3x DisplayPort 2.1",
        },
      },
      {
        id: "gpu-5",
        name: "AMD Radeon RX 7800 XT",
        brand: "AMD",
        price: 499,
        specs: {
          memory: "16GB GDDR6",
          gameClock: "2124 MHz",
          boostClock: "2430 MHz",
          tdp: "263W",
          ports: "HDMI 2.1, 3x DisplayPort 2.1",
        },
      },
      {
        id: "gpu-6",
        name: "AMD Radeon RX 7900 XTX",
        brand: "AMD",
        price: 999,
        specs: {
          memory: "24GB GDDR6",
          gameClock: "2300 MHz",
          boostClock: "2500 MHz",
          tdp: "355W",
          ports: "HDMI 2.1, 3x DisplayPort 2.1",
        },
      },
    ],
  },
  {
    id: "motherboard",
    name: "Motherboard",
    icon: "🔧",
    components: [
      {
        id: "mb-1",
        name: "ASUS ROG STRIX B660-A",
        brand: "ASUS",
        price: 219,
        specs: {
          socket: "LGA1700",
          chipset: "Intel B660",
          formFactor: "ATX",
          memorySlots: "4x DDR5",
          maxMemory: "128GB",
          pcie: "PCIe 5.0 x16, PCIe 4.0 x4",
        },
      },
      {
        id: "mb-2",
        name: "MSI MAG Z690 TOMAHAWK",
        brand: "MSI",
        price: 289,
        specs: {
          socket: "LGA1700",
          chipset: "Intel Z690",
          formFactor: "ATX",
          memorySlots: "4x DDR5",
          maxMemory: "128GB",
          pcie: "PCIe 5.0 x16, PCIe 4.0 x4",
        },
      },
      {
        id: "mb-3",
        name: "Gigabyte X670 AORUS ELITE",
        brand: "Gigabyte",
        price: 249,
        specs: {
          socket: "AM5",
          chipset: "AMD X670",
          formFactor: "ATX",
          memorySlots: "4x DDR5",
          maxMemory: "128GB",
          pcie: "PCIe 5.0 x16, PCIe 4.0 x4",
        },
      },
      {
        id: "mb-4",
        name: "ASRock B650 Pro RS",
        brand: "ASRock",
        price: 179,
        specs: {
          socket: "AM5",
          chipset: "AMD B650",
          formFactor: "ATX",
          memorySlots: "4x DDR5",
          maxMemory: "128GB",
          pcie: "PCIe 4.0 x16, PCIe 4.0 x4",
        },
      },
    ],
  },
  {
    id: "ram",
    name: "RAM (Memory)",
    icon: "💾",
    components: [
      {
        id: "ram-1",
        name: "Corsair Vengeance 16GB",
        brand: "Corsair",
        price: 89,
        specs: {
          capacity: "16GB (2x8GB)",
          type: "DDR5",
          speed: "5600 MHz",
          latency: "CL36",
          voltage: "1.25V",
        },
      },
      {
        id: "ram-2",
        name: "G.Skill Trident Z5 32GB",
        brand: "G.Skill",
        price: 169,
        specs: {
          capacity: "32GB (2x16GB)",
          type: "DDR5",
          speed: "6000 MHz",
          latency: "CL36",
          voltage: "1.35V",
        },
      },
      {
        id: "ram-3",
        name: "Kingston Fury Beast 64GB",
        brand: "Kingston",
        price: 299,
        specs: {
          capacity: "64GB (2x32GB)",
          type: "DDR5",
          speed: "5600 MHz",
          latency: "CL40",
          voltage: "1.25V",
        },
      },
    ],
  },
  {
    id: "storage",
    name: "Storage (SSD/HDD)",
    icon: "💿",
    components: [
      {
        id: "storage-1",
        name: "Samsung 980 PRO 1TB",
        brand: "Samsung",
        price: 129,
        specs: {
          capacity: "1TB",
          type: "NVMe SSD",
          interface: "PCIe 4.0 x4",
          readSpeed: "7000 MB/s",
          writeSpeed: "5000 MB/s",
        },
      },
      {
        id: "storage-2",
        name: "WD Black SN850X 2TB",
        brand: "Western Digital",
        price: 249,
        specs: {
          capacity: "2TB",
          type: "NVMe SSD",
          interface: "PCIe 4.0 x4",
          readSpeed: "7300 MB/s",
          writeSpeed: "6600 MB/s",
        },
      },
      {
        id: "storage-3",
        name: "Crucial P5 Plus 4TB",
        brand: "Crucial",
        price: 449,
        specs: {
          capacity: "4TB",
          type: "NVMe SSD",
          interface: "PCIe 4.0 x4",
          readSpeed: "6600 MB/s",
          writeSpeed: "5000 MB/s",
        },
      },
    ],
  },
  {
    id: "psu",
    name: "PSU (Power Supply)",
    icon: "⚡",
    components: [
      {
        id: "psu-1",
        name: "Corsair RM750e",
        brand: "Corsair",
        price: 109,
        specs: {
          wattage: "750W",
          efficiency: "80+ Gold",
          modular: "Fully Modular",
          fanSize: "135mm",
          warranty: "10 Years",
        },
      },
      {
        id: "psu-2",
        name: "EVGA SuperNOVA 850 G6",
        brand: "EVGA",
        price: 139,
        specs: {
          wattage: "850W",
          efficiency: "80+ Gold",
          modular: "Fully Modular",
          fanSize: "135mm",
          warranty: "10 Years",
        },
      },
      {
        id: "psu-3",
        name: "Seasonic PRIME TX-1000",
        brand: "Seasonic",
        price: 279,
        specs: {
          wattage: "1000W",
          efficiency: "80+ Titanium",
          modular: "Fully Modular",
          fanSize: "135mm",
          warranty: "12 Years",
        },
      },
    ],
  },
  {
    id: "case",
    name: "Case",
    icon: "📦",
    components: [
      {
        id: "case-1",
        name: "NZXT H510 Flow",
        brand: "NZXT",
        price: 109,
        specs: {
          formFactor: "Mid Tower ATX",
          color: "Black",
          sidePanelType: "Tempered Glass",
          fans: "2x 120mm (Front)",
          maxGPULength: "381mm",
        },
      },
      {
        id: "case-2",
        name: "Corsair 4000D Airflow",
        brand: "Corsair",
        price: 104,
        specs: {
          formFactor: "Mid Tower ATX",
          color: "Black",
          sidePanelType: "Tempered Glass",
          fans: "2x 120mm (Front)",
          maxGPULength: "360mm",
        },
      },
      {
        id: "case-3",
        name: "Lian Li O11 Dynamic EVO",
        brand: "Lian Li",
        price: 169,
        specs: {
          formFactor: "Mid Tower ATX",
          color: "Black/White",
          sidePanelType: "Tempered Glass",
          fans: "None (supports up to 13)",
          maxGPULength: "420mm",
        },
      },
    ],
  },
];

export default function BuildPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("cpu");
  const [selectedComponents, setSelectedComponents] = useState<{
    [key: string]: Component;
  }>({});

  const handleComponentSelect = (categoryId: string, component: Component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [categoryId]: component,
    }));
  };

  const getTotalPrice = () => {
    return Object.values(selectedComponents).reduce(
      (sum, component) => sum + component.price,
      0,
    );
  };

  const currentCategory = componentData.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">PC Builder</h1>
              <p className="text-gray-400 text-sm">Build your dream desktop</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Total Cost</p>
              <p className="text-3xl font-bold text-purple-400">
                ${getTotalPrice()}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Component Categories */}
        <div className="w-64 bg-black/30 backdrop-blur-md border-r border-white/10 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Components
            </h2>
            <div className="space-y-2">
              {componentData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{category.name}</div>
                      {selectedComponents[category.id] && (
                        <div className="text-xs text-purple-300 truncate">
                          {selectedComponents[category.id].name}
                        </div>
                      )}
                    </div>
                    {selectedComponents[category.id] && (
                      <span className="text-green-400">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Component Selection */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentCategory?.name}
            </h2>
            <p className="text-gray-400 mb-6">
              Choose the perfect {currentCategory?.name.toLowerCase()} for your
              build
            </p>

            <div className="space-y-4">
              {currentCategory?.components.map((component) => (
                <div
                  key={component.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 transition-all cursor-pointer ${
                    selectedComponents[selectedCategory]?.id === component.id
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() =>
                    handleComponentSelect(selectedCategory, component)
                  }
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {component.name}
                      </h3>
                      <p className="text-purple-400 font-medium">
                        {component.brand}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        ${component.price}
                      </p>
                      {selectedComponents[selectedCategory]?.id ===
                        component.id && (
                        <span className="inline-block mt-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(component.specs).map(([key, value]) => (
                      <div key={key} className="bg-black/30 rounded-lg p-3">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="text-white font-medium text-sm">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Build Preview */}
        <div className="w-96 bg-black/30 backdrop-blur-md border-l border-white/10 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Your Build</h2>

            {/* Visual Preview */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 mb-6 border border-purple-500/30">
              <div className="relative">
                {/* PC Case Visualization */}
                <div className="bg-black/50 rounded-lg p-6 border-2 border-purple-500/50">
                  <div className="space-y-3">
                    {/* CPU */}
                    <div
                      className={`h-12 rounded flex items-center px-3 ${
                        selectedComponents.cpu
                          ? "bg-blue-500/30 border border-blue-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.cpu
                          ? `🔲 ${selectedComponents.cpu.name}`
                          : "🔲 CPU - Not Selected"}
                      </span>
                    </div>

                    {/* GPU */}
                    <div
                      className={`h-16 rounded flex items-center px-3 ${
                        selectedComponents.gpu
                          ? "bg-green-500/30 border border-green-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.gpu
                          ? `🎮 ${selectedComponents.gpu.name}`
                          : "🎮 GPU - Not Selected"}
                      </span>
                    </div>

                    {/* Motherboard */}
                    <div
                      className={`h-20 rounded flex items-center px-3 ${
                        selectedComponents.motherboard
                          ? "bg-purple-500/30 border border-purple-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.motherboard
                          ? `🔧 ${selectedComponents.motherboard.name}`
                          : "🔧 Motherboard - Not Selected"}
                      </span>
                    </div>

                    {/* RAM */}
                    <div
                      className={`h-10 rounded flex items-center px-3 ${
                        selectedComponents.ram
                          ? "bg-yellow-500/30 border border-yellow-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.ram
                          ? `💾 ${selectedComponents.ram.name}`
                          : "💾 RAM - Not Selected"}
                      </span>
                    </div>

                    {/* Storage */}
                    <div
                      className={`h-8 rounded flex items-center px-3 ${
                        selectedComponents.storage
                          ? "bg-orange-500/30 border border-orange-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.storage
                          ? `💿 ${selectedComponents.storage.name}`
                          : "💿 Storage - Not Selected"}
                      </span>
                    </div>

                    {/* PSU */}
                    <div
                      className={`h-12 rounded flex items-center px-3 ${
                        selectedComponents.psu
                          ? "bg-red-500/30 border border-red-400"
                          : "bg-gray-700/30 border border-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {selectedComponents.psu
                          ? `⚡ ${selectedComponents.psu.name}`
                          : "⚡ PSU - Not Selected"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Case Label */}
                {selectedComponents.case && (
                  <div className="mt-3 text-center">
                    <p className="text-purple-400 text-sm">
                      📦 {selectedComponents.case.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Component List */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Selected Components
              </h3>
              {Object.keys(selectedComponents).length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No components selected yet
                </p>
              ) : (
                <div className="space-y-2">
                  {Object.entries(selectedComponents).map(
                    ([categoryId, component]) => (
                      <div
                        key={categoryId}
                        className="bg-white/5 rounded-lg p-3"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-xs text-gray-400 uppercase">
                              {
                                componentData.find((c) => c.id === categoryId)
                                  ?.name
                              }
                            </p>
                            <p className="text-white font-medium text-sm">
                              {component.name}
                            </p>
                          </div>
                          <p className="text-purple-400 font-bold text-sm">
                            ${component.price}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}

              {/* Total */}
              <div className="bg-purple-600/20 border border-purple-500/50 rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Total Price</span>
                  <span className="text-2xl font-bold text-purple-400">
                    ${getTotalPrice()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 mt-6">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Save Build
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition-colors">
                  Share Build
                </button>
                <button
                  onClick={() => setSelectedComponents({})}
                  className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
