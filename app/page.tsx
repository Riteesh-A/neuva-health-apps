"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  const activeContracts = [
    {
      id: "TRT-2024-001",
      name: "Property Cat XL Treaty",
      counterparty: "Munich Re / Willis",
      effectiveDate: "2024-01-01",
      renewalDate: "2025-01-01",
      flag: "Clause Anomaly",
      flagIcon: "⚠️",
      manager: "Sarah Chen",
    },
    {
      id: "TRT-2024-002",
      name: "Casualty Quota Share",
      counterparty: "Swiss Re / Aon",
      effectiveDate: "2024-03-15",
      renewalDate: "2025-03-15",
      flag: "Gap Detected",
      flagIcon: "🛑",
      manager: "Michael Johnson",
    },
    {
      id: "END-2024-003",
      name: "Cyber Exclusion Endorsement",
      counterparty: "Hannover Re / Guy Carpenter",
      effectiveDate: "2024-02-10",
      renewalDate: "2025-02-10",
      flag: "",
      flagIcon: "",
      manager: "David Williams",
    },
    {
      id: "FAC-2024-004",
      name: "Energy Facultative Slip",
      counterparty: "SCOR / JLT Re",
      effectiveDate: "2024-04-01",
      renewalDate: "2025-04-01",
      flag: "",
      flagIcon: "",
      manager: "Lisa Rodriguez",
    },
    {
      id: "TRT-2024-005",
      name: "Marine Hull Treaty",
      counterparty: "Allianz / Marsh",
      effectiveDate: "2024-01-15",
      renewalDate: "2025-01-15",
      flag: "Clause Anomaly",
      flagIcon: "⚠️",
      manager: "James Wilson",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col font-inter">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-xl">Aptos AI</div>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={activeTab === "dashboard" ? "bg-slate-100" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard (2)
            </Button>
            <Button
              variant="ghost"
              className={activeTab === "treaties" ? "bg-slate-100" : ""}
              onClick={() => setActiveTab("treaties")}
            >
              Treaties (1)
            </Button>
            <Button
              variant="ghost"
              className={activeTab === "analytics" ? "bg-slate-100" : ""}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search treaties, slips, endorsements..."
              className="pl-8 bg-slate-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">New Treaty Slip</Button>
          <Button variant="outline">Create Endorsement</Button>
          <Button variant="ghost" size="icon">
            <span className="sr-only">Ask AI</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-help-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side - Active Contracts and Contract Workspace */}
        <div className="flex-1 flex flex-col">
          {/* Active Contracts Panel */}
          <div className="p-4 overflow-auto">
            <div>
              <h2 className="text-xl font-semibold mb-4">Active Contracts</h2>
              <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search contracts..." className="pl-8 bg-slate-50" />
                </div>
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm" className="bg-slate-100">
                  All Contracts
                </Button>
                <Button variant="outline" size="sm">
                  My Contracts
                </Button>
                <Button variant="outline" size="sm">
                  Renewals Due
                </Button>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-500 px-3 py-2 border-b">
                  <div className="col-span-3">Contract ID & Name</div>
                  <div className="col-span-3">Counterparty</div>
                  <div className="col-span-2">Renewal Date</div>
                  <div className="col-span-2">AI Flag</div>
                  <div className="col-span-1">Manager</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {activeContracts.map((contract) => (
                  <div
                    key={contract.id}
                    className="grid grid-cols-12 bg-white rounded-md border p-3 text-sm hover:bg-slate-50"
                  >
                    <div className="col-span-3">
                      <div className="font-medium">{contract.id}</div>
                      <div className="text-gray-600 text-xs">{contract.name}</div>
                    </div>
                    <div className="col-span-3 flex items-center text-xs">{contract.counterparty}</div>
                    <div className="col-span-2 flex items-center text-xs">{contract.renewalDate}</div>
                    <div className="col-span-2 flex items-center">
                      {contract.flag && (
                        <span className="inline-flex items-center">
                          <span className="mr-1">{contract.flagIcon}</span>
                          <span className="text-xs text-red-600">{contract.flag}</span>
                        </span>
                      )}
                    </div>
                    <div className="col-span-1 flex items-center text-xs">{contract.manager}</div>
                    <div className="col-span-1 flex items-center">
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contract Workspace Panel - Hidden initially, will be shown when a contract is selected */}
          <div className="border-t p-4 hidden">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Contract Workspace</h2>
              <div className="text-sm text-gray-500 mt-1">Draft, compare, and finalize treaty wordings</div>
            </div>

            <Tabs defaultValue="treaty" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="treaty">Treaty Slip</TabsTrigger>
                <TabsTrigger value="facultative">Facultative</TabsTrigger>
                <TabsTrigger value="endorsement">Endorsement</TabsTrigger>
              </TabsList>
              <TabsContent value="treaty" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Treaty Draft 1</h3>
                        <div className="flex gap-4">
                          <div className="flex-1 border rounded-md p-3 bg-white text-sm h-48 overflow-y-auto">
                            <p className="mb-2 font-medium">Current Draft</p>
                            <p className="text-xs">
                              This Property Catastrophe Excess of Loss Reinsurance Contract (hereinafter referred to as
                              the "Contract") is made and entered into by and between...
                            </p>
                            <p className="mt-2 text-xs">ARTICLE 1 - BUSINESS COVERED</p>
                            <p className="mt-1 text-xs">
                              This Contract applies to all Loss Occurrences during the term of this Contract for all
                              Property business underwritten by the Company...
                            </p>
                          </div>
                          <div className="flex-1 border rounded-md p-3 bg-slate-50 text-sm h-48 overflow-y-auto">
                            <p className="mb-2 font-medium">AI Suggestions</p>
                            <div className="p-2 border-l-2 border-amber-400 bg-amber-50 mb-2">
                              <p className="text-xs font-medium text-amber-700">⚠️ Clause Anomaly</p>
                              <p className="text-xs mt-1">Standard cyber exclusion missing</p>
                            </div>
                            <div className="p-2 border-l-2 border-blue-400 bg-blue-50">
                              <p className="text-xs font-medium text-blue-700">📌 Suggested Clause</p>
                              <p className="text-xs mt-1">
                                This Contract excludes all cyber risks as defined in CIEC...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          Request Changes
                        </Button>
                        <Button size="sm">Approve</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Sidebar - AI Assistant & Knowledge Panel (Narrower) */}
        <div className="w-80 border-l p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <div className="text-xs text-gray-500 mt-1">Contract playbook & insights</div>
          </div>

          <div className="bg-white border rounded-md p-3 mb-4">
            <div className="mb-3 space-y-3">
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="bg-slate-100 rounded-lg p-2 text-xs">How can I assist with your contracts today?</div>
              </div>

              <div className="flex gap-2 justify-end">
                <div className="bg-blue-100 rounded-lg p-2 text-xs max-w-[200px]">
                  Show me standard cyber exclusion clause
                </div>
                <div className="h-6 w-6 rounded-full bg-orange-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="bg-slate-100 rounded-lg p-2 text-xs">
                  Here's the standard cyber exclusion:
                  <div className="mt-1 p-1 border-l-2 border-blue-400 bg-blue-50">
                    <p className="text-xs">This Contract excludes all cyber risks as defined in CIEC...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Input type="text" placeholder="Ask Aptos AI..." className="pr-12 text-xs" />
              <Button size="sm" className="absolute right-0 top-0 h-full rounded-l-none text-xs px-2">
                Send
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-md p-3 mb-4">
            <h3 className="font-medium mb-2 text-sm">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-2">
              <Button variant="outline" size="sm" className="justify-start text-xs">
                <span className="mr-1">📄</span> Draft Endorsement
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-xs">
                <span className="mr-1">📋</span> Clause Library
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-xs">
                <span className="mr-1">📅</span> Renewals Calendar
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-xs">
                <span className="mr-1">⚠️</span> Anomaly Alerts
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-md p-3">
            <h3 className="font-medium mb-2 text-sm">Recent Activity</h3>
            <div className="space-y-2">
              <div className="text-xs text-gray-600 p-2 bg-slate-50 rounded">
                <div className="font-medium">Cyber clause inserted</div>
                <div className="text-gray-500">TRT-2024-001 • 2 min ago</div>
              </div>
              <div className="text-xs text-gray-600 p-2 bg-slate-50 rounded">
                <div className="font-medium">Anomaly detected</div>
                <div className="text-gray-500">TRT-2024-002 • 5 min ago</div>
              </div>
              <div className="text-xs text-gray-600 p-2 bg-slate-50 rounded">
                <div className="font-medium">Treaty draft approved</div>
                <div className="text-gray-500">TRT-2024-003 • 10 min ago</div>
              </div>
              <div className="text-xs text-gray-600 p-2 bg-slate-50 rounded">
                <div className="font-medium">New endorsement created</div>
                <div className="text-gray-500">END-2024-001 • 15 min ago</div>
              </div>
              <div className="text-xs text-gray-600 p-2 bg-slate-50 rounded">
                <div className="font-medium">Renewal notice sent</div>
                <div className="text-gray-500">TRT-2023-015 • 30 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="border-t bg-slate-50 p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-md border">
            <h3 className="text-sm font-medium mb-2">Renewals Calendar</h3>
            <div className="text-xs text-gray-500">5 treaties due for renewal in next 30 days</div>
          </div>
          <div className="bg-white p-3 rounded-md border">
            <h3 className="text-sm font-medium mb-2">Clause Library Health</h3>
            <div className="text-xs text-gray-500">87% of standard clauses used in recent treaties</div>
          </div>
          <div className="bg-white p-3 rounded-md border">
            <h3 className="text-sm font-medium mb-2">Anomaly Alerts</h3>
            <div className="text-xs text-gray-500">3 contracts flagged with inconsistent clauses</div>
          </div>
          <div className="bg-white p-3 rounded-md border">
            <h3 className="text-sm font-medium mb-2">Team Activity Feed</h3>
            <div className="text-xs text-gray-500">12 document edits in the last 24 hours</div>
          </div>
        </div>
      </div>
    </div>
  )
}
