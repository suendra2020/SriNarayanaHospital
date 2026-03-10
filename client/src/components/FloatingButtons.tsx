import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = '+919019727344';
  const whatsappNumber = '919019727344';
  const whatsappMessage = 'Hi, I would like to book an appointment at Sri Narayana Hospital.';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 no-underline"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-accent-orange hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 no-underline bg-phone"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
