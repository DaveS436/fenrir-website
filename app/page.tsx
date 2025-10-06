// app/page.tsx

export default function BetaLandingPage() {
  return (
    <main role="main" className="flex min-h-screen flex-col items-center bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Stop Drowning in Alerts.
          <br />
          Start Seeing the Threat Picture.
        </h1>
        <p className="max-w-2xl text-lg text-gray-300 sm:text-xl">
          Fenrir is a new, extensible XDR platform that unifies security signals
          from all your tools into one correlated view. Go from alert fatigue to
          high-fidelity threat detection.
        </p>
        <a href="/apply" className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500">
          Apply for the Private Beta
        </a>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-gray-950 py-20">
        <div className="container mx-auto flex flex-col items-center space-y-6 px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your Security Tools Don&apos;t Talk to Each Other.
            <br />
            <span className="text-red-500">Attackers Love That.</span>
          </h2>
          <div className="max-w-xl text-left text-lg text-gray-300">
            <p className="mb-4">
              You&apos;ve invested in best-in-class security tools, but your team is still struggling with:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li><span className="font-bold">Alert Overload:</span> Endless, low-context alerts from disconnected systems.</li>
              <li><span className="font-bold">Manual Correlation:</span> Analysts wasting hours pivoting between consoles to piece together an attack.</li>
              <li><span className="font-bold">Missed Threats:</span> The most critical threats are buried in the noise between your EDR, SIEM, and cloud logs.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}