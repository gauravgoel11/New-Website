import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxKCulg87tGrqtJ-xbtCNsJCQTieBQkW0JogwYXvLvztSSMLv2SH_tnawKGBntbXesu/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        alert("Thank you! Form is submitted");
        window.location.reload();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error!", error);
      alert("There was an error submitting the form");
    }
  };

  return (
    <section className="min-h-screen w-full bg-background px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch with me for any questions or opportunities.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-lg bg-card p-6 shadow-lg">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    gauravgoel0008@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">+91-8864998737</p>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <p className="text-muted-foreground">
                    Near, MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY,
                    <br />
                    Pocket 5, Sector 22, Rohini,
                    <br />
                    Delhi, India
                    <br />
                    110086
                  </p>
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
            <form onSubmit={handleSubmit} className="contactUsForm space-y-6">
              <div className="space-y-2">
                <label htmlFor="Name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="Name"
                  name="Name"
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="Phone"
                  name="Phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="Message"
                  name="Message"
                  placeholder="Your message"
                  required
                  className="min-h-[150px] w-full"
                />
              </div>
              <Button type="submit" className="w-full">
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
