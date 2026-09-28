"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  MessageSquare,
  Users,
  Star,
  PlusCircle,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Database,
} from "lucide-react";
import { tourPackages, mockEnquiries, EnquirySubmission, tourCategories } from "@/data/mockData";

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>(mockEnquiries);

  const handleStatusChange = (id: string, newStatus: EnquirySubmission["status"]) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  const getStatusBadge = (status: EnquirySubmission["status"]) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "contacted":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "confirmed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "closed":
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Operations &amp; Enquiry Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time management for Delightful India Holidays bookings, enquiries, and tour packages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/tours"
            className="inline-flex items-center gap-2 rounded-xl bg-[#c9a766] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#b8924f] transition-all"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Manage Tours</span>
          </Link>
        </div>
      </div>

      {/* Backend Integration Note for Developer */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
        <Database className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-amber-800 leading-relaxed">
          <strong>Backend Developer Notice:</strong> All models (Tours, Enquiries, Reviews, Team) are cleanly separated
          in <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono font-bold">src/data/mockData.ts</code>. You can
          connect this page directly to PostgreSQL, MongoDB, or Prisma by replacing the mock state with Next.js Server
          Actions or REST API endpoints.
        </div>
      </div>

      {/* 4 KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Total Packages</span>
            <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Compass className="h-5 w-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
            {tourPackages.length}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <span>Across 7 Main Categories</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Guest Enquiries</span>
            <div className="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
            {enquiries.length} New
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            2–4 hours avg response time
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Average Rating</span>
            <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Star className="h-5 w-5 fill-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 mt-2 font-serif flex items-center gap-1">
            <span>5.0</span>
            <span className="text-sm font-normal text-slate-400">/ 5.0</span>
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">
            100% verified guest ratings
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Happy Guests</span>
            <div className="h-9 w-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
            51,000+
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            Over 15+ years in business
          </div>
        </div>
      </div>

      {/* Enquiries Management Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Customer Travel Enquiries</h2>
            <p className="text-xs text-slate-500">
              Submitted from the live website inquiry forms and tour booking widgets.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Total {enquiries.length} Enquiries
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Guest Info</th>
                <th className="py-3 px-4">Tour Requested</th>
                <th className="py-3 px-4">Travel Date</th>
                <th className="py-3 px-4">Guests</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{enq.name}</div>
                    <div className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                      <Mail className="h-3 w-3" />
                      <span>{enq.email}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      <span>{enq.phone}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    {enq.tourName || "Custom Tour Plan"}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-600">
                    {enq.travelDate || "Flexible"}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {enq.adults} Adults {enq.children > 0 && `, ${enq.children} Kids`}
                  </td>
                  <td className="py-3.5 px-4 max-w-xs truncate text-slate-500">
                    {enq.message}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                        enq.status
                      )}`}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <select
                      value={enq.status}
                      onChange={(e) =>
                        handleStatusChange(
                          enq.id,
                          e.target.value as EnquirySubmission["status"]
                        )
                      }
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 focus:outline-none"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
