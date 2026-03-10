import { Link } from 'wouter';
import { Heart, Target, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'We prioritize the health and well-being of every patient with compassion and dedication.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical practice and continuous improvement.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our dedicated team works together to provide comprehensive healthcare solutions.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sri Narayana Hospital</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Dedicated to providing quality healthcare with compassion and excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sri Narayana Hospital in Whitefield, Bengaluru has established itself as a trusted healthcare provider committed to delivering quality medical care to the community. With a focus on patient-centered care and modern medical practices, we have been serving the healthcare needs of Whitefield and nearby areas for years.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our state-of-the-art facilities, experienced medical professionals, and compassionate staff ensure that every patient receives the best possible care. We believe in combining traditional medical wisdom with modern technology to provide comprehensive healthcare solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From emergency care to specialized treatments, from preventive healthcare to rehabilitation services, we are committed to being your trusted partner in health.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-green to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Award className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-primary font-bold text-lg">Trusted Healthcare Provider</p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-accent-green rounded-xl p-8">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services that improve the health and well-being of individuals and families in our community.
              </p>
            </div>
            <div className="bg-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred healthcare provider in Whitefield, known for excellence, innovation, and compassionate patient care.
              </p>
            </div>
            <div className="bg-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to continuous improvement, adopting latest medical technologies, and maintaining the highest standards of healthcare delivery.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-dark-slate mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hospital Info */}
          <div className="bg-neutral-gray rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-8 text-center">
              Hospital Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-dark-slate mb-4">Location</h3>
                <p className="text-gray-600 mb-2">
                  NO:43, Sri Byraveshwara Building,
                </p>
                <p className="text-gray-600 mb-2">
                  Immadihalli, Whitefield,
                </p>
                <p className="text-gray-600">
                  Bengaluru, Karnataka – 560066
                </p>
              </div>
              <div>
                <h3 className="font-bold text-dark-slate mb-4">Contact</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +91 90197 27344
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Hours:</strong> Open 24 Hours
                </p>
                <p className="text-gray-600">
                  <strong>Areas Served:</strong> Whitefield & nearby areas
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
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule an appointment with our experienced medical team today.
          </p>
          <Link href="/appointment">
            <a className="no-underline">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Book Appointment Now
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
