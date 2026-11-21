import React from "react";

export default function WhiteLabelPage() {
  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            White Label
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Your Brand. Our Tea & Coffee.
          </h1>
          <p className="text-md text-muted-foreground max-w-xl">
            We can be your sourcing partner — supplying premium quality tea and
            coffee under your brand name. Simple, reliable, and scalable.
          </p>
        </div>

        <hr className="mb-12" />

        {/* What we offer */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            What we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Product Sourcing</p>
              <p className="text-sm text-muted-foreground">
                We source and supply tea leaves, CTC, and coffee beans from
                India — ready to carry your label.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Flexible Quantities</p>
              <p className="text-sm text-muted-foreground">
                Whether you're starting small or scaling up, we accommodate
                orders of all sizes with consistent quality.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Quality Assurance</p>
              <p className="text-sm text-muted-foreground">
                Every batch is quality-checked before dispatch. You get what you
                expect, every time.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Worldwide Shipping</p>
              <p className="text-sm text-muted-foreground">
                We ship globally. If you have a market, we can reach it.
              </p>
            </div>
          </div>
        </div>

        {/* Packaging note */}
        <div className="mb-12 p-5 border border-neutral-200 rounded-lg bg-neutral-50">
          <p className="text-sm font-semibold text-black mb-1">
            A note on packaging
          </p>
          <p className="text-sm text-muted-foreground">
            We focus entirely on sourcing — we do not provide custom packaging.
            For branded packaging, we recommend{" "}
            <a
              href="https://www.swisspac.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-4 hover:text-neutral-600"
            >
              SwissPac
            </a>
            , a trusted packaging partner used by many brands worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
