
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  FileText, 
  MessageSquare, 
  Phone, 
  Mail, 
  Video, 
  PlusCircle, 
  MinusCircle 
} from "lucide-react";
import { useState } from "react";

const SupportPage = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I connect my AESKEY keyboard to my computer?",
      answer: "Simply connect the USB cable to an available USB port on your computer. For wireless models, turn on the keyboard and enable Bluetooth on your device, then pair with 'AESKEY Keyboard' from the Bluetooth devices list."
    },
    {
      id: 2,
      question: "How can I customize the RGB lighting on my keyboard?",
      answer: "Download and install the AESKEY Software Suite from our Driver Downloads section. Once installed, you can access various RGB lighting effects, create custom patterns, and save profiles."
    },
    {
      id: 3,
      question: "My keyboard isn't being recognized by my computer. What should I do?",
      answer: "Try the following steps: 1) Try a different USB port. 2) Restart your computer. 3) Ensure the keyboard is turned on (for wireless models). 4) Check if the USB cable is securely connected. 5) Try a different USB cable if available. If the issue persists, please contact our support team."
    },
    {
      id: 4,
      question: "How long does the battery last on wireless models?",
      answer: "Battery life varies by model, but our wireless keyboards typically last 1-2 weeks on a full charge with RGB lighting enabled, and up to 2 months with lighting disabled. You can check the battery status via the AESKEY Software Suite."
    },
    {
      id: 5,
      question: "What's your warranty policy?",
      answer: "AESKEY products come with a standard 2-year manufacturer's warranty covering defects in materials and workmanship. For full warranty details and how to make a claim, please visit our warranty page."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-center">Support Center</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 text-center">Get help with your AESKEY products</p>
          
          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg p-6 text-center shadow-lg">
              <div className="bg-aeskey-sky-blue/20 p-3 rounded-full inline-block mb-4">
                <FileText className="h-8 w-8 text-aeskey-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Browse our extensive documentation and guides to troubleshoot common issues.</p>
              <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">View Articles</Button>
            </div>
            
            <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg p-6 text-center shadow-lg">
              <div className="bg-aeskey-sky-blue/20 p-3 rounded-full inline-block mb-4">
                <MessageSquare className="h-8 w-8 text-aeskey-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get in touch with our support team for personalized assistance.</p>
              <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Submit Ticket</Button>
            </div>
            
            <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg p-6 text-center shadow-lg">
              <div className="bg-aeskey-sky-blue/20 p-3 rounded-full inline-block mb-4">
                <Video className="h-8 w-8 text-aeskey-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Watch helpful tutorials and guides for your AESKEY products.</p>
              <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Watch Videos</Button>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div 
                  key={faq.id} 
                  className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg overflow-hidden shadow"
                >
                  <button 
                    className="flex justify-between items-center w-full p-5 text-left font-medium"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {openFaqId === faq.id ? 
                      <MinusCircle className="h-5 w-5 text-aeskey-sky-blue" /> : 
                      <PlusCircle className="h-5 w-5 text-aeskey-sky-blue" />
                    }
                  </button>
                  {openFaqId === faq.id && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-aeskey-dark-gray/60 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-aeskey-sky-blue/20 p-3 rounded-full mb-3">
                  <Mail className="h-6 w-6 text-aeskey-sky-blue" />
                </div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">support@aeskey.com</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-aeskey-sky-blue/20 p-3 rounded-full mb-3">
                  <Phone className="h-6 w-6 text-aeskey-sky-blue" />
                </div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (800) 123-4567</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-aeskey-sky-blue/20 p-3 rounded-full mb-3">
                  <HelpCircle className="h-6 w-6 text-aeskey-sky-blue" />
                </div>
                <h3 className="font-bold mb-1">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <textarea 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px]"
                placeholder="Your Message"
              ></textarea>
              <Button type="submit" className="w-full bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SupportPage;
