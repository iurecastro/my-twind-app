import React from 'react';
// Import the tw function from Twind to use for styling
import { tw } from '@twind/react';

// Define the App component
const App: React.FC = () => {
  return (
    // Use Twind's tw function to apply styles
    <div className={tw`flex items-center justify-center h-screen bg-gray-100`}>
      <h1 className={tw`text-4xl font-bold text-primary`}>Hello, Twind!</h1>
    </div>
  );
};

// Export the App component as default
export default App;
