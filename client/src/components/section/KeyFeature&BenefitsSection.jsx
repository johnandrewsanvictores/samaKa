import { CreditCard, Gift, Handshake } from "lucide-react";

const rewardCategories = [
  {
    icon: CreditCard,
    title: "Cash Rewards",
    description:
      "Redeem your Lingkod Points for real cash rewards at the barangay hall.",
  },
  {
    icon: Handshake,
    title: "Services",
    description:
      "Access exclusive community services, workshops, and special experiences.",
  },
  {
    icon: Gift,
    title: "Physical Rewards",
    description:
      "Claim tangible items like t-shirts, mugs, and artisan gift baskets.",
  },
];

const KeyFeatureAndBenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-bgColor2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-primary mb-6">Rewards</h2>
          <p className="text-p text-subHeadingText leading-relaxed max-w-3xl mx-auto">
            These are the main categories of rewards you can claim with your
            Lingkod Points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rewardCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 border border-gray-200 text-center flex flex-col items-center"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-h5 font-bold text-headingText mb-2">
                  {cat.title}
                </h3>
                <p className="text-small text-subHeadingText leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatureAndBenefitsSection;
