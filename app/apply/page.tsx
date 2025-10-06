// app/apply/page.tsx

export default function ApplyPage() {
  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto max-w-xl space-y-6 px-4">
        <h1 className="text-4xl font-bold text-center">Apply for the Fenrir Private Beta</h1>
        <p className="text-lg text-gray-300 text-center">
          Spots are limited. We're looking for teams who are ready to shape the future of security operations.
        </p>
        <form action="https://formspree.io/f/xwpngojz" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company Name</label>
            <input type="text" name="company" id="company" required className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}