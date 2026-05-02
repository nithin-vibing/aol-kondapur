import confetti from 'canvas-confetti';

export function celebrate(url: string) {
  // Synchronous open required for iOS Safari popup blocker
  const newTab = window.open('', '_blank');
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { x: 0.5, y: 0.65 },
    colors: ['#E8712A', '#F5A623', '#FFD700', '#FF8C00', '#FFC857', '#FFAA00'],
    gravity: 1.1,
    scalar: 0.95,
  });
  setTimeout(() => {
    if (newTab) newTab.location.href = url;
    else window.open(url, '_blank');
  }, 1000);
}
