import { useEffect, useRef } from "react";

const HowItWorksSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const stepElements = sectionRef.current?.querySelectorAll(".step-item");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      stepNumber: "01",
      title: "",
      description:
        "",
      videoPlaceholder: "",
    },
    {
      stepNumber: "02",
      title: "",
      description:
        "",
      videoPlaceholder: "",
    },
    {
      stepNumber: "03",
      title: "",
      description:
        "",
      videoPlaceholder: "",
    },
    {
      stepNumber: "04",
      title: "",
      description:
        "",
      videoPlaceholder: "",
    },
  ];

  return (
    <section
      id="hiw"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 bg-bgColor2"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="step-item text-center mb-16 sm:mb-20 md:mb-24 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-h3 sm:text-h2 font-bold text-primary mb-6">
            How it works
          </h2>
          <p className="text-p sm:text-h6 md:text-h5 text-subHeadingText leading-relaxed max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.stepNumber}
                className="step-item group opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } space-y-6`}
                  >
                    <div className="inline-flex items-center space-x-4 mb-6">
                      <span className="bg-primary text-white text-h6 sm:text-h5 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                        {step.stepNumber}
                      </span>
                      <div className="h-px bg-primary w-12 sm:w-16 md:w-20"></div>
                    </div>

                    <h3 className="text-h4 sm:text-h3 md:text-h2 font-bold text-headingText leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-p sm:text-h6 text-subHeadingText leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } relative group-hover:scale-105 transition-transform duration-500`}
                  >
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="text-sm sm:text-base text-primary font-semibold capitalize">
                            {step.videoPlaceholder.replace("-", " ")} Demo
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-4 left-16 w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>

                    <div className="absolute -top-4 -right-4 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                      {step.stepNumber}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
