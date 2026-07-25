"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const constructMessage = () => {
    return `New Order Request:
- Service: ${formData.service || "Not specified"}
- Academic Level: ${formData.level || "Not specified"}
- Urgency: ${formData.urgency || "Not specified"}
- Subject: ${formData.subject || "Not specified"}
- Quantity (Pages/Words/etc): ${formData.quantity || "Not specified"}
- Email: ${formData.email}

Details: 
${formData.details}`;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(constructMessage());
    const whatsappNumber = "1234567890"; // Replace with your number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(constructMessage());
    const emailAddress = "support@homeworkdoers.help"; 
    window.open(`mailto:${emailAddress}?subject=New Order Request - ${formData.service || "Homework Help"}&body=${message}`, "_blank");
  };

  return (
    <form className="space-y-6 max-w-3xl mx-auto p-8 bg-card rounded-3xl border border-border shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-primary mb-2">Calculate Price & Order</h2>
        <p className="text-muted-foreground text-sm">
          Price depends on subject, level, urgency, and length. Fill out the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Service Needed</label>
          <Select onValueChange={(val) => handleSelectChange("service", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Academic Level */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Academic Level</label>
          <Select onValueChange={(val) => handleSelectChange("level", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Subject</label>
          <Select onValueChange={(val) => handleSelectChange("subject", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Urgency */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Urgency / Deadline</label>
          <Select onValueChange={(val) => handleSelectChange("urgency", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Urgency" />
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
        />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <Button 
          type="button" 
          onClick={handleEmail}
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base font-bold shadow-lg"
        >
          <Send className="mr-2 h-5 w-5" />
          Send via Email
        </Button>
        <Button 
          type="button" 
          onClick={handleWhatsApp}
          className="w-full h-12 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-base font-bold shadow-lg"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Order via WhatsApp
        </Button>
      </div>
    </form>
  );
}
