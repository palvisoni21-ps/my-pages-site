export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">🚀 Deployed with GitHub Actions</h1>
      <p className="text-gray-600">
        Next.js → GitHub → Pages, automatically on every push.
      </p>
    </main>
  );
}