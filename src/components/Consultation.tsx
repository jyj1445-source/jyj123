import { Check } from "lucide-react";
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
          <ul className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 lg:mt-auto">
            {["빠른 대응", "초기 상담 무료", "담당 변호사 직접 검토"].map((item) => (
              <li
                key={item}
                className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                <Check className="h-4 w-4 text-white" aria-hidden />
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
