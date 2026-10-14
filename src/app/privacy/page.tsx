import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${site.name} 개인정보처리방침입니다.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 lg:pt-32">
          <p className="text-xs tracking-[0.18em] text-slate-500">POLICY</p>
          <h1 className="mt-3 text-3xl font-semibold text-navy">개인정보처리방침</h1>
          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-navy">1. 수집 항목</h2>
              <p className="mt-3">
                상담 신청 시 이름, 연락처, 이메일, 상담 분야, 상담 내용과 개인정보 수집 동의 여부를 수집합니다. 위 항목 외에는 수집하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">2. 이용 목적</h2>
              <p className="mt-3">
                수집된 정보는 상담 일정 안내 및 응대 목적으로 사용합니다. 상담 응대 외의 목적으로는 이용하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">3. 보유 기간</h2>
              <p className="mt-3">
                상담 신청 정보는 상담 목적이 달성될 때까지 보유하며, 목적이 달성되면 지체 없이 파기합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">4. 문의</h2>
              <p className="mt-3">
                개인정보 관련 문의: {site.attorneyName} / {site.phoneDisplay} / {site.email}
              </p>
            </section>
          </div>
          <Link href="/" className="mt-12 inline-flex min-h-11 items-center text-sm text-navy">
            홈으로 돌아가기
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
