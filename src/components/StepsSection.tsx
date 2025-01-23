import React, { useState, useEffect } from 'react';
import { Phone, Droplets, ClipboardCheck, Search, Ruler, Wrench, PaintBucket, CheckCircle, ChevronRight } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
}

interface ProcessStep {
  id: number;
  icon: any;
  phase: string;
  title: string;
  description: string;
  timing: string;
  primaryPoints: string[];
  details: string[];
}

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const metrics: Metric[] = [
    {
      value: "500+",
      label: "PROPERTIES RESTORED"
    },
    {
      value: "45min",
      label: "GTA RESPONSE TIME"
    },
    {
      value: "24/7",
      label: "EMERGENCY SERVICE"
    },
    {
      value: "100%",
      label: "SATISFACTION RATE"
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: Phone,
      phase: "EMERGENCY PHASE",
      title: "Initial Response",
      description: "24/7 emergency response across Greater Toronto Area",
      timing: "Within hours of contact",
      primaryPoints: [
        "Rapid GTA emergency team deployment",
        "Water source identification",
        "Initial safety assessment"
      ],
      details: [
        "Complete property access coordination",
        "Water classification (clean/gray/black)",
        "Immediate safety hazard identification",
        "Initial insurance contact",
        "Preliminary damage documentation",
        "Emergency power assessment",
        "Initial extraction equipment setup"
      ]
    },
    {
      id: 2,
      icon: Droplets,
      phase: "MITIGATION PHASE",
      title: "Professional Drying",
      description: "Canadian-certified drying process with advanced monitoring",
      timing: "Minimum 7-14 days",
      primaryPoints: [
        "Industrial dehumidifier deployment",
        "Strategic air mover placement",
        "Daily moisture tracking"
      ],
      details: [
        "Custom drying plan development",
        "Moisture mapping creation",
        "Daily moisture readings at marked points",
        "Temperature and humidity monitoring",
        "Equipment adjustment as needed",
        "Daily progress documentation",
        "Drying time estimates based on materials"
      ]
    },
    {
      id: 3,
      icon: Search,
      phase: "ASSESSMENT PHASE",
      title: "Damage Analysis",
      description: "Ontario Building Code compliant evaluation of affected areas",
      timing: "Throughout drying (1-2 weeks)",
      primaryPoints: [
        "Structural assessment",
        "Material damage evaluation",
        "Hidden damage investigation"
      ],
      details: [
        "Floor system evaluation (all layers)",
        "Wall cavity inspection",
        "Cabinet and millwork assessment",
        "Ceiling and support evaluation",
        "ESA electrical inspection",
        "Plumbing system assessment",
        "HVAC system evaluation",
        "Insulation condition check",
        "Moisture barrier inspection"
      ]
    },
    {
      id: 4,
      icon: ClipboardCheck,
      phase: "DOCUMENTATION PHASE",
      title: "Insurance Coordination",
      description: "Ontario insurance standards compliance and documentation",
      timing: "2-3 weeks for initial process",
      primaryPoints: [
        "Complete damage documentation",
        "Coverage verification",
        "Estimate development"
      ],
      details: [
        "Detailed photo documentation",
        "Moisture reading logs",
        "Line-item damage scope",
        "Material replacement specifications",
        "Ontario Code upgrade requirements",
        "Additional damage documentation",
        "Price verification process",
        "Adjuster coordination",
        "Supplemental claim preparation"
      ]
    },
    {
      id: 5,
      icon: Ruler,
      phase: "PLANNING PHASE",
      title: "Material Selection",
      description: "Local Toronto supplier coordination and material selection",
      timing: "2-4 weeks for selections",
      primaryPoints: [
        "Flooring selection process",
        "Cabinet specifications",
        "Finish material choices"
      ],
      details: [
        "Sample procurement and review",
        "Material availability verification",
        "Lead time assessment",
        "Budget consideration for each item",
        "Material grade selection",
        "Color and style matching",
        "Installation requirement review",
        "Material ordering coordination",
        "Storage and delivery planning"
      ]
    },
    {
      id: 6,
      icon: Wrench,
      phase: "DEMOLITION PHASE",
      title: "Removal & Preparation",
      description: "Toronto disposal regulations compliant demolition",
      timing: "1-3 weeks based on scope",
      primaryPoints: [
        "Containment setup",
        "Systematic material removal",
        "Site preparation"
      ],
      details: [
        "Work area isolation",
        "Furniture and content protection",
        "Floor covering removal",
        "Cabinet and fixture removal",
        "Drywall and insulation removal",
        "Subfloor inspection and removal",
        "Surface preparation",
        "City-compliant debris removal",
        "Anti-microbial treatment"
      ]
    },
    {
      id: 7,
      icon: Wrench,
      phase: "RECONSTRUCTION PHASE",
      title: "Rebuilding Process",
      description: "Ontario Building Code compliant reconstruction",
      timing: "4-12 weeks depending on scope",
      primaryPoints: [
        "Structural repairs",
        "System restoration",
        "Surface reconstruction"
      ],
      details: [
        "Framing repairs or replacement",
        "Subfloor installation",
        "TSSA plumbing compliance",
        "ESA electrical compliance",
        "HVAC system repairs",
        "Insulation installation",
        "Drywall installation",
        "Cabinet installation",
        "Door and trim installation",
        "Initial systems testing"
      ]
    },
    {
      id: 8,
      icon: PaintBucket,
      phase: "FINISHING PHASE",
      title: "Detail Work",
      description: "Fine detail completion and finishing work",
      timing: "2-4 weeks for completion",
      primaryPoints: [
        "Surface finishing",
        "Paint application",
        "Final detailing"
      ],
      details: [
        "Wall texturing",
        "Primary paint coating",
        "Trim installation and finishing",
        "Floor finishing",
        "Cabinet hardware installation",
        "Fixture installation",
        "Detail cleaning",
        "Touch-up work",
        "Final adjustments"
      ]
    },
    {
      id: 9,
      icon: CheckCircle,
      phase: "COMPLETION PHASE",
      title: "Final Inspection",
      description: "Municipal and insurance compliance verification",
      timing: "1-2 weeks for final process",
      primaryPoints: [
        "Quality control inspection",
        "Systems verification",
        "Project documentation"
      ],
      details: [
        "Detailed inspection process",
        "Client walkthrough",
        "Punch list completion",
        "Final cleaning",
        "Warranty documentation",
        "Maintenance instructions",
        "Final photographs",
        "Insurance paperwork completion",
        "Project closeout documents"
      ]
    }
  ];

  // Group steps by phase
  const phases = {
    emergency: processSteps.slice(0, 2),
    planning: processSteps.slice(2, 5),
    execution: processSteps.slice(5, 7),
    completion: processSteps.slice(7, 9)
  };

  return (
    <div className="w-full">
      {/* Enhanced Metrics Section with Parallax-like scroll effect */}
      <div className="relative w-full bg-gradient-to-br from-[#8B2635] via-[#7A2230] to-[#6B1D29] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] opacity-20" />
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 relative">
            <div className="inline-block">
              <h2 className="text-5xl font-bold text-white mb-4">BY THE NUMBERS</h2>
              <div className="h-1 w-24 bg-white mx-auto rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative p-8 text-center">
                  <div className="text-6xl font-bold text-white mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="h-0.5 w-12 bg-white/30 mx-auto mb-4 transform group-hover:w-24 transition-all duration-300" />
                  <div className="text-sm text-stone-300 tracking-wider group-hover:text-white transition-colors duration-300">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Process Timeline Section */}
      <section className="py-24 px-5 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-[#1C1917]">THE PROCESS</h2>
            <div className="h-1 w-24 bg-[#8B2635] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#44403C] max-w-3xl mx-auto">
              We understand Toronto&apos;s unique challenges with water damage. Our comprehensive process 
              ensures every aspect meets Ontario building codes while delivering exceptional results.
            </p>
          </div>

          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Emergency', 'Planning', 'Execution', 'Completion'].map((phase, index) => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(index + 1)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedPhase === index + 1 
                    ? 'bg-[#8B2635] text-white shadow-lg scale-105' 
                    : 'bg-white/50 text-[#1C1917] hover:bg-white'}
                `}
              >
                {phase} Phase
              </button>
            ))}
          </div>

          {/* Steps Grid with Enhanced Interaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`
                    group relative p-8 rounded-2xl transition-all duration-500
                    ${isActive ? 'bg-white shadow-xl scale-105' : 'bg-white/50 hover:bg-white hover:shadow-lg'}
                  `}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B2635] opacity-5 rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center
                        ${isActive ? 'bg-[#8B2635] text-white' : 'bg-[#8B2635]/10 text-[#8B2635]'}
                        transition-all duration-300 transform group-hover:scale-110
                      `}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#8B2635]">STEP {step.id}</span>
                          <ChevronRight className="w-4 h-4 text-[#8B2635]" />
                          <span className="text-sm text-stone-500">{step.phase}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#1C1917]">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-[#44403C] mb-4">{step.description}</p>
                    
                    <div className={`
                      space-y-3 overflow-hidden transition-all duration-500
                      ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="text-sm font-medium text-[#8B2635] mb-3">
                        {step.timing}
                      </div>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#44403C]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8B2635] mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;