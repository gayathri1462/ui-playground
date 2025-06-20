import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        UI Button Showcase
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Primary</p>
          <Button label="Primary" variant="primary" size="md" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Secondary</p>
          <Button label="Secondary" variant="secondary" size="md" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Outline</p>
          <Button label="Outline" variant="outline" size="md" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Small</p>
          <Button label="Small" variant="primary" size="sm" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Large</p>
          <Button label="Large" variant="primary" size="lg" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Disabled</p>
          <Button label="Disabled" variant="primary" disabled />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Shimmer</p>
          <Button label="Shimmer" shimmer backgroundColor="#0ea5e9" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
          <p className="text-sm text-gray-700">Custom Yellow</p>
          <Button label="Custom" backgroundColor="#facc15" />
        </div>
      </div>
    </div>
  );
}

export default App;
