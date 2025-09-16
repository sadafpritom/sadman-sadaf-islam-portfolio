"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- Contact Information ---
const contactInformation = [
  {
    icon: Mail,
    label: "Email",
    value: "sadafpritom6595@gmail.com",
    href: "mailto:sadafpritom6595@gmail.com",
    description: "Send me an email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (437) 269-0856",
    href: "tel:+14372690856",
    description: "Give me a call",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, ON",
    href: "#",
    description: "My current location",
  },
];

// --- Social Media Links ---
const socialMediaLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/sadafpritom" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadman-sadaf-islam/",
  },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/sadmansadaf" },
  {
    icon: ExternalLink,
    label: "Flickr",
    href: "https://www.flickr.com/photos/197730320@N05/",
  },
];

// --- Social Link Item ---
interface SocialLinkItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

function SocialLinkItem({ icon: Icon, label, href }: SocialLinkItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      onClick={handleClick}
      className="flex items-center space-x-3 p-4 rounded-lg glass-card hover:bg-white/5 transition-all group cursor-pointer"
      aria-label={`${label} profile`}
    >
      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-foreground">{label}</div>
      </div>
    </a>
  );
}

// --- Main Component ---
export function ContactSection() {
  const [state, handleSubmit] = useForm("myzdavde");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        `${formData.inquiryType}: ${formData.subject}`
      );
      const body = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Inquiry Type: ${formData.inquiryType}

      Message:
      ${formData.message}
      `);

      const mailtoLink = `mailto:sadafpritom6595@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      toast.success(
        "Email client opened! Please send the email to complete your inquiry."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can
            build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send me a message
            </h3>

            {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card bg-background/80 border-white/10 focus:border-primary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card bg-background/80 border-white/10 focus:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                {/* Phone & Inquiry Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass-card bg-background/80 border-white/10 focus:border-primary/50"
                      placeholder="+1 (xxx) xxx-xxxx"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full appearance-none glass-card bg-background/80 border border-white/10 focus:border-primary/50 rounded-md px-3 py-2 text-foreground"
                      >
                        <option value="" disabled>
                          Select inquiry type
                        </option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Server Administration">
                          Server Administration
                        </option>
                        <option value="Database Management">
                          Database Management
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Photography Services">
                          Photography Services
                        </option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card bg-background/80 border-white/10 focus:border-primary/50"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card bg-background/80 border-white/10 focus:border-primary/50 min-h-[120px] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-effect group"
                  disabled={isSubmitting || state.submitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <h4 className="text-xl font-semibold text-foreground">
                  Thanks for reaching out!
                </h4>
                <p className="text-muted-foreground max-w-md">
                  I’ll get back to you as soon as possible. Meanwhile, feel free
                  to connect with me on social media.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInformation.map((info, index) => {
                  const Icon = info.icon;
                  const isExternalLink = info.href !== "#";
                  return (
                    <a
                      key={index}
                      href={info.href}
                      {...(isExternalLink && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Connect with me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialMediaLinks.map((social, index) => (
                  <SocialLinkItem
                    key={index}
                    icon={social.icon}
                    label={social.label}
                    href={social.href}
                  />
                ))}
              </div>
            </div>

            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm available for freelance work and exciting new opportunities.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/20 hover:border-primary/40"
                onClick={() =>
                  window.open("mailto:sadafpritom6595@gmail.com", "_blank")
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
