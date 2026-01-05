import { Container } from "../components/Shared/Container";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Last updated: January 5, 2026
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Welcome to Parallax. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we handle your personal data when you visit our website
              and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                <strong>Identity Data:</strong> includes first name, last name,
                username or similar identifier.
              </li>
              <li>
                <strong>Contact Data:</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> includes internet protocol (IP)
                address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform.
              </li>
              <li>
                <strong>Usage Data:</strong> includes information about how you
                use our website and services.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>
                To allow you to participate in interactive features when you
                choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our services
              </li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We use Cal.com for booking appointments. When you book a meeting,
              your information is handled according to Cal.com's privacy policy.
              We recommend reviewing their privacy policy to understand how they
              handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way. We limit access to your personal data to
              those who have a genuine business need to know it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Under data protection laws, you have rights including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                <strong>Right to access</strong> – You have the right to request
                copies of your personal data.
              </li>
              <li>
                <strong>Right to rectification</strong> – You have the right to
                request that we correct any information you believe is
                inaccurate or incomplete.
              </li>
              <li>
                <strong>Right to erasure</strong> – You have the right to
                request that we erase your personal data, under certain
                conditions.
              </li>
              <li>
                <strong>Right to restrict processing</strong> – You have the
                right to request that we restrict the processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to data portability</strong> – You have the right
                to request that we transfer the data that we have collected to
                another organization, or directly to you, under certain
                conditions.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
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
