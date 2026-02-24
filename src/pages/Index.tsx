import { useEffect, useRef } from "react";

const useLiquidGlass = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "35%");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return ref;
};

const Index = () => {
  const navBtnRef = useLiquidGlass();
  const heroBtnRef = useLiquidGlass();

  return (
    <div className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
        {/* Video Background */}
        {/* Fallback gradient (behind video) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="https://emitrr-ai-test.s3.us-east-2.amazonaws.com/mms/f73ce880-8806-4510-9898-a2aa7dee7979-7c443c83-1332-473f-8b13-0255116eb27b.mp4"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 lg:px-12 py-4 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="text-white font-light tracking-[0.25em] text-lg">
            CycleSync<span className="text-white/50">®</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-nav-link">Mission</a>
            <a href="#team" className="text-nav-link">Team</a>
            <a href="#blog" className="text-nav-link">Blog</a>
          </div>
          <a
            ref={navBtnRef as React.Ref<HTMLAnchorElement>}
            href="#early-access"
            onClick={(e) => {
              e.preventDefault();
              const input = document.getElementById("early-access-input") as HTMLInputElement;
              if (input) {
                input.scrollIntoView({ behavior: "smooth", block: "center" });
                setTimeout(() => input.focus(), 500);
              }
            }}
            className="liquid-glass-btn rounded-full px-5 py-2.5 text-sm font-light tracking-wide text-white cursor-pointer"
          >
            Get now
          </a>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex items-end px-6 lg:px-12 pb-8 lg:pb-12 mt-24">
          <div className="max-w-3xl">
            <p className="text-hero-tagline mb-6">Your AI cycle companion</p>
            <h1 className="text-hero-headline mb-8">
              Clarity for your cycle.
              <br />
              <span className="text-hero-headline-dim">Comfort in your life.</span>
            </h1>
            <p className="text-hero-body max-w-md mb-8">A modern cycle app for people who menstruate — created to help you understand your hormonal phases and live, train, and plan in sync with your body.</p>

            {/* Email Capture */}
            <div id="early-access" className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                id="early-access-input"
                type="email"
                placeholder="Enter your email"
                className="input-hero flex-1"
              />
              <button
                ref={heroBtnRef as React.Ref<HTMLButtonElement>}
                className="liquid-glass-btn rounded-full px-5 py-3 text-sm font-light tracking-wide text-white whitespace-nowrap"
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section id="mission" className="relative pt-32 pb-16 px-6 md:px-12">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,139,0.25),transparent_60%)] opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-white/50 uppercase tracking-widest text-sm mb-8">Mission</p>

          <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-10">
            Most women are taught to push through, ignore their body and perform linearly.{" "}
            <span className="tracking-wide bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              But biology is cyclical.
            </span>
          </p>

          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Our mission is to empower women to live, train, and perform in alignment with their cycle — through intelligent, beautifully designed guidance.
          </p>

          <div className="border-t border-white/10 mt-20" />
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section id="team" className="pt-16 pb-28 px-6 md:px-12 bg-gradient-to-b from-black via-slate-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/50 uppercase tracking-widest text-sm mb-4">Team</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">Meet the Team</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Fiona", role: "Product Owner", image: "https://i.postimg.cc/Gm75pfrR/Fiona.png" },
              { name: "Sameeksha", role: "Scrum Master", image: "https://i.postimg.cc/K8qHYWFF/Sameeksha.png" },
              { name: "Alisa", role: "Brand & Design", image: "https://i.postimg.cc/Gm75pfrC/Alisa.png" },
              { name: "Manish", role: "Engineering", image: "https://i.postimg.cc/RZsD0Y9z/Manish.png" },
              { name: "Jane", role: "Growth", image: "https://i.postimg.cc/P53Rq7HB/Jane.png" },
              { name: "Elli", role: "Engineering" },
              { name: "Tari", role: "Engineering" },
            ].map((member) => (
              <div
                key={member.name}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/20 p-6 text-center transition duration-300 hover:border-white/20"
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-28 h-28 mx-auto mb-6 rounded-full object-cover border border-white/20" />
                ) : (
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                )}
                <p className="text-white text-lg font-medium mb-1">{member.name}</p>
                <p className="text-white/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section id="blog" className="relative py-28 px-6 md:px-12 overflow-hidden">
        {/* Background image */}
        <img
          src="https://i.postimg.cc/yxkC8fTM/bg-blog-compressed.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-black/50" />
        {/* Bottom gradient fade to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-56 z-[2] bg-gradient-to-b from-transparent via-black/60 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-14">
            <p className="text-white/50 uppercase tracking-widest text-sm mb-4">Blog</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">Our Resources & Updates</h2>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Introducing CycleSync: Clarity for Your Cycle",
                date: "Feb 2026",
                author: "CycleSync Team",
                image: "https://i.postimg.cc/qMFMLVFc/blog-3.jpg",
              },
              {
                title: "Training, Mood, and Energy: Working With Your Phases",
                date: "Feb 2026",
                author: "CycleSync Team",
                image: "https://i.postimg.cc/zGW5FLWK/blog-2.jpg",
              },
            ].map((post) => (
              <div
                key={post.title}
                className="rounded-3xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-xl shadow-black/25 overflow-hidden transition duration-300 hover:border-white/25"
              >
                {/* Image Area */}
                <div className="relative h-56 md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                {/* Content Area */}
                <div className="bg-black/35 backdrop-blur-sm p-6 md:p-7 flex justify-between items-end gap-6">
                  <h3 className="text-white text-lg md:text-xl font-light leading-snug text-left">
                    {post.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <p className="text-white/80 text-sm">{post.date}</p>
                    <p className="text-white/50 text-sm">{post.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLASS FOOTER ===== */}
      <footer className="py-24 px-6 md:px-12 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white/[0.06] backdrop-blur-sm border border-white/10 shadow-xl shadow-black/20 p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full border border-white/40 flex-shrink-0" />
                  <span className="text-white text-xl font-light tracking-wide">
                    CycleSync<span className="text-white/50">®</span>
                  </span>
                </div>
                <p className="text-white/50 text-sm mt-2">Your AI cycle companion</p>
              </div>

              {/* Middle Column */}
              <div>
                <nav className="flex flex-col space-y-4">
                  {["Why CycleSync", "Our Mission", "Features", "Team", "Contact"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right Column */}
              <div>
                <p className="text-white/70 font-light mb-4">Follow us</p>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300 flex items-center justify-center text-white/60"
                >
                  ✦
                </a>
              </div>
            </div>

            {/* Divider + Legal */}
            <div className="border-t border-white/10 my-8" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-white/40 text-sm">© 2026 CycleSync. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-white/60 transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-white/40 hover:text-white/60 transition-colors duration-300 text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
