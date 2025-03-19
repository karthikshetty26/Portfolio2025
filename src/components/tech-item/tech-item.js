import Image from 'next/image';
import STYLECSS from './TechItem.module.css';

/**
 * Reusable component for displaying technology items with logos
 * @param {Object} props - Component props
 * @param {string} props.name - Technology name
 * @param {string} [props.logoPath] - Optional custom logo path
 * @param {string} [props.className] - Optional additional CSS class
 */

export default function TechItem({ name, logoPath, className = '' }) {
  // Default logo path based on technology name if not provided
  const logo = logoPath || `/images/tech-item-logo/${name.toLowerCase().replace(/\s+/g, '-')}-logo.svg`;

  return (
    <li className={`${STYLECSS.tech_item} ${className}`}>
      <span>{name}</span>
      <Image
        src={logo}
        alt={`${name} logo`}
        width={15}
        height={15}
        className={STYLECSS.tech_logo}
      />
    </li>
  );
}