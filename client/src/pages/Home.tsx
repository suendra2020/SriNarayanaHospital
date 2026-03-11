import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight, Star, Heart, Stethoscope, Microscope, Users, Zap, Activity, Pill, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const heroSlides = [
  {
    title: "24/7 Emergency Care",
    subtitle: "Immediate medical assistance anytime, anywhere",
    icon: Zap,
    color: "from-blue-600 to-blue-400",
    image: "https://plus.unsplash.com/premium_photo-1664476541563-ab0ea7020026?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Experienced Doctors & Specialists",
    subtitle: "Expert medical professionals with years of experience",
    icon: Stethoscope,
    color: "from-teal-600 to-teal-400",
    image: "https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Laboratory & Diagnostics",
    subtitle: "Advanced equipment for accurate diagnosis",
    icon: Microscope,
    color: "from-orange-600 to-orange-400",
    image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pediatric & Family Healthcare",
    subtitle: "Comprehensive care for the whole family",
    icon: Users,
    color: "from-green-600 to-green-400",
    image: "https://plus.unsplash.com/premium_photo-1661963206548-43535c2d564e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive acute illness care and preventive healthcare',
    },
    {
      icon: Heart,
      title: 'Fever Clinic',
      description: 'High fever evaluation and treatment with expert diagnosis',
    },
    {
      icon: Activity,
      title: 'Pediatric Care',
      description: 'Specialized care for children and family medicine',
    },
    {
      icon: Microscope,
      title: 'Diagnostics',
      description: 'Modern laboratory and X-ray facilities',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'Complete pharmaceutical services available 24/7',
    },
    {
      icon: Users,
      title: 'Physiotherapy',
      description: 'Pain relief and rehabilitation therapy services',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Srivishnu MuniReddy',
      title: 'General Physician',
      experience: '15+ years',
      specialization: 'General Medicine, Fever Clinic, Preventive Healthcare',
      image: '/img/munireddy.png',
    },
    {
      name: 'Dr. Anil Kumar',
      title: 'Pediatric Specialist',
      experience: '12+ years',
      specialization: 'Pediatric & Family Medicine',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Physiotherapy Specialist',
      experience: '10+ years',
      specialization: 'Pain Relief & Rehabilitation Therapy',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f3a2196e?w=400&h=500&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      rating: 5,
      text: 'Good hospital, excellent service, very good staff. The doctors are highly professional and the facilities are top-notch.',
    },
    {
      name: 'Priya Nair',
      rating: 5,
      text: 'The doctor was highly professional and attentive. They took time to understand my concerns and provided excellent treatment.',
    },
    {
      name: 'Arun Singh',
      rating: 4,
      text: 'Doctors diagnosed well and advised good medicines. The overall experience was satisfactory and the staff was helpful.',
    },
    {
      name: 'Anjali Patel',
      rating: 5,
      text: 'Best hospital in Whitefield! The emergency response was quick and the medical team was very caring and professional.',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const CurrentIcon = heroSlides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Carousel */}
    <section className="banner-img-bg relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r">

  {/* Background Image */}
  <img
    src={heroSlides[currentSlide].image}
    alt="Hospital Slide"
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white z-10 px-4">

      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <CurrentIcon className="w-10 h-10" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {heroSlides[currentSlide].title}
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-8">
        {heroSlides[currentSlide].subtitle}
      </p>

      <Link href="/appointment">
        <a className="no-underline">
          <Button
            size="lg"
            className="bg-accent-orange hover:bg-orange-600 text-white"
          >
            Book Appointment Now
          </Button>
        </a>
      </Link>

    </div>
  </div>

  {/* Carousel Controls */}
  <button
    onClick={prevSlide}
    onMouseEnter={() => setIsAutoPlay(false)}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>

  <button
    onClick={nextSlide}
    onMouseEnter={() => setIsAutoPlay(false)}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
  >
    <ChevronRight className="w-6 h-6" />
  </button>

  {/* Slide Indicators */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-3 h-3 rounded-full transition-all ${
          index === currentSlide ? "bg-white w-8" : "bg-white/50"
        }`}
      />
    ))}
  </div>

</section>

      {/* Quick Info Banner */}
      <section className="stats-section py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div className="stat-card">
        <div className="icon pulse">🚑</div>
        <h3>24/7</h3>
        <p>Emergency Care</p>
      </div>

      <div className="stat-card">
        <div className="icon pulse">🏥</div>
        <h3>15+</h3>
        <p>Years Experience</p>
      </div>

      <div className="stat-card">
        <div className="icon pulse">⭐</div>
        <h3>4.4★</h3>
        <p>Patient Rating</p>
      </div>

      <div className="stat-card">
        <div className="icon pulse">👨‍⚕️</div>
        <h3>144+</h3>
        <p>Patient Reviews</p>
      </div>

    </div>
  </div>
</section>
      {/* <section className="bg-accent-green py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
              <p className="text-sm md:text-base text-dark-slate">Emergency Care</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
              <p className="text-sm md:text-base text-dark-slate">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4.4★</p>
              <p className="text-sm md:text-base text-dark-slate">Patient Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">144+</p>
              <p className="text-sm md:text-base text-dark-slate">Patient Reviews</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">
                Welcome to Sri Narayana Hospital
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sri Narayana Hospital in Whitefield, Bengaluru is a trusted healthcare provider dedicated to delivering quality medical care. Our hospital offers comprehensive diagnostic, preventive, and treatment services with a patient-centered approach.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We focus on early diagnosis, personalized treatment plans, and compassionate care for patients of all ages. Our experienced medical team is committed to providing the highest standard of healthcare services.
              </p>
              <Link href="/about">
                <a className="no-underline">
                  <Button className="gap-2 bg-primary hover:bg-blue-700">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent-green to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-primary font-bold text-lg">Quality Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#E8F5F3" />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-accent-green">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet the needs of our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border-bg"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-slate mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <a className="no-underline">
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#FFFFFF" flip />

      {/* Doctors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced medical professionals dedicated to your health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-slate mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {doctor.title}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {doctor.experience}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {doctor.specialization}
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

          <div className="text-center mt-12">
            <Link href="/doctors">
              <a className="no-underline">
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                  View All Doctors <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our patients say about their experience with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-dark-slate text-sm">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert medical team is ready to help you. Book an appointment or contact us for emergency care.
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
