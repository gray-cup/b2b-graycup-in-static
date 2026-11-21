import React from "react";

/* ---------- Page ---------- */
export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            Contact Gray Cup
          </h1>
          <p className="text-muted-foreground">
            Have a question or want to do business? There is always a way to
            reach us.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* General Enquiries */}
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-black mb-1">General Enquiries</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Response within 12 hours.
            </p>
            <a
              href="mailto:arjun@graycup.in"
              className="text-sm text-black underline underline-offset-4 hover:text-neutral-600"
            >
              arjun@graycup.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
