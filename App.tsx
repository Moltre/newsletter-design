import { ArrowRight, Share2, MessageCircle, Heart, Rss, Globe, Music2 } from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-5 mb-6 last:mb-0">
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1">
        {number}
      </div>
      <p style={{ fontSize: '17px', lineHeight: '1.55', color: '#E8E8E8' }}>{children}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="py-8 flex justify-center">
      <div className="h-px w-24 bg-white/20" />
    </div>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200">
      {label}
      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}

function SolidButton({ label }: { label: string }) {
  return (
    <button className="inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200">
      {label}
    </button>
  );
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '640 / 820' }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)',
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10">
        <div className="text-white">
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', lineHeight: '0.95', letterSpacing: '-0.02em' }}>
            Design Rocket
          </div>
          <div style={{ fontSize: '13px', letterSpacing: '0.22em', fontWeight: 500, marginTop: '4px' }}>
            CERTIFICATES
          </div>
        </div>
        <div className="mt-40 text-white" style={{ fontSize: '13px', letterSpacing: '0.28em', fontWeight: 600 }}>
          NOW AVAILABLE
        </div>
        <div className="flex-1" />
        <h1
          className="text-white max-w-[560px]"
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: '58px', lineHeight: '1.02', letterSpacing: '-0.02em' }}
        >
          Learn to lead AI<br />and unlock new value
        </h1>
        <button
          className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200"
          style={{ background: '#D8F90A', color: '#1E1E1E', fontWeight: 600 }}
        >
          Enroll Now
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

// ─── Section 2: Intro Copy ────────────────────────────────────────────────────

function IntroCopySection() {
  return (
    <>
      <div className="px-[78px] pb-8 pt-4 text-center">
        <p style={{ fontSize: '18px', lineHeight: '1.55', color: '#E8E8E8' }}>
          Built in collaboration with Microsoft, this certificate course gives you the toolkit to lead AI transformation
          across your organization. Learn to spot opportunities, launch AI pilots, and scale adoption grounded in
          responsible practices and proven frameworks.
        </p>
      </div>
      <div className="flex justify-center pb-14">
        <PrimaryButton label="Get Started" />
      </div>
      <Divider />
    </>
  );
}

// ─── Section 3: Transform How You Lead ───────────────────────────────────────

function TransformSection() {
  return (
    <>
      <div className="px-9 pb-8 text-center">
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '46px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#F2F2F2' }}>
          Transform how you lead with AI
        </h2>
      </div>
      <div className="px-[42px] pb-10">
        <a href="#" className="block overflow-hidden rounded-[14px] group">
          <video
            className="w-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '370px' }}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </a>
      </div>
      <div className="px-[76px] pb-10">
        <div className="max-w-[489px] mx-auto">
          <Step number={1}>Learn how to spot AI opportunities that boost productivity across roles and deliver visible results.</Step>
          <Step number={2}>Build structures that support your team so AI efficiencies multiply across the organization.</Step>
          <Step number={3}>Gain the skills to drive culture change like securing buy-in and reducing resistance.</Step>
          <Step number={4}>Get frameworks to deliver AI pilots that prove impact fast and build credibility with measurable results.</Step>
        </div>
      </div>
      <div className="flex justify-center pb-14">
        <SolidButton label="Enroll Now" />
      </div>
      <Divider />
    </>
  );
}

// ─── Section 4: Build Your Roadmap ───────────────────────────────────────────

function RoadmapSection() {
  return (
    <>
      <div className="pb-7 px-9 text-center">
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '46px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#F2F2F2' }}>
          Build your AI<br />transformation roadmap
        </h2>
      </div>
      <div className="px-[42px] pb-10">
        <a href="#" className="block overflow-hidden rounded-[14px] group">
          <video
            className="w-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '370px' }}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </a>
      </div>
      <div className="px-[78px] pb-8 text-center">
        <p style={{ fontSize: '18px', lineHeight: '1.55', color: '#E8E8E8' }}>
          You'll finish this hands-on course with a personal AI Transformation Plan: your playbook for pilot proposals,
          data strategy and governance. Use it to help secure buy-in, guide rollout, and scale adoption responsibly.
        </p>
      </div>
      <div className="flex justify-center pb-14">
        <SolidButton label="Learn More" />
      </div>
    </>
  );
}

// ─── Section 5: Lime CTA Card ─────────────────────────────────────────────────

function LimeCTASection() {
  return (
    <div className="px-14 pb-12">
      <div className="rounded-[10px] px-8 py-12 text-center" style={{ background: '#D8F90A' }}>
        <h2
          className="mb-3"
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: '52px', lineHeight: '1.02', letterSpacing: '-0.02em', color: '#1E1E1E' }}
        >
          Ready to lead AI<br />at work?
        </h2>
        <p className="mb-8 px-4" style={{ fontSize: '18px', lineHeight: '1.5', color: '#1E1E1E' }}>
          Enroll now and be the leader your team has been waiting for.
        </p>
        <div className="flex justify-center">
          <PrimaryButton label="Enroll Now" />
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const socialIcons = [
  { Icon: Share2, label: 'Facebook' },
  { Icon: MessageCircle, label: 'Twitter' },
  { Icon: Heart, label: 'Instagram' },
  { Icon: Rss, label: 'Youtube' },
  { Icon: Globe, label: 'LinkedIn' },
  { Icon: Music2, label: 'TikTok' },
];

function Footer() {
  return (
    <footer className="text-white pt-12 px-10 text-center border-t" style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="pb-8 flex justify-center">
        <a href="#" className="text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors">
          Design Rocket
        </a>
      </div>
      <p className="pb-8" style={{ fontSize: '12px', color: '#83837D', lineHeight: '1.5' }}>
        Microsoft is a collaborator on this specific course. Microsoft does not endorse<br />
        Design Rocket generally or other Design Rocket products.
      </p>
      <div className="flex justify-center pb-8">
        <div className="h-px w-24 bg-white/20" />
      </div>
      <div className="flex justify-center gap-5 pb-5">
        {socialIcons.map(({ Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors text-white"
          >
            <Icon style={{ width: '18px', height: '18px' }} />
          </button>
        ))}
      </div>
      <p className="pb-4" style={{ fontSize: '10px', color: '#83837D', lineHeight: '1.6' }}>
        If you no longer want to receive updates on Design Rocket Certificates,<br />
        you can unsubscribe at any time by clicking "unsubscribe" below.
      </p>
      <div className="pb-3 space-x-2" style={{ fontSize: '12px' }}>
        <a href="#" className="text-[#E8E8E8] hover:underline">Support</a>
        <span style={{ color: '#8F8E88' }}>|</span>
        <a href="#" className="text-[#E8E8E8] hover:underline">Privacy</a>
        <span style={{ color: '#8F8E88' }}>|</span>
        <a href="#" className="text-[#E8E8E8] hover:underline">Terms</a>
        <span style={{ color: '#8F8E88' }}>|</span>
        <a href="#" className="text-[#E8E8E8] hover:underline">Unsubscribe</a>
      </div>
      <a href="#" className="text-white/80 hover:text-white inline-block" style={{ fontSize: '12px' }}>
        ©2026 Design Rocket, 660 4th Street #443, San Francisco, CA 94107 USA
      </a>
      <div className="pb-10" />
    </footer>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen py-10 px-4 font-sans" style={{ background: '#050505' }}>
      <div className="max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5">
        <div style={{ background: '#111111', color: '#F2F2F2' }}>
          <HeroSection />
          <IntroCopySection />
          <TransformSection />
          <RoadmapSection />
          <LimeCTASection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
