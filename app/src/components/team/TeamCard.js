import React from 'react';

export default function TeamCard({ image, name, job, description }) {
  return (
    <div className="flex-auto flex flex-row items-center mb-8 bg-primary-100 rounded-lg shadow">
      <div className="flex-none h-full rounded-full p-3">
        <div
          className="rounded-full h-full h-48 w-48 border-8 border-primary-200 overflow-hidden"
          style={{ perspective: 1 }}
        >
          {image}
        </div>
      </div>
      <div className="flex-auto ml-0 sm:ml-2 m-2 overflow-y-scroll">
        <h2 className="text-2xl font-medium mt-2 sm:mt-4 leading-tight">
          {name}
        </h2>
        <h3 className="text-primary-700 font-light text-sm">{job}</h3>
        <p className="my-2 text-sm leading-tight sm:leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}
