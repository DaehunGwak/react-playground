import Link from "next/link";

export function OutlineLinkButton({
  href,
  text,
  fontSize = "1rem",
}: Readonly<{
  href: string,
  text: string,
  fontSize?: string,
}>) {
  return (
    <Link href={href} style={{fontSize}}>
      <div>
        {text}
      </div>
    </Link>
  )
}
