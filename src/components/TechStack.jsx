import React, { use, useState } from 'react';
import { toast } from 'react-toastify';

function TechStack({ techPromise }) {
  const techStack = use(techPromise);

  const [selectedStack, setSelectedStack] = useState([]);

  // Add tech to the tech stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (!isAlreadyAdded) {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} is added to stack`);
    }
  };

  // Remove tech from tech stack
  const handleRemoveFromStack = (techId) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
    toast.error('Removed Successfully');
  };

  // Remove all tech stack
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All removed successfully');
  };

  return (
    <section className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#475569]">
          Explore the{' '}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#475569] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {techStack.map((tech) => {
            const isSelected = selectedStack.some((item) => item.id === tech.id);

            return (
              <div
                key={tech.id}
                className={`border  rounded-xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow ${isSelected ? 'border-[#EC4899] hover:shadow-none' : 'border-slate-100'}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${tech.badgeColor}`}
                    >
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A]">{tech.name}</h3>
                  <p className="text-sm text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] my-4 pt-3">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">{tech.category}</span>
                    <span className="text-[#64748B]">{tech.level}</span>
                    <span className="flex items-center gap-1 font-semibold text-[#64748B]">
                      ★ {tech.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isSelected}
                    className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isSelected ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1 border border-slate-100 rounded-xl p-5 shadow-xs sticky top-22">
          <h2 className="text-base font-bold text-[#0F172A]">Your Stack</h2>
          <p className="text-xs text-[#94A3B8] mb-4">
            {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'}{' '}
            Selected
          </p>

          <div className="space-y-3 min-h-30">
            {selectedStack.length === 0 ? (
              <p className="text-sm text-[#94A3B8] italic text-center py-6 border-2 border-slate-100 rounded">
                No technologies added yet.
              </p>
            ) : (
              selectedStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between border border-slate-100 rounded-lg p-2.5 bg-slate-50/50"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">{tech.name}</p>
                      <p className="text-[10px] text-slate-400">{tech.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromStack(tech.id)}
                    className="text-slate-400 hover:text-slate-600 p-1"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {selectedStack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="w-full mt-6 py-2 border border-rose-200 text-rose-500 hover:bg-rose-50 text-xs font-semibold rounded-lg transition-colors"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
