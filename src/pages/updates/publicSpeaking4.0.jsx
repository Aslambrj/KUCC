
const PublicSpeakingPros4 = () => {
  const registerLink =
    "https://forms.gle/VifN1wXRHGvdVj9Q9";

  const coverImage =
    "/assets/publicSpeaking/publicSpeaking4.0.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-50 to-white flex flex-col items-center p-4 md:p-6">
      <div className="max-w-5xl w-full bg-white rounded-[28px] shadow-[0_20px_60px_rgba(37,99,235,0.14)] overflow-hidden border border-blue-100">

        {/* Cover Image - No Text, Overlay or Cropping */}
        <div className="w-full bg-white">
          <img
            src={coverImage}
            alt="Public Speaking Pros 4.0 Event Cover"
            className="block w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="p-5 md:p-8 lg:p-10 space-y-8">

          {/* Event Introduction */}
          <section className="space-y-5">
            <div className="text-center space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 leading-tight">
                Public Speaking Pros 4.0
              </h1>

              <p className="text-lg md:text-xl font-semibold text-blue-700">
                Where Ideas Meet Eloquence
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
               
<div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-blue-100 px-5 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
  <span className="text-xs md:text-sm font-medium tracking-wide text-slate-600">
    Presented by
  </span>

  <span className="h-4 w-px bg-sky-300" />

  <span className="text-base md:text-lg font-extrabold tracking-wide bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
    LEXICON
  </span>
</div>


                
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 text-white p-5 md:p-7 shadow-md">
              <p className="text-base md:text-lg leading-relaxed">
                Ideas have the power to inspire, words have the
                power to influence, and a confident voice can
                make all the difference.
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Khulna University Career Club brings you{" "}
                <span className="font-bold">
                  Public Speaking Pros 4.0
                </span>
                , presented by{" "}
                <span className="font-bold">Lexicon</span>,
                a platform to showcase your speaking skills,
                express your ideas, and make your voice heard.
              </p>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Whether your strength lies in Bangla or English,
              this is your opportunity to challenge yourself,
              sharpen your communication skills, and stand out
              as a speaker.
            </p>
          </section>

          {/* Competition Segments */}
          <section className="bg-white border border-blue-100 rounded-2xl p-5 md:p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
              Competition Segments
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 border border-blue-200 p-5 text-center">
                <h3 className="text-xl font-bold text-blue-900">
                  English
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  English Public Speaking
                </p>
              </div>

              <div className="rounded-xl bg-sky-50 border border-sky-200 p-5 text-center">
                <h3 className="text-xl font-bold text-sky-900">
                  Bangla
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Bangla Public Speaking
                </p>
              </div>
            </div>
          </section>

          {/* Competition Rounds */}
          <section className="grid gap-6 lg:grid-cols-2">

            {/* Round 1 */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 md:p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Round 01
                </span>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Video Submission
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Submit a speech video on any topic of your choice.
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Duration:
                  </span>{" "}
                  Maximum 3 minutes
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Evaluation:
                  </span>{" "}
                  Content, delivery, and overall impression
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Submission Deadline:
                  </span>{" "}
                  28 October 2026
                </li>
              </ul>

              <div className="mt-5 rounded-xl bg-white border border-blue-200 p-4">
                <p className="font-semibold text-blue-900 leading-relaxed">
                  The top 8 speakers from each segment will
                  advance to the final round.
                </p>
              </div>
            </div>

            {/* Final Round */}
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 md:p-6">
              <div className="mb-4">
                <span className="inline-block bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Final Round
                </span>
              </div>

              <h2 className="text-2xl font-bold text-sky-900 mb-4">
                Assigned Topics
              </h2>

              <div className="space-y-3 mb-5">
                <div className="bg-white border border-sky-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-sky-700">
                    Event Date
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    1 November 2026
                  </p>
                </div>

                <div className="bg-white border border-sky-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-sky-700">
                    Venue
                  </p>
                  <p className="text-base font-bold text-gray-900">
                    Journalist Liakat Ali Auditorium
                  </p>
                  <p className="text-sm text-gray-600">
                    Khulna University
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Finalists will demonstrate their ability to
                think critically, adapt to assigned topics,
                and speak with confidence before a live audience.
              </p>
            </div>
          </section>

          {/* Winners and Prizes */}
          <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-5 md:p-7">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950">
                Exciting Prizes Await!
              </h2>

              <p className="mt-3 text-gray-700 text-base md:text-lg">
                Outstanding speakers will be rewarded for their
                oratory and communication skills.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white border border-blue-100 p-5 shadow-sm">
                <p className="text-4xl font-extrabold text-blue-700">
                  3
                </p>
                <p className="mt-2 font-semibold text-gray-700">
                  English Winners
                </p>
              </div>

              <div className="rounded-xl bg-white border border-blue-100 p-5 shadow-sm">
                <p className="text-4xl font-extrabold text-sky-700">
                  3
                </p>
                <p className="mt-2 font-semibold text-gray-700">
                  Bangla Winners
                </p>
              </div>

              <div className="rounded-xl bg-white border border-blue-100 p-5 shadow-sm">
                <p className="text-4xl font-extrabold text-indigo-700">
                  6
                </p>
                <p className="mt-2 font-semibold text-gray-700">
                  Total Winners
                </p>
              </div>
            </div>
          </section>

          {/* Registration Fee */}
          <section className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 md:p-6 text-center">
            <h2 className="text-2xl font-extrabold text-emerald-900">
              No Registration Fee!
            </h2>

            <p className="mt-2 text-gray-700 text-base md:text-lg">
              Participate and showcase your talent without
              any registration cost.
            </p>
          </section>

          {/* Eligibility */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Who Can Participate?
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-base md:text-lg">
              <li>
                Batch 25 and Batch 26 students of Khulna University
              </li>

              <li>
                Individual participation only
              </li>
            </ul>
          </section>

          {/* Registration Process */}
          <section className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              How to Register
            </h2>

            <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-base md:text-lg">
              <li>
                Visit{" "}
                <a
                  href="https://kuccofficial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  kuccofficial.com
                </a>
                .
              </li>

              <li>
                Navigate to Public Speaking Pros 4.0.
              </li>

              <li>
                Complete the registration form.
              </li>

              <li>
                Check your email for registration confirmation.
              </li>
            </ol>
          </section>

          {/* Registration Button */}
          <div className="flex justify-center pt-2">
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-base md:text-lg font-bold shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-200"
            >
              Register for Public Speaking Pros 4.0
            </a>
          </div>


          {/* Motivational Closing */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 md:p-7 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Your Voice Deserves to Be Heard
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Take the stage, share your ideas, and make every
              word count.
            </p>

            <p className="mt-4 font-extrabold text-blue-900 text-lg md:text-xl">
              Speak boldly. Think critically. Leave an impression.
            </p>
          </section>

          
         

        </div>
      </div>
    </div>
  );
};

export default PublicSpeakingPros4;
