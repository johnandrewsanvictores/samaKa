import PublicLayout from "../layout/PublicLayout.jsx";

const About = () => {
  return (
    <PublicLayout>
      <section className="py-24 px-4 bg-bgColor">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-h1 font-bold text-headingText mb-8">
            About{" "}
            <div className="relative inline-block">
              <span className="text-primary">Bayani</span>
              <span className="text-subHeadingText">mo</span>
              <svg
                className="absolute left-0 bottom-[-20px] w-full"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 C50 5, 150 5, 195 15"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </h1>
          <p className="text-h6 text-subHeadingText leading-relaxed max-w-3xl mx-auto">
            Bayanimo is a digital platform designed to inspire active community
            participation within your barangay. Through collaboration between
            barangay officials and residents, the app becomes a hub for events,
            projects, and service missions.
            <br />
            <br />
            Barangay officials can easily post verified events, meetings, and
            calls for volunteers. Residents join in, earn XP and Lingkod Points,
            and track their personal impact through a gamified system.
            <br />
            <br />
            The goal is simple: encourage unity, increase civic participation,
            and reward the unsung heroes of the barangay. Bayanimo makes it
            easy, fun, and meaningful to serve your community—one small step at
            a time.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-headingText dark:text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-h6 text-subHeadingText dark:text-gray-300 max-w-3xl mx-auto">
              To empower barangay communities by creating an engaging platform
              that rewards participation, fosters connections, and builds a
              sense of belonging among residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-8 text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="text-h4 font-bold text-headingText dark:text-white mb-4">
                  Build Community.
                </h3>
                <p className="text-h6 text-subHeadingText dark:text-gray-300">
                  Connect neighbors and strengthen bonds
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-8 text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="text-h4 font-bold text-headingText dark:text-white mb-4">
                  Reward Participation.
                </h3>
                <p className="text-h6 text-subHeadingText dark:text-gray-300">
                  Recognize and incentivize community involvement
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-8 text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="text-h4 font-bold text-headingText dark:text-white mb-4">
                  Create Impact.
                </h3>
                <p className="text-h6 text-subHeadingText dark:text-gray-300">
                  Transform neighborhoods through collective action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-bgColor">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary mb-6">
              Who We Serve
            </h2>
            <p className="text-h6 text-subHeadingText max-w-3xl mx-auto">
              Bayanimo is designed for barangay communities across the
              Philippines, serving both residents and local government units who
              want to create more engaged and connected neighborhoods.
            </p>
          </div>

          <div className="space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-h2 font-bold text-headingText">
                  Barangay Residents
                </h3>
                <p className="text-h6 text-subHeadingText leading-relaxed">
                  From young professionals to senior citizens, Bayanimo helps
                  residents stay connected with their community, participate in
                  local events, and earn rewards for their contributions to
                  barangay development.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🏘️</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🏛️</span>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-h2 font-bold text-headingText">
                  Local Government Units
                </h3>
                <p className="text-h6 text-subHeadingText leading-relaxed">
                  Barangay officials and local government units can use Bayanimo
                  to organize events, track community participation, and build
                  stronger relationships with their constituents through digital
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-headingText dark:text-primary mb-6">
              What Makes Us Different
            </h2>
            <p className="text-h6 text-subHeadingText dark:text-gray-300 max-w-4xl mx-auto">
              Bayanimo combines community engagement with gamification to create
              a unique platform that makes participating in barangay activities
              both rewarding and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-full h-[320px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🎯</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-base text-subHeadingText dark:text-gray-300 leading-relaxed font-medium">
                  Gamified community participation
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-full h-[320px] bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🏆</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-base text-subHeadingText dark:text-gray-300 leading-relaxed font-medium">
                  Reward system for active citizens
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-full h-[320px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-base text-subHeadingText dark:text-gray-300 leading-relaxed font-medium">
                  Real-time leaderboards and analytics
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-full h-[320px] bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🤝</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-base text-subHeadingText dark:text-gray-300 leading-relaxed font-medium">
                  Community-driven event organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
