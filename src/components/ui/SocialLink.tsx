import Link from "next/link";

type SocialLinkProps = {
  href: string;
  className?: string;
  iconName: string;
}

const SocialLink = ({href, iconName, className}:SocialLinkProps) => {
  return <Link href={href} target="_blank" className={className} aria-label={iconName.charAt(0).toUpperCase() + iconName.slice(1)}>
    <i className={iconName} aria-hidden="true"></i>
  </Link>
}

export default SocialLink;