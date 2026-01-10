"use client";

import { Heart, QrCode, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface DonatePopupProps {
  isOpen: boolean;
  onClose: () => void;

  // Optional: pass from context later if you want dynamic bank info
  bankDetails?: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
}

const DEFAULT_BANK = {
  bankName: "Nepal Bank Limited",
  accountName: "Hyolmo Helping Hands",
  accountNumber: "0123456789012345",
};

async function safeCopy(text: string) {
  // modern way
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // fallback (older browsers)
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function DonatePopup({
  isOpen,
  onClose,
  bankDetails = DEFAULT_BANK,
}: DonatePopupProps) {
  const [copied, setCopied] = useState(false);

  // reset copied state when dialog closes
  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  const copyToClipboard = async (text: string) => {
    try {
      await safeCopy(text);
      setCopied(true);
      toast.success("Account number copied to clipboard.");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Failed to copy account number. Please try manually.");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-md bg-card border-border p-0 gap-0 max-h-[95vh] flex flex-col">
        {/* Fixed Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border flex-shrink-0">
          <DialogTitle className="text-2xl flex items-center gap-2 text-foreground">
            <Heart className="w-6 h-6 text-primary" />
            Make a Donation
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-7">
              Your generous contribution helps us continue our mission of
              supporting communities with dignity. Every donation makes a real
              difference.
            </p>

            {/* QR Code Section */}
            <div className="bg-muted rounded-xl p-6 text-center">
              <div className="w-48 h-48 mx-auto bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-4">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Scan to Donate
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Scan this QR code with your banking app to donate directly.
              </p>
            </div>

            {/* Bank Details */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">
                Bank Transfer Details
              </h4>

              <div className="bg-muted rounded-lg p-4 space-y-3">
                <Row label="Bank Name" value={bankDetails.bankName} />
                <Row label="Account Name" value={bankDetails.accountName} />

                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm text-muted-foreground">
                    Account Number
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground break-all text-right">
                      {bankDetails.accountNumber}
                    </span>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(bankDetails.accountNumber)}
                      aria-label="Copy account number"
                      title="Copy"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Note */}
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <p className="text-sm text-foreground">
                Your support strengthens our programs and helps us reach more
                people.
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="px-6 py-4 border-t border-border flex-shrink-0">
          <Button onClick={onClose} variant="hero" className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground text-right">{value}</span>
    </div>
  );
}