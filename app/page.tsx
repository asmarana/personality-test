import StartButton from '@/components/StartButton';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl font-bold text-center">
          Introvert or Extrovert?
        </h1>
        <p className="text-center max-w-md">
          Take this quick personality test to discover if you&apos;re an
          introvert or extrovert.
        </p>
        <StartButton />
      </main>
    </div>
  );
}
