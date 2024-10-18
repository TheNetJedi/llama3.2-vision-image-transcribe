import React from 'react';
import ImageUploadForm from './components/ImageUploadForm';
import { Image as ImageIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <ImageIcon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">Image Analysis App</h1>
        <p className="text-gray-600 mt-2">Upload an image and get AI-powered analysis</p>
      </div>
      <ImageUploadForm />
    </div>
  );
}

export default App;