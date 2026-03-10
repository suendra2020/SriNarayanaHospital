import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or medical emergencies
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark-slate mb-8">Get In Touch</h2>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-slate mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">For emergencies and urgent care:</p>
                  <a href="tel:+919019727344" className="text-primary font-semibold hover:text-blue-700 no-underline">
                    +91 90197 27344
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-slate mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">For general inquiries:</p>
                  <a href="mailto:info@srinarayana.com" className="text-primary font-semibold hover:text-blue-700 no-underline">
                    info@srinarayana.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-slate mb-2">Address</h3>
                  <p className="text-gray-600">
                    NO:43, Sri Byraveshwara Building,
                    <br />
                    Immadihalli, Whitefield,
                    <br />
                    Bengaluru, Karnataka – 560066
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-slate mb-2">Working Hours</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p className="text-primary font-semibold">
                    24/7 Emergency Care Available
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919019727344" className="no-underline">
                  <Button className="w-full gap-2 bg-primary hover:bg-blue-700">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919019727344" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl overflow-hidden h-96 md:h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-dark-slate font-bold">Whitefield, Bengaluru</p>
                <p className="text-gray-600 text-sm mt-2">Interactive map coming soon</p>
                <a href="https://maps.google.com/?q=Sri+Narayana+Hospital+Whitefield+Bengaluru" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Button size="sm" variant="outline" className="mt-4">
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-accent-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark-slate mb-2">How do I book an appointment?</h3>
              <p className="text-gray-600 text-sm">
                You can book an appointment through our online form on the Appointment page, or call us directly at +91 90197 27344.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark-slate mb-2">What are your emergency services?</h3>
              <p className="text-gray-600 text-sm">
                We provide 24/7 emergency care for all medical emergencies. Call +91 90197 27344 immediately for urgent assistance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark-slate mb-2">Do you accept insurance?</h3>
              <p className="text-gray-600 text-sm">
                We accept various health insurance plans. Please contact us to confirm your specific insurance coverage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark-slate mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600 text-sm">
                Appointments can be cancelled or rescheduled up to 24 hours in advance. Call us for changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards better health.
          </p>
          <Link href="/appointment">
            <a className="no-underline">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Book Now
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
