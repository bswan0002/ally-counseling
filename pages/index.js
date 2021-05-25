import Head from "next/head";
import Image from "next/image";
import Main from "../components/main";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Ally Counseling</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ally.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="text-center px-4 py-8">
        <h4>You deserve your best life</h4>
        <Layout>
          <p className="text-2xl font-serif mt-4 mx-2">
            Unlock your full potential with therapy. counseling, and coaching
            services with Ally Counseling.
          </p>
        </Layout>
      </div>
      <div className="flex flex-col justify-center">
        <Layout>
          {/* <h4 className="py-4 ml-4">Our Services</h4> */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-2">
            <div className="bg-gradient-to-r from-green-100 to-blue-200 border border-blue-200 bg-opacity-50 rounded p-2 m-1 shadow-lg">
              <div className="divide-y divide-blue-500 divide-opacity-50">
                <h3 className="text-center align-middle pb-1">
                  <span class="material-icons-outlined text-3xl">
                    psychology
                  </span>{" "}
                  Therapy
                </h3>

                <p className="p-2 font-sans tracking-wide">
                  Specialized, highly effective, and evidence-based treatments
                  for anxiety, depression, obsessive compulsive disorder, PTSD,
                  Bipolar Disorder, Autism, and more.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-200 to-purple-200 border border-purple-200 bg-opacity-50 rounded p-2 m-1 shadow-lg">
              <div className="divide-y divide-purple-500 divide-opacity-50">
                <h3 className="text-center pb-1">
                  <span class="material-icons-outlined">spa</span> Counseling
                </h3>

                <p className="p-2 font-sans tracking-wide">
                  Find help for specific issues like managing stress or anger,
                  grief and loss, relationship issues, and more.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-200 to-red-200 border border-purple-200 bg-opacity-50 rounded p-2 m-1 shadow-lg">
              <div className="divide-y divide-red-500 divide-opacity-50">
                <h3 className="text-center pb-1">
                  <span class="material-icons-outlined">auto_graph</span>{" "}
                  Coaching
                </h3>

                <p className="p-2 font-sans tracking-wide">
                  Get inspired, motivated, and accomplish your goals with
                  personalized coaching designed to bring out your best.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className="bg-gray-100 pt-4 pb-8 mt-4">
        <Layout px={2}>
          <h4 className="py-2 ml-4">Welcome to Ally Counseling</h4>

          <p className="my-3 font-serif tracking-wide">
            We’re a team of talented therapists dedicated to helping people
            improve their lives. Ally Counselors strongly believe that everyone
            deserves a wonderful life and is capable of reaching that goal. Life
            can be challenging and sometimes you need an Ally who has the
            knowledge, skills, and determination to help you live life to the
            fullest. Whether aspiring to improve your personal life, academics,
            career, relationships, Ally Counselors help people bring out their
            best so they can make positive and lasting changes in their lives.
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-4 p-3 justify-center mx-auto w-4/5 md:w-3/5 bg-white rounded-lg shadow">
            <li>Improve your wellbeing and feel better</li>
            <li>Gain the insight you need to succeed</li>
            <li>Discover your true potential</li>
            <li>Learn the science behind wellbeing</li>
            <li>Let go of the things that are holding you back</li>
            <li>Tackle depression and anxiety</li>
            <li>Find balance in your life</li>
            <li>Learn Mindfulness for wellness and performance</li>
            <li>Improve your interpersonal skills</li>
            <li>Develop your emotional IQ</li>
          </ul>
        </Layout>
      </div>
      <div className="pt-4 pb-8">
        <Layout>
          <h4 className="py-2 ml-4">Ally Counselors</h4>
        </Layout>
      </div>
    </Main>
  );
}
