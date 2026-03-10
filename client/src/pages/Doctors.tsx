import { Link } from 'wouter';
import { Mail, Phone, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Narayana',
      title: 'General Physician',
      experience: '15+ years',
      specialization: 'General Medicine, Fever Clinic, Preventive Healthcare',
      qualifications: 'MBBS, MD (Internal Medicine)',
      availability: 'Mon - Sat, 10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      bio: 'Dr. Narayana is a highly experienced general physician with a passion for preventive healthcare and patient education. With over 15 years of clinical experience, he specializes in diagnosing and treating acute and chronic illnesses.',
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Pediatric Specialist',
      experience: '12+ years',
      specialization: 'Pediatric & Family Medicine',
      qualifications: 'MBBS, MD (Pediatrics)',
      availability: 'Tue - Sun, 2:00 PM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      bio: 'Dr. Priya Sharma is a compassionate pediatrician dedicated to providing comprehensive healthcare for children. Her expertise includes pediatric immunization, growth monitoring, and family medicine.',
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Physiotherapy Specialist',
      experience: '10+ years',
      specialization: 'Pain Relief & Rehabilitation Therapy',
      qualifications: 'BPT, MIAP',
      availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1576091160550-112173e7d871?w=400&h=500&fit=crop',
      bio: 'Dr. Rajesh Kumar is an expert physiotherapist specializing in pain management and rehabilitation. He uses modern therapeutic techniques to help patients recover from injuries and improve their quality of life.',
    },
    {
      name: 'Dr. Anjali Patel',
      title: 'Emergency Medicine Specialist',
      experience: '8+ years',
      specialization: 'Emergency Care, Trauma Management',
      qualifications: 'MBBS, DEEM',
      availability: '24/7 Available',
      image: 'https://images.unsplash.com/photo-1559839734033-6461efaf586f?w=400&h=500&fit=crop',
      bio: 'Dr. Anjali Patel leads our emergency department with expertise in trauma management and critical care. Available round-the-clock to handle medical emergencies.',
    },
    {
      name: 'Dr. Vikram Singh',
      title: 'Diagnostic Specialist',
      experience: '11+ years',
      specialization: 'Radiology & Diagnostics',
      qualifications: 'MBBS, MD (Radiology)',
      availability: 'Mon - Sat, 8:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1612349317150-e539c59dc506?w=400&h=500&fit=crop',
      bio: 'Dr. Vikram Singh is an experienced radiologist with expertise in interpreting diagnostic imaging. He ensures accurate diagnosis using the latest imaging technologies.',
    },
    {
      name: 'Dr. Meera Gupta',
      title: 'Pharmacist & Medication Specialist',
      experience: '9+ years',
      specialization: 'Clinical Pharmacy, Drug Interactions',
      qualifications: 'B.Pharm, M.Pharm',
      availability: '24/7 Available',
      image: 'https://images.unsplash.com/photo-1559839734033-6461efaf586f?w=400&h=500&fit=crop',
      bio: 'Dr. Meera Gupta manages our pharmacy services and provides expert medication counseling. She ensures safe and effective medication use for all patients.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Team</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Experienced healthcare professionals dedicated to your wellness
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
              >
                {/* Doctor Image */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-slate mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {doctor.title}
                  </p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{doctor.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4 font-semibold">
                    Specialization
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {doctor.specialization}
                  </p>

                  <p className="text-xs text-gray-500 mb-2 font-semibold">
                    Availability
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    {doctor.availability}
                  </p>

                  <Link href="/appointment">
                    <a className="no-underline">
                      <Button size="sm" className="w-full bg-accent-orange hover:bg-orange-600 text-white">
                        Book Appointment
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-16 md:py-24 bg-accent-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-12 text-center">
            Why Choose Our Doctors?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-slate mb-3">
                Highly Qualified & Experienced
              </h3>
              <p className="text-gray-600">
                All our doctors are highly qualified with years of clinical experience and specialized training in their respective fields.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-slate mb-3">
                Patient-Focused Approach
              </h3>
              <p className="text-gray-600">
                We believe in listening to our patients and providing personalized treatment plans tailored to individual needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-slate mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                Our medical team stays updated with the latest medical advancements and best practices in healthcare.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-slate mb-3">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                We treat every patient with empathy and respect, ensuring a comfortable and supportive healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule Your Appointment Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Choose from our experienced medical professionals and book your appointment online.
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
