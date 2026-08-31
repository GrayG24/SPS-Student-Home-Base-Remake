import confetti from 'canvas-confetti';

export function fireTrailblazerConfetti() {
  // Saugatuck Orange (#FF6E00, #F97316), Saugatuck Royal Blue (#1D4ED8), Navy (#0F294A), White (#FFFFFF), Gold (#FBBF24)
  const colors = ['#FF6E00', '#1D4ED8', '#F97316', '#2563EB', '#FFFFFF', '#F59E0B'];

  confetti({
    particleCount: 70,
    spread: 60,
    origin: { y: 0.7 },
    colors: colors,
    ticks: 200,
    gravity: 1.1,
    scalar: 1.1,
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });
  }, 150);
}
