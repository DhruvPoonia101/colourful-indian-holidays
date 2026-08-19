import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/LegalPageLayout";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";

const pagePath = "/privacy-policy";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses and protects your personal information.`,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  robots: { index: true, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-base font-semibold text-ink sm:text-lg">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft sm:text-base">
      {children}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="August 2026">
      <section>
        <H2>Copyright Notice</H2>
        <UL>
          <li>
            This site is controlled and operated by {SITE_NAME} from India and complies with
            Indian &amp; International Copyright law. It is intended to be accessed by Indian
            and international users. All visits to this site are governed by Indian &amp;
            International Copyright law.
          </li>
          <li>
            No material, graphics, sounds, animation, design, interactive ideas, or conceptual
            ideas from this site may be copied, uploaded, posted, modified or distributed in any
            way, except that you may download one copy of the materials on any single computer
            for your personal, home use only, provided you keep intact all copyright and other
            proprietary notices. Use of any such material on any other website or computer
            environment is prohibited.
          </li>
          <li>
            The {SITE_NAME} name and logo are trademarks of {SITE_NAME}. Any design or artwork
            is a trademark of {SITE_NAME}. Other trademarks appearing on this site are owned by
            their relevant proprietors, and all rights relating to them are reserved.
          </li>
          <li>
            While {SITE_NAME} uses reasonable efforts to include accurate and up-to-date
            information on this site, {SITE_NAME} makes no warranties or representations as to
            its accuracy, and assumes no liability for any errors or omissions in the site&apos;s
            content. All information is subject to change without notice.
          </li>
          <li>
            {SITE_NAME} does not tolerate recruiters or headhunters canvassing employee or
            director information via this website, or contacting them via social media, phone,
            or email. No recruitment company or offshore development agency should contact{" "}
            {SITE_NAME} by directly calling or emailing us — such contact will not be answered
            and may be reported as spam.
          </li>
        </UL>
      </section>

      <section>
        <H2>Privacy Policy</H2>
        <P>
          This Privacy Policy governs the manner in which {SITE_NAME} collects, uses, maintains
          and discloses information collected from users (each, a &quot;User&quot;) of the{" "}
          {SITE_URL} website (the &quot;Site&quot;). This policy applies to the Site and all
          products and services offered by {SITE_NAME}.
        </P>
      </section>

      <section>
        <H3>Personal Identification Information</H3>
        <P>
          We may collect personal identification information from Users in a variety of ways,
          including when Users visit our Site, subscribe to a newsletter, fill out a form, or
          engage in other activities, services, features or resources we make available on the
          Site. Users may be asked for their name, email address and phone number, as
          appropriate. We only collect this information when a User voluntarily submits it —
          Users can always decline to provide it, though doing so may prevent them from engaging
          in certain Site activities.
        </P>
      </section>

      <section>
        <H3>Non-Personal Identification Information</H3>
        <P>
          We may collect non-personal identification information whenever Users interact with
          our Site, including browser name, computer type, and technical details about the
          User&apos;s means of connection to our Site, such as operating system and internet
          service provider.
        </P>
      </section>

      <section>
        <H3>Web Browser Cookies</H3>
        <P>
          Our Site may use cookies to enhance the User experience. Users can set their browser
          to refuse cookies or alert them when cookies are being sent — note that some parts of
          the Site may not function properly if cookies are disabled.
        </P>
      </section>

      <section>
        <H3>How We Use Collected Information</H3>
        <P>{SITE_NAME} collects and uses personal information for the following purposes:</P>
        <UL>
          <li>
            <strong className="text-ink">To personalise user experience</strong> — we may use
            aggregate information to understand how Users as a group use our Site.
          </li>
          <li>
            <strong className="text-ink">To improve our Site</strong> — based on the information
            and feedback we receive from you.
          </li>
          <li>
            <strong className="text-ink">To improve customer service</strong> — your information
            helps us respond more effectively to your requests and support needs.
          </li>
          <li>
            <strong className="text-ink">To administer content, promotions or surveys</strong> —
            and to send Users information about topics we believe will interest them, where
            they&apos;ve agreed to receive it.
          </li>
          <li>
            <strong className="text-ink">To send periodic emails</strong> — the email address you
            provide is used only to respond to your enquiries or requests. If you opt in to our
            mailing list, you may receive company news or related updates; every email includes
            unsubscribe instructions.
          </li>
        </UL>
      </section>

      <section>
        <H3>How We Protect Your Information</H3>
        <P>
          We adopt appropriate data collection, storage and processing practices, along with
          security measures, to protect against unauthorised access, alteration, disclosure or
          destruction of your personal information and any data stored on our Site.
        </P>
      </section>

      <section>
        <H3>Sharing Your Personal Information</H3>
        <P>
          We do not sell, trade or rent Users&apos; personal identification information to
          others. We may share generic, aggregated demographic information not linked to any
          personal identification with business partners, trusted affiliates and advertisers for
          the purposes outlined above. We may also use third-party service providers to help
          operate our business and Site — for example, sending newsletters or surveys — and may
          share your information with them for those limited purposes, provided you&apos;ve given
          us permission to do so.
        </P>
      </section>

      <section>
        <H3>Third-Party Websites</H3>
        <P>
          Our Site may contain links to the sites and services of partners, suppliers,
          advertisers, sponsors, licensors and other third parties. We do not control the
          content or links on these sites and are not responsible for their practices. These
          sites may have their own privacy and customer service policies, and your interaction
          with them is governed by their own terms.
        </P>
      </section>

      <section>
        <H3>Changes to This Privacy Policy</H3>
        <P>
          {SITE_NAME} may update this policy at any time. We encourage Users to check this page
          periodically for changes. Your continued use of the Site following any posted changes
          constitutes acceptance of those changes.
        </P>
      </section>

      <section>
        <H3>Your Acceptance of These Terms</H3>
        <P>
          By using this Site, you signify your acceptance of this policy. If you do not agree
          with it, please do not use our Site.
        </P>
      </section>

      <section>
        <H3>Contacting Us</H3>
        <P>
          If you have questions about this Privacy Policy or our handling of your information,
          contact us at{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-maroon underline">
            {BUSINESS.email}
          </a>{" "}
          or {BUSINESS.telephone}.
        </P>
      </section>
    </LegalPageLayout>
  );
}
