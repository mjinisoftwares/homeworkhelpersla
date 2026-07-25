"use client";

import React, { useState, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitOrderForm, type FormState } from "@/app/actions";

const SERVICES = [
  "Essay", "Research Paper", "Assignments", "Online Classes", "Quiz", 
  "Homework", "Tests", "Exams", "Thesis", "Dissertation", "Proofreading", 
  "Editing", "Rewriting", "Summarization", "Paraphrasing"
];

const LEVELS = [
  "High School", "Undergraduate", "Masters", "PhD", "Diploma", "Certificate", "Professional"
];

const SUBJECTS = [
  "Math", "Statistics", "Programming", "Physics", "Chemistry", "Biology", 
  "History", "English", "Economics", "Finance", "Accounting", "Marketing", 
  "Management", "Psychology", "Sociology", "Political Science", 
  "International Relations", "Criminal Justice", "Law", "Education", 
  "Nursing", "Health Sciences", "Computer Science", "Engineering", 
  "Environmental Science", "Geology", "Geography", "Astronomy"
];

const URGENCY = [
  "3 Hours", "6 Hours", "12 Hours", "24 Hours", "48 Hours", "3 Days", "5 Days", "7 Days", "14 Days", "Flexible"
];

export function OrderForm() {
  const [formData, setFormData] = useState({
    service: "",
    level: "",
    urgency: "",
    subject: "",
    quantity: "", // number of pages, questions, etc.
    email: "",
    details: "",
  });

  const [currentState, formAction, isPending] = useActionState<FormState, FormData>(submitOrderForm, {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };





  return (
    <form action={formAction} className="space-y-6 max-w-3xl mx-auto p-12 bg-card rounded-3xl border border-border shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-primary mb-2">Place an Order and We&apos;ll get Back to You With a Price</h2>
        <p className="text-muted-foreground text-sm">
          Price depends on subject, level, urgency, and length. Fill out the details below.
        </p>
      </div>

      {/* Hidden inputs to send state via form submission */}
      <input type="hidden" name="service" value={formData.service} />
      <input type="hidden" name="level" value={formData.level} />
      <input type="hidden" name="urgency" value={formData.urgency} />
      <input type="hidden" name="subject" value={formData.subject} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Service Needed</label>
          <Select onValueChange={(val) => handleSelectChange("service", val)} disabled={isPending}>
            <SelectTrigger>
              <SelectValue placeholder={formData.service || "Select Service"} />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Academic Level */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Academic Level</label>
          <Select onValueChange={(val) => handleSelectChange("level", val)} disabled={isPending}>
            <SelectTrigger>
              <SelectValue placeholder={formData.level || "Select Level"} />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Subject</label>
          <Select onValueChange={(val) => handleSelectChange("subject", val)} disabled={isPending}>
            <SelectTrigger>
              <SelectValue placeholder={formData.subject || "Select Subject"} />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Urgency */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Urgency / Deadline</label>
          <Select onValueChange={(val) => handleSelectChange("urgency", val)} disabled={isPending}>
            <SelectTrigger>
              <SelectValue placeholder={formData.urgency || "Select Urgency"} />
            </SelectTrigger>
            <SelectContent>
              {URGENCY.map((u) => <SelectItem key={u} value={u}>{u}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Length (Pages/Questions/Classes)</label>
          <Input 
            name="quantity" 
            placeholder="e.g. 5 Pages, 10 Questions..." 
            value={formData.quantity} 
            onChange={handleChange} 
            disabled={isPending}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Your Email</label>
          <Input 
            name="email" 
            type="email" 
            placeholder="you@example.com" 
            value={formData.email} 
            onChange={handleChange} 
            required
            disabled={isPending}
          />
        </div>
      </div>

      {/* Details Field */}
      <div className="space-y-2 pt-2">
        <label className="text-sm font-semibold">Additional Details & Instructions</label>
        <Textarea 
          name="details" 
          placeholder="Please provide topic, instructions, or any special requirements..." 
          value={formData.details} 
          onChange={handleChange} 
          rows={5} 
          required 
          disabled={isPending}
        />
      </div>

      {/* Messages */}
      {currentState?.success && currentState?.message && (
        <div className="p-4 rounded-md bg-green-50/50 border border-green-200">
          <p className="text-center text-sm font-medium text-green-600">
            ✓ {currentState.message}
          </p>
        </div>
      )}
      
      {currentState?.error && (
        <div className="p-4 rounded-md bg-red-50/50 border border-red-200">
          <p className="text-center text-sm font-medium text-red-600">
            {currentState.error}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base font-bold shadow-lg"
        >
          {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
          {isPending ? "Sending..." : "Submit Order"}
        </Button>
    {/* <Button 
        type="button" 
        onClick={handleWhatsApp}
        disabled={isPending}
        className="w-full h-12 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-base font-bold shadow-lg"
    >
        <MessageCircle className="mr-2 h-5 w-5" />
        Order via WhatsApp
    </Button> */}
      </div>
    </form>
  );
}
