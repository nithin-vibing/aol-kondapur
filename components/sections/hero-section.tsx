export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Art of Living · Kondapur
        </p>

        <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Transform Your Life.
        </h1>

        <p className="mb-5 text-base text-muted-foreground sm:text-lg">
          Practical wisdom from the world's largest wellness organisation.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
          <span>40+ years</span>
          <span className="text-border">·</span>
          <span>180+ countries</span>
          <span className="text-border">·</span>
          <span>50 crores practitioners</span>
        </div>
      </div>
    </section>
  );
}
