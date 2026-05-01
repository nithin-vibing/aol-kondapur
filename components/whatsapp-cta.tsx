import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CENTRE } from '@/config/centre';

interface WhatsAppCTAProps {
  message?: string;
  phoneNumber?: string;
  label?: string;
  className?: string;
}

export function WhatsAppCTA({
  message = `Hi! I'm interested in learning more about Art of Living programs at the ${CENTRE.neighbourhood} center.`,
  phoneNumber = CENTRE.whatsapp,
  label = 'Enquire on WhatsApp',
  className = '',
}: WhatsAppCTAProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      className={`bg-[#25D366] text-white hover:bg-[#1ebe5d] ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
