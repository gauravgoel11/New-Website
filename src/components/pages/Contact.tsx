import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxKCulg87tGrqtJ-xbtCNsJCQTieBQkW0JogwYXvLvztSSMLv2SH_tnawKGBntbXesu/exec";

    // Log form data to check what's being sent
    const formData = new FormData(form);
    console.log("Form data:", Object.fromEntries(formData));

    fetch(scriptURL, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Add this line
    })
      .then(() => {
        alert("Thank you! Form is submitted successfully");
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error);
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <section className="w-full bg-background px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-xl bg-card p-8 shadow-lg ring-1 ring-gray-200/50">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <div className="mt-6 space-y-6">
                <a
                  href="mailto:gauravgoel0008@gmail.com"
                  className="group flex items-center gap-4 transition-colors hover:text-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      gauravgoel0008@gmail.com
                    </p>
                  </div>
                  <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>

                <a
                  href="tel:+918864998737"
                  className="group flex items-center gap-4 transition-colors hover:text-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +91-8864998737
                    </p>
                  </div>
                  <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Near, MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY,
                      <br />
                      Pocket 5, Sector 22, Rohini,
                      <br />
                      Delhi, India - 110086
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
              className="contactUsForm space-y-6 rounded-xl bg-card p-8 shadow-lg ring-1 ring-gray-200/50"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Gaurav Goel"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="gaurav@gmail.com"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  className="min-h-[150px] w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
