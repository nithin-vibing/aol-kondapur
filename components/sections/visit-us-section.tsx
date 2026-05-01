import { MapPin, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { CENTRE } from '@/config/centre';

export function VisitUsSection() {
  return (
    <section id="visit-us" className="scroll-mt-20 bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Come Visit Us
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {CENTRE.name}
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in {CENTRE.neighbourhood} — easy to find, welcoming to all.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <Card className="overflow-hidden">
            <div className="aspect-video w-full bg-muted flex items-center justify-center">
              <iframe
                src={CENTRE.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${CENTRE.name} — ${CENTRE.neighbourhood}`}
                className="h-full w-full"
              />
            </div>
          </Card>

          {/* Contact info */}
          <Card>
            <CardContent className="space-y-6 p-6">
              <h3 className="font-semibold text-foreground text-lg">Contact &amp; Location</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {CENTRE.address.map((line, i) => (
                        <span key={i}>{line}{i < CENTRE.address.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <div className="flex flex-col gap-1">
                      {CENTRE.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-6">
                <Button asChild className="w-full">
                  <a href={CENTRE.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <WhatsAppCTA
                  label="Chat with Us on WhatsApp"
                  message={`Hi! I'd like to know more about the Art of Living programs at the ${CENTRE.neighbourhood} center.`}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
