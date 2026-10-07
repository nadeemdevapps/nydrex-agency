import { useRouter } from "@tanstack/react-router";

export function JsonLd({ data }: { data: unknown }) {
  const router = useRouter();
  return (
    <script
      type="application/ld+json"
      nonce={router.options.ssr?.nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
