
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DriverDownloadPage = () => {
  // Sample driver data
  const drivers = [
    {
      id: 1,
      name: "AESKEY Software Suite",
      version: "v2.5.3",
      os: "Windows 11/10/8/7",
      size: "45.2 MB",
      date: "2023-12-15",
      notes: "Latest software package for all AESKEY keyboards with RGB customization and macro programming."
    },
    {
      id: 2,
      name: "AESKEY Firmware Updater",
      version: "v1.8.1",
      os: "Windows 11/10/8/7",
      size: "12.3 MB",
      date: "2023-11-28",
      notes: "Tool for updating keyboard firmware. Includes latest stability fixes and performance improvements."
    },
    {
      id: 3,
      name: "AESKEY Keyboard Driver",
      version: "v3.2.0",
      os: "macOS 12+",
      size: "38.7 MB",
      date: "2023-12-05",
      notes: "macOS driver package for all AESKEY mechanical keyboards. Includes key remapping and profile management."
    },
    {
      id: 4,
      name: "AESKEY Keyboard Driver",
      version: "v3.1.5",
      os: "Linux (deb)",
      size: "32.1 MB",
      date: "2023-10-20",
      notes: "Linux driver package for Debian-based distributions."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-center">Driver Downloads</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 text-center">Download the latest drivers and software for your AESKEY products</p>
          
          <div className="max-w-4xl mx-auto">
            {drivers.map(driver => (
              <div key={driver.id} className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg overflow-hidden shadow-lg mb-6 p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">{driver.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {driver.version}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        {driver.os}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                        {driver.size}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{driver.notes}</p>
                    <p className="text-gray-500 text-sm mt-2">Released: {driver.date}</p>
                  </div>
                  <div className="flex items-center">
                    <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 dark:bg-aeskey-dark-gray/60 rounded-lg p-6 mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="mb-4">If you're experiencing issues with our drivers or software, please check our support documentation or contact our support team.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10">
                View Installation Guide
              </Button>
              <Button variant="outline" className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DriverDownloadPage;
