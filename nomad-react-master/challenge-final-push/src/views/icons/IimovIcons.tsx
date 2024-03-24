import styled from "styled-components";

export function SearchIcon({onClick}: IconProps) {
  return (
    <IconSvg
      data-slot="icon"
      fill="black"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
      ></path>
    </IconSvg>
  );
}

export function BackIcon({onClick}: IconProps) {
  return (
    <IconSvg
      data-slot="icon"
      fill="black"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
      ></path>
    </IconSvg>
  );
}

interface IconProps {
  onClick?: () => void;
}

const IconSvg = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;