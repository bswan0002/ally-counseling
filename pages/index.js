import Head from "next/head";
import Image from "next/image";
import Main from "../components/main";
import Layout from "../components/layout";
import ServiceCards from "../components/serviceCards";
import ContactForm from "../components/contactForm";

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
        <div>
          <div id="services" className="relative -top-24" />
          <h4>You deserve your best life</h4>
        </div>
        <Layout>
          <p className="text-2xl font-serif mt-4 mx-2">
            Unlock your full potential with therapy. counseling, and coaching
            services with Ally Counseling.
          </p>
        </Layout>
      </div>
      <Layout>
        <ServiceCards />
      </Layout>
      <div className="bg-gray-100 pt-4 pb-8 mt-4">
        <Layout px={2}>
          <div>
            <div id="about" className="relative -top-24" />
            <h4 className="py-2 ml-4 text-center">
              Welcome to Ally Counseling
            </h4>
          </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
            <div
              className="bg-cover h-80 m-2 p-2 max-w-sm  flex flex-col rounded-lg shadow-lg"
              style={{ "backgroundImage": "url(/improve-wellbeing.jpg)" }}
            >
              <h3 className="text-center flex-grow px-14">Improve Wellbeing</h3>
            </div>
            <div
              className="bg-cover h-80 m-2 p-2 max-w-sm  flex flex-col rounded-lg shadow-lg"
              style={{ "backgroundImage": "url(/tackle-depression.jpg)" }}
            >
              <h3 className="text-center flex-grow px-10">
                Tackle Depression and Anxiety
              </h3>
            </div>
            <div
              className="bg-cover h-80 m-2 p-2 max-w-sm  flex flex-col rounded-lg shadow-lg"
              style={{ "backgroundImage": "url(/find-balance.jpg)" }}
            >
              <h3 className="text-center flex-grow px-10">
                Find Balance in Your Life
              </h3>
            </div>
            <div
              className="bg-cover h-80 m-2 p-2 max-w-sm  flex flex-col rounded-lg shadow-lg"
              style={{ "backgroundImage": "url(/mindful.jpg)" }}
            >
              <h3 className="text-center flex-grow px-10">
                Develop Mindfulness
              </h3>
            </div>
          </div>
        </Layout>
      </div>
      <div className="pt-4 pb-10">
        <Layout px={2}>
          <h4 className="py-2 ml-4 text-center">Ally Counselors</h4>

          <p className="my-3 font-serif tracking-wide">
            Ally Counselors are passionate about helping people who are
            struggling with new or chronic issues that are preventing them from
            achieving their full potential in life, academics, relationships, or
            careers. They enjoy partnering with their clients to help them
            discover or get back on track with the things that make them feel
            motivated, happy, and fulfilled.
          </p>
        </Layout>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 max-w-screen-lg mx-auto rounded-lg shadow-lg">
          <div className="col-span-2 order-2 sm:order-1 flex flex-col justify-center bg-gray-100">
            <p className="font-serif italic p-3">
              I love seeing my clients get excited about making positive changes
              in their lives and I appreciate the opportunity to support my
              clients through that process.
            </p>
            <p className="mt-6 mb-4 px-3">
              Brett Johnson, LMFT, Ally Counselor
            </p>
          </div>
          <img
            className="col-span-3 sm:order-2 w-full max-h-full bg-cover"
            src="/brett-ally.jpg"
          ></img>
        </div>
      </div>
      <hr className="my-6 max-w-screen-lg mx-auto" />
      <Layout>
        <div>
          <div id="office" className="relative -top-24" />
          <h4 className="text-center mb-6">Our Office</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 px-3 leading-relaxed space-y-4 md:space-y-0">
            <p>Southwest Portland Office</p>
            <p>All other Oregon locations via telehealth (video conference)</p>
          </div>
        </div>
      </Layout>
      <hr className="mt-6 mb-10 max-w-screen-lg mx-auto" />
      <Layout>
        <ContactForm />
      </Layout>
    </Main>
  );
}
