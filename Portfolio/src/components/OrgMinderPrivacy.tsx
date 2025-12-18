export default function OrgMinderPrivacy() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      minHeight: '100vh'
    }}>
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <h1 style={{ color: '#0a7ea4', fontSize: '32px', marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '30px' }}><strong>Last Updated:</strong> December 18, 2025</p>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>OrgMinder ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").</p>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>1. Information We Collect</h2>
        
        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Personal Information</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our services, or otherwise contact us. The personal information we collect may include:</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Email address</strong> - Used for authentication and account management</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>First name and last name</strong> - Used to create your profile and identify you within your organization</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Bio/Profile information</strong> - Optional information you choose to share about yourself</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Organization membership data</strong> - Information about the organizations you belong to and your roles within them</li>
        </ul>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Authentication Data</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>We use Supabase for authentication services. Your password is securely hashed and never stored in plain text. Authentication tokens are stored locally on your device using secure storage mechanisms.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Automatically Collected Information</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>When you use the App, we may automatically collect certain information about your device, including:</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}>Device type and operating system</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>App usage data and interactions</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Error logs and crash reports</li>
        </ul>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>2. How We Use Your Information</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We use the information we collect or receive to:</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Create and manage your account</strong> - Process your registration and manage your profile</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Facilitate organization management</strong> - Enable you to create, join, and manage organizations</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Enable communication</strong> - Allow you to communicate with other members of your organizations</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Manage events</strong> - Create and participate in organizational events</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Enforce permissions and roles</strong> - Control access to features based on your organizational roles</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Improve our services</strong> - Analyze usage patterns to enhance app functionality</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Send administrative information</strong> - Notify you of updates, security alerts, and support messages</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Respond to inquiries</strong> - Address your questions and support requests</li>
        </ul>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>3. How We Share Your Information</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We may share your information in the following situations:</p>
        
        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Within Your Organizations</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>Your profile information (name, bio, and membership details) is visible to other members of organizations you belong to. This is necessary for the core functionality of the App.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Service Providers</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>We use third-party service providers to help us operate the App:</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Supabase</strong> - Backend infrastructure, database, and authentication services</li>
            <li style={{ marginBottom: '8px', color: '#555' }}><strong>Expo</strong> - Mobile app development and deployment platform</li>
        </ul>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Legal Requirements</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Business Transfers</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>4. Data Retention</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or regulatory purposes.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>5. Data Security</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}>Encryption of data in transit using HTTPS/TLS</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Encryption of data at rest through Supabase's security infrastructure</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Secure password hashing and authentication</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Secure local storage using platform-specific secure storage APIs</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Regular security assessments and updates</li>
        </ul>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>6. Your Privacy Rights</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Depending on your location, you may have the following rights regarding your personal information:</p>
        
        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Access and Portability</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>You can access and update your profile information directly within the App.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Correction</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>You have the right to correct inaccurate or incomplete personal information through the App's profile settings.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Deletion</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>You have the right to request deletion of your personal information. You can delete your account by contacting us at the email address provided below. Upon request, we will delete your account and associated data within 30 days.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Objection and Restriction</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>You may object to or request restriction of certain processing of your personal information.</p>

        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Withdrawal of Consent</h3>
        <p style={{ marginBottom: '15px', color: '#555' }}>If we process your information based on your consent, you may withdraw that consent at any time.</p>

        <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderLeft: '4px solid #ffc107', margin: '20px 0', borderRadius: '4px' }}>
            <p style={{ marginBottom: '15px', color: '#555' }}><strong>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.</strong></p>
        </div>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>7. Children's Privacy</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>OrgMinder is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our systems.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>8. International Data Transfers</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.</p>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We rely on Supabase's infrastructure, which implements appropriate safeguards to protect your information in accordance with this Privacy Policy.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>9. Third-Party Links</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services before providing them with your information.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>10. Changes to This Privacy Policy</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this Privacy Policy and, where appropriate, providing additional notice through the App.</p>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>11. Do Not Track Signals</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Some web browsers and mobile devices include "Do Not Track" (DNT) features. The App does not currently respond to DNT signals because there is no industry-standard interpretation of DNT signals.</p>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>12. California Privacy Rights</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to know what personal information is collected, used, shared, or sold</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to delete personal information</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to opt-out of the sale of personal information (Note: We do not sell personal information)</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to non-discrimination for exercising your CCPA rights</li>
        </ul>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>13. GDPR Privacy Rights (European Users)</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR):</p>
        <ul style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to access your personal data</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to rectification of inaccurate data</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to erasure ("right to be forgotten")</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to restrict processing</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to data portability</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to object to processing</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Right to withdraw consent</li>
        </ul>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>14. Contact Us</h2>
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '6px', marginTop: '30px' }}>
            <p style={{ marginBottom: '5px', color: '#555' }}>If you have questions or comments about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p style={{ marginBottom: '5px', color: '#555' }}><strong>Email:</strong> <a href="mailto:me@trentb.tech" style={{ color: '#0a7ea4', textDecoration: 'none' }}>me@trentb.tech</a></p>
            <p style={{ marginBottom: '5px', color: '#555' }}><strong>Developer:</strong> Trent B</p>
            <p style={{ marginBottom: '5px', color: '#555' }}><strong>App:</strong> OrgMinder</p>
        </div>

        <h2 style={{ color: '#0a7ea4', fontSize: '24px', marginTop: '30px', marginBottom: '15px', paddingTop: '20px', borderTop: '1px solid #e1e5e9' }}>15. Account and Data Deletion</h2>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>If you wish to delete your account and all associated data:</p>
        <ol style={{ marginBottom: '15px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: '#555' }}>Send an email to <a href="mailto:me@trentb.tech" style={{ color: '#0a7ea4', textDecoration: 'none' }}>me@trentb.tech</a> with the subject line "Account Deletion Request"</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>Include your registered email address in the request</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>We will process your deletion request within 30 days</li>
            <li style={{ marginBottom: '8px', color: '#555' }}>You will receive a confirmation email once your data has been deleted</li>
        </ol>
        
        <p style={{ marginBottom: '15px', color: '#555' }}>Note: Some information may be retained for legal or regulatory purposes as described in the Data Retention section above.</p>
    </div>
    </div>
  );
}
