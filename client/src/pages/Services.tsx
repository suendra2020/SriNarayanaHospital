import { Link } from 'wouter';
import { Stethoscope, Heart, Activity, Microscope, Pill, Users, Zap, Brain, Bone, Droplet, Leaf, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine & Acute Illness Care',
      description: 'Comprehensive treatment for acute illnesses, chronic conditions, and general health concerns with expert diagnosis and personalized care plans.',
    },
    {
      icon: Zap,
      title: 'High Fever Evaluation & Treatment',
      description: 'Specialized fever clinic with rapid diagnosis and effective treatment protocols for various fever-causing conditions.',
    },
    {
      icon: Heart,
      title: 'Dengue Diagnosis & Treatment',
      description: 'Advanced diagnostic facilities and specialized treatment for dengue fever with 24/7 monitoring and care.',
    },
    {
      icon: Activity,
      title: 'Respiratory Infection Treatment',
      description: 'Expert care for respiratory infections including cough, cold, and other respiratory conditions with modern treatment options.',
    },
    {
      icon: Droplet,
      title: 'Vitamin D Deficiency Management',
      description: 'Comprehensive assessment and treatment of vitamin D deficiency with personalized supplementation and lifestyle guidance.',
    },
    {
      icon: Leaf,
      title: 'Annual Health Checkups',
      description: 'Preventive health screening packages for early detection and prevention of health issues.',
    },
    {
      icon: Users,
      title: 'Pediatric Consultation',
      description: 'Specialized healthcare services for children from newborns to adolescents with experienced pediatric specialists.',
    },
    {
      icon: Brain,
      title: 'Diabetes Care',
      description: 'Comprehensive diabetes management including diagnosis, treatment, monitoring, and lifestyle counseling.',
    },
    {
      icon: Pill,
      title: 'Digestive Disorder Treatment',
      description: 'Expert diagnosis and treatment of gastrointestinal disorders with advanced diagnostic facilities.',
    },
    {
      icon: Brain,
      title: 'Migraine & Headache Treatment',
      description: 'Specialized care for migraines and various types of headaches with effective pain management strategies.',
    },
    {
      icon: Smile,
      title: 'Skin Conditions Treatment',
      description: 'Dermatological services for various skin conditions with modern treatment approaches.',
    },
    {
      icon: Bone,
      title: 'Physiotherapy Services',
      description: 'Rehabilitation and pain relief therapy for musculoskeletal conditions, injuries, and post-operative care.',
    },
  ];

  const facilities = [
    { name: '24/7 Emergency Care', icon: Zap },
    { name: 'Modern Laboratory', icon: Microscope },
    { name: 'X-Ray Facilities', icon: Activity },
    { name: 'Pharmacy', icon: Pill },
    { name: 'Physiotherapy', icon: Bone },
    { name: 'Specialist Consultation', icon: Stethoscope },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border border-border"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-slate mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Facilities Section */}
          <div className="bg-accent-green rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-8 text-center">
              Our Facilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-dark-slate">
                      {facility.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-neutral-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-12 text-center">
            Why Choose Sri Narayana Hospital?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-slate mb-2">Patient-Centric Care</h3>
                <p className="text-gray-600">
                  We prioritize patient comfort and satisfaction in all our services.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-slate mb-2">Experienced Doctors</h3>
                <p className="text-gray-600">
                  Our medical team comprises experienced specialists and practitioners.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-slate mb-2">Modern Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art medical equipment and diagnostic facilities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-slate mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  Round-the-clock emergency care and medical services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Our Services?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule an appointment with our medical team or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <a className="no-underline">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book Appointment
                </Button>
              </a>
            </Link>
            <a href="tel:+919019727344" className="no-underline">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
