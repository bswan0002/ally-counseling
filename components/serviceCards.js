export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-2">
      <div className="service-card service-card-green">
        <h3 className="text-center pb-1">
          <span className="material-icons-outlined text-3xl">psychology</span>{" "}
          Therapy
        </h3>
        <p className="p-2 font-sans tracking-wide">
          Specialized, highly effective, and evidence-based treatments for
          anxiety, depression, obsessive compulsive disorder, PTSD, Bipolar
          Disorder, Autism, and more.
        </p>
      </div>
      <div className="service-card service-card-purple">
        <h3 className="text-center pb-1">
          <span className="material-icons-outlined text-3xl">spa</span>{" "}
          Counseling
        </h3>
        <p className="p-2 font-sans tracking-wide">
          Find help for specific issues like managing stress or anger, grief and
          loss, relationship issues, and more.
        </p>
      </div>
      <div className="service-card service-card-red">
        <h3 className="text-center pb-1">
          <span className="material-icons-outlined text-3xl">auto_graph</span>{" "}
          Coaching
        </h3>
        <p className="service-card-body">
          Get inspired, motivated, and accomplish your goals with personalized
          coaching designed to bring out your best.
        </p>
      </div>
    </div>
  );
}
