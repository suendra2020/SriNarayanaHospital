import { Link } from 'wouter';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Cough in Children - Causes & Treatment',
      excerpt: 'Learn about common causes of cough in children and effective home remedies.',
      author: 'Dr. Priya Sharma',
      date: '2024-03-08',
      category: 'Pediatrics',
      image: '/img/fever.png',
    },
    {
      id: 2,
      title: 'Migraine and Headache Care',
      excerpt: 'Understanding migraines and effective strategies for prevention and management.',
      author: 'Dr. Narayana',
      date: '2024-03-05',
      category: 'Neurology',
      image: 'https://media.istockphoto.com/id/2180231033/photo/woman-suffering-intense-forehead-migraine.webp?a=1&b=1&s=612x612&w=0&k=20&c=qQ7XhjVljNhSForfGtju0Hszec37JFbkR_SUpKZRmFU=',
    },
    {
      id: 3,
      title: 'Diabetes Awareness',
      excerpt: 'Essential information about diabetes prevention and management.',
      author: 'Dr. Narayana',
      date: '2024-03-01',
      category: 'Endocrinology',
      image: '/img/diabitics.png',
    },
    {
      id: 4,
      title: 'Obesity Management',
      excerpt: 'Comprehensive guide to healthy weight management and prevention.',
      author: 'Dr. Priya Sharma',
      date: '2024-02-28',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1631217b5f58-d0b0e5e5f6e5?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Sleep Disorder Treatment',
      excerpt: 'Understanding sleep disorders and evidence-based treatment approaches.',
      author: 'Dr. Narayana',
      date: '2024-02-25',
      category: 'Sleep Medicine',
      image: 'https://images.unsplash.com/photo-1631217b5f58-d0b0e5e5f6e5?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Arthritis and Joint Pain Care',
      excerpt: 'Managing arthritis through treatment, exercise, and lifestyle modifications.',
      author: 'Dr. Rajesh Kumar',
      date: '2024-02-20',
      category: 'Rheumatology',
      image: 'https://images.unsplash.com/photo-1631217b5f58-d0b0e5e5f6e5?w=600&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-teal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Expert health tips and medical insights from our healthcare professionals
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border flex flex-col"
              >
                {/* Article Image */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-dark-slate mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-t border-border">
                    <div className="flex items-center gap-1 mt-4">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <button className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
     

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Professional Medical Advice?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced healthcare professionals.
          </p>
          <Link href="/appointment">
            <a className="no-underline">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Book Appointment
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
