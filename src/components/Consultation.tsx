import { Section, SectionHeading } from "@/components/Section";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/data/site";

export function Consultation() {
  return (
    <Section id="consultation" tone="navy">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex h-full flex-col lg:col-span-5">
          <SectionHeading
            light
            eyebrow="CONSULTATION"
            title="상담 신청"
            description="사건 내용과 연락처를 남겨 주시면 확인 후 안내드립니다. 제출된 내용은 상담 응대 목적으로만 사용됩니다."
          />
          <p className="mt-8 text-sm leading-7 text-slate-400">
            전화: {site.phoneDisplay}
            <br />
            이메일: {site.email}
          </p>
          <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 lg:mt-auto">
            {["빠른 대응", "초기 상담 무료", "담당 변호사 직접 검토"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white">
                <span className="h-px w-4 bg-white/40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>
      </div>
    </Section>
  );
}
