import { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'General Medicine',
    'Pediatric Care',
    'Physiotherapy',
    'Emergency Care',
    'Diagnostics',
  ];

  const doctors: Record<string, string[]> = {
    'General Medicine': ['Dr. Narayana', 'Dr. Anjali Patel'],
    'Pediatric Care': ['Dr. Priya Sharma'],
    'Physiotherapy': ['Dr. Rajesh Kumar'],
    'Emergency Care': ['Dr. Anjali Patel'],
    'Diagnostics': ['Dr. Vikram Singh'],
  };

  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your consultation with our experienced healthcare professionals
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-dark-slate mb-2">Appointment Requested!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for booking. Our team will contact you shortly to confirm.
                  </p>
                  <p className="text-sm text-gray-500">
                    Confirmation call on {formData.phone}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-border">
                  <h2 className="text-2xl font-bold text-dark-slate mb-6">Appointment Details</h2>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Doctor
                    </label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a doctor</option>
                      {formData.department && doctors[formData.department]?.map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark-slate mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your health concern"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent-orange hover:bg-orange-600 text-white">
                    Book Appointment
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-accent-green rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark-slate mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Emergency</p>
                      <a href="tel:+919019727344" className="font-semibold text-dark-slate hover:text-primary no-underline">
                        +91 90197 27344
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <a href="mailto:info@srinarayana.com" className="font-semibold text-dark-slate hover:text-primary text-sm no-underline">
                        info@srinarayana.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark-slate mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Working Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                  <p><strong>Sunday:</strong> Emergency Only</p>
                  <p className="text-primary font-semibold mt-3">24/7 Emergency Care Available</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark-slate mb-4">Why Book With Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Easy online booking</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Experienced doctors</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Modern facilities</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Quick confirmation</span>
                  </li>
                </ul>
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
