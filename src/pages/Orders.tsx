import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Orders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">My Orders</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Track your current and past orders here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
