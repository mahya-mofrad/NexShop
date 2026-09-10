import Banners from "@/src/components/features/Banners";

export default function HomePage() {
  return (
    <main>
      <section className="w-full">
        <Banners />
      </section>
      <section className="w-full h-[50vh] bg-primary-foreground">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg text-gray-700">
            Discover our amazing products and offers.
          </p>
        </div>
      </section>
    </main>
  );
}
