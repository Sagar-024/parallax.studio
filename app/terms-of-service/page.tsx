import { Container } from "../components/Shared/Container";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Container className="py-12 md:py-16 lg:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white mb-8 transition-colors duration-200"
        >
          <IconArrowLeft className="w-4 h-4" stroke={2} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Last updated: January 5, 2026
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              These Terms of Service constitute a legally binding agreement made
              between you and Parallax ("we," "us," or "our"), concerning your
              access to and use of our website and services. By accessing the
              website, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Parallax provides premium web development services including but
              not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>Custom website design and development</li>
              <li>UI/UX design services</li>
              <li>Brand strategy and consultation</li>
              <li>Web application development</li>
              <li>Technical consultation and support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Project Terms
            </h2>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 mt-6">
              Payment Terms
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
              <li>
                All prices quoted are in USD and are subject to the package
                selected
              </li>
              <li>
                A 50% deposit is required before project commencement for all
                packages
              </li>
              <li>
                The remaining 50% is due upon project completion and before
                final delivery
              </li>
              <li>
                Payment can be made via bank transfer, PayPal, or other agreed
                methods
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 mt-6">
              Timeline & Delivery
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
              <li>
                Project timelines are estimates and may vary based on project
                complexity and client responsiveness
              </li>
              <li>
                Delays caused by client feedback cycles will extend the delivery
                timeline accordingly
              </li>
              <li>
                We will notify you of any expected delays as soon as they are
                identified
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 mt-6">
              Revisions
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
              <li>
                Revision rounds are limited as per the selected package (1-2 for
                Basic, 3-5 for Premium)
              </li>
              <li>
                Additional revisions beyond the package limit will be charged at
                $30 per revision round
              </li>
              <li>
                Revision requests must be consolidated and submitted in writing
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Upon full payment, you will own the final deliverables. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                We retain the right to showcase the project in our portfolio
              </li>
              <li>
                Any third-party assets (fonts, stock images, libraries) remain
                subject to their original licenses
              </li>
              <li>
                We retain ownership of our proprietary tools, frameworks, and
                methodologies
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Warranties and Disclaimers
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
              <li>Services will be performed in a professional manner</li>
              <li>
                Deliverables will be free from defects in workmanship for 30
                days after delivery
              </li>
              <li>
                We will fix any bugs or issues discovered within this warranty
                period at no additional cost
              </li>
            </ul>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              However, we do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>The website will be completely error-free</li>
              <li>
                The website will achieve specific business results or rankings
              </li>
              <li>
                Third-party services or integrations will remain compatible
                indefinitely
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              To the maximum extent permitted by law, Parallax shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Cancellation & Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                You may cancel the project at any time before work begins for a
                full refund
              </li>
              <li>
                Once work has commenced, the deposit is non-refundable, but you
                will receive all work completed up to the cancellation point
              </li>
              <li>
                We reserve the right to cancel projects that violate our terms
                or ethical standards
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to the website. Your
              continued use of our services after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Email:{" "}
              <a
                href="mailto:sagarkharal024@gmail.com"
                className="text-neutral-900 dark:text-white hover:underline"
              >
                sagarkharal024@gmail.com
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
