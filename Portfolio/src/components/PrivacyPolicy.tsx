import Navigation from './Navigation';

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen w-full text-white px-4 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-body">
              <p className="text-sm text-neutral-secondary">
                <strong>Last Updated:</strong> December 18, 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">1. Introduction</h2>
                <p>
                  Welcome to Trent Bell's portfolio website ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-heading mb-3 mt-4">2.1 Information You Provide</h3>
                <p className="mb-3">
                  When you use our contact form, we collect:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>First and last name</li>
                  <li>Email address</li>
                  <li>Subject of your message</li>
                  <li>Message content</li>
                </ul>

                <h3 className="text-xl font-semibold text-heading mb-3 mt-4">2.2 Automatically Collected Information</h3>
                <p className="mb-3">
                  We may collect certain information automatically, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Respond to your inquiries and messages</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Communicate with you about professional opportunities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">4. Third-Party Services</h2>
                <p className="mb-3">
                  Our website uses FormSubmit.co to process contact form submissions. When you submit a form, your information is transmitted to FormSubmit.co for delivery to our email. Please review FormSubmit's privacy policy for information on how they handle your data.
                </p>
                <p>
                  We may also use analytics services to understand how visitors interact with our website. These services may use cookies and similar technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">5. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">6. Cookies</h2>
                <p>
                  Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of certain features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">7. External Links</h2>
                <p>
                  Our website contains links to external sites, including LinkedIn and resume documents. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">8. Your Rights</h2>
                <p className="mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to or restrict processing</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">9. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-heading mb-4">11. Contact Information</h2>
                <p className="mb-3">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="ml-4">
                  <p><strong className="text-heading">Email:</strong> me@trentb.tech</p>
                  <p><strong className="text-heading">Website:</strong> trentb.tech</p>
                </div>
              </section>

              <section className="border-t border-buffer pt-6 mt-8">
                <h2 className="text-2xl font-semibold text-heading mb-4">California Privacy Rights</h2>
                <p>
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, use, and disclose, and the right to request deletion of your personal information. To exercise these rights, please contact us at me@trentb.tech.
                </p>
              </section>

              <section className="border-t border-buffer pt-6 mt-8">
                <h2 className="text-2xl font-semibold text-heading mb-4">European Union Users (GDPR)</h2>
                <p>
                  If you are located in the European Union, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, object to processing, and data portability. You also have the right to lodge a complaint with a supervisory authority. To exercise these rights, please contact us at me@trentb.tech.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
