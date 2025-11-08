import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">About MEC Canteen</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-6">
              Welcome to the Madras Engineering College Canteen online ordering system - 
              revolutionizing the way students and staff enjoy their meals on campus.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To provide a seamless, efficient, and modern food ordering experience that saves 
              time and enhances the campus dining experience for the entire MEC community.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Skip long queues with advance ordering</li>
              <li>Real-time order tracking</li>
              <li>Multiple payment options</li>
              <li>Fresh and quality food</li>
              <li>Student-friendly pricing</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
