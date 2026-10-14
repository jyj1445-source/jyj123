import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${site.name} 홈페이지 이용약관입니다.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 lg:pt-32">
          <p className="text-xs tracking-[0.18em] text-slate-500">POLICY</p>
          <h1 className="mt-3 text-3xl font-semibold text-navy">이용약관</h1>
          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-navy">1. 목적</h2>
              <p className="mt-3">
                이 약관은 {site.name} 홈페이지 이용과 관련된 기본 사항을 안내하기 위한 것입니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">2. 정보의 성격</h2>
              <p className="mt-3">
                본 사이트에 게시된 내용은 일반적인 안내이며, 개별 사건에 대한 법률 자문 또는 법률 의견을 대체하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">3. 상담 신청</h2>
              <p className="mt-3">
                상담 신청을 보내면 사무소가 내용을 확인한 뒤 전화 또는 이메일로 연락합니다. 상담 일정과 방법은 그때 정합니다. 신청만으로 수임계약이 성립하지는 않으며, 수임 여부와 비용은 따로 안내한 뒤 협의합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">4. 수임계약</h2>
              <p className="mt-3">
                홈페이지를 이용하거나 상담을 신청한 것만으로 변호사와 의뢰인 관계가 성립하지 않습니다. 수임은 별도의 계약으로 정합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">5. 저작권</h2>
              <p className="mt-3">
                사이트에 게시된 글, 사진, 로고의 권리는 {site.name}에 있습니다. 사무소의 허락 없이 복제하거나 배포할 수 없습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">6. 이용자의 의무</h2>
              <p className="mt-3">
                이용자는 상담 신청에 사실과 다른 정보나 다른 사람의 정보를 입력하지 않으며, 사이트 운영을 방해하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">7. 개인정보</h2>
              <p className="mt-3">
                개인정보의 수집과 보관은 <Link href="/privacy" className="text-navy underline underline-offset-4">개인정보처리방침</Link>을 따릅니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">8. 책임 제한</h2>
              <p className="mt-3">
                게시된 내용은 일반적인 안내이며, 특정 결과나 승소를 약속하지 않습니다. 상담 사례는 다른 사건의 결과를 보장하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">9. 약관 변경</h2>
              <p className="mt-3">
                약관 내용을 바꾸면 이 페이지에 게시합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">10. 준거법</h2>
              <p className="mt-3">
                이 약관은 대한민국 법령에 따르며, 홈페이지 이용과 관련한 분쟁의 관할 법원은 울산지방법원으로 합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">11. 문의</h2>
              <p className="mt-3">
                약관 관련 문의: {site.attorneyName} / {site.phoneDisplay} / {site.email}
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
