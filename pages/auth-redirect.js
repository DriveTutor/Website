import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // You can perform any actions here like showing a confirmation message
    // or additional logic for mobile app redirection, analytics, etc.

    console.log("Auth-redirect successful!");
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div>
        <h1>Email Confirmation Successful</h1>
        <p>You can now close this page and return to the app.</p>
      </div>
    </div>
  );
};

export default AuthRedirect;