import { useState } from "react";
import { Calendar, Clock, Phone, Mail, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Appointment() {

  const [submitted, setSubmitted] = useState(false);

  const departments = [
    "General Medicine",
    "Pediatric Care",
    "Physiotherapy",
    "Emergency Care",
    "Diagnostics",
  ];

  const doctors: Record<string, string[]> = {
    "General Medicine": ["Dr. Narayana", "Dr. Anjali Patel"],
    "Pediatric Care": ["Dr. Priya Sharma"],
    "Physiotherapy": ["Dr. Rajesh Kumar"],
    "Emergency Care": ["Dr. Anjali Patel"],
    "Diagnostics": ["Dr. Vikram Singh"],
  };

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","02:00 PM","02:30 PM",
    "03:00 PM","03:30 PM","04:00 PM","04:30 PM",
  ];

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {

      await fetch("https://formsubmit.co/ajax/surendrav9494@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">
          Book an Appointment
        </h1>
        <p className="text-lg opacity-90">
          Schedule your consultation with our healthcare specialists
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-10">

            {/* FORM */}
            <div className="md:col-span-2">

              {submitted ? (

                <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4"/>
                  <h2 className="text-2xl font-bold mb-2">
                    Appointment Submitted!
                  </h2>
                  <p className="text-gray-600">
                    Thank you for booking an appointment. 
                    Our hospital team will contact you shortly.
                  </p>
                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-8 rounded-xl shadow-lg border"
                >

                  {/* NAME */}
                  <div>
                    <label className="font-semibold text-sm">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="font-semibold text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="font-semibold text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>

                  {/* DEPARTMENT */}
                  <div>
                    <label className="font-semibold text-sm">Department</label>
                    <select
                      name="department"
                      required
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    >
                      <option value="">Select Department</option>
                      {departments.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* DOCTOR */}
                  <div>
                    <label className="font-semibold text-sm">Doctor</label>
                    <select
                      name="doctor"
                      required
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    >
                      <option value="">Select Doctor</option>
                      {Object.values(doctors).flat().map((doc) => (
                        <option key={doc}>{doc}</option>
                      ))}
                    </select>
                  </div>

                  {/* DATE */}
                  <div>
                    <label className="font-semibold text-sm">Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      min={today}
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>

                  {/* TIME */}
                  <div>
                    <label className="font-semibold text-sm">Time</label>
                    <select
                      name="time"
                      required
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="font-semibold text-sm">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your health concern"
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Book Appointment
                  </button>

                </form>

              )}

            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              {/* CONTACT */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold mb-4">Quick Contact</h3>

                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-blue-600"/>
                  <a href="tel:+919019727344" className="font-semibold">
                    +91 919019727344
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600"/>
                  <a href="mailto:info@srinarayana.com">
                    info@srinarayana.com
                  </a>
                </div>
              </div>

              {/* WORKING HOURS */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5"/> Working Hours
                </h3>

                <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
                <p>Saturday : 10:00 AM - 4:00 PM</p>
                <p>Sunday : Emergency Only</p>

                <p className="text-blue-600 font-semibold mt-2">
                  24/7 Emergency Available
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingButtons />

    </div>
  );
}