import { useTheme } from 'next-themes'
import Image from 'next/image'
import * as React from 'react'

type IconProps = React.ComponentProps<'svg'>

export function ViewIcon(props: IconProps) {
  return (
    <svg
      width="16px"
      height="15"
      viewBox="0 -32 576 576"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DonwloadIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.410156"
        y="12.4519"
        width="15.4477"
        height="2.37657"
        rx="0.5"
        fill="currentColor"
      />
      <path
        d="M7.00946 10.6057C7.30236 10.8986 7.77723 10.8986 8.07012 10.6057L12.8431 5.83273C13.136 5.53983 13.136 5.06496 12.8431 4.77207C12.5502 4.47917 12.0753 4.47917 11.7824 4.77207L7.53979 9.01471L3.29715 4.77207C3.00426 4.47917 2.52939 4.47917 2.23649 4.77207C1.9436 5.06496 1.9436 5.53983 2.23649 5.83273L7.00946 10.6057ZM6.78979 0.569092L6.78979 10.0754H8.28979V0.569092H6.78979Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartFilledIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2.513a1 1 0 011 1V11.5a1 1 0 01-1 1H5.37a1 1 0 00-.65.24l-1.57 1.345a1 1 0 01-1.65-.76V3.514a1 1 0 011-1h11z"
        stroke="currentColor"
      />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 4.5L6.35355 7.64645C6.15829 7.84171 6.15829 8.15829 6.35355 8.35355L9.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 11.5l3.146-3.146a.5.5 0 000-.708L6.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EditIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.333 2A1.886 1.886 0 0114 4.667l-9 9-3.667 1 1-3.667 9-9z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z"
        stroke="currentColor"
        strokeWidth={1.41667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BoldIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 2.667h5.333a2.667 2.667 0 110 5.333H4V2.667z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8h6a2.667 2.667 0 010 5.333H4V8z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ItalicIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.667 2.667h-6M9.333 13.333h-6M10 2.667L6 13.333"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ListIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 4H14M5.333 8H14M5.333 12H14M2 4h.007M2 8h.007M2 12h.007"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LinkIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.667 8.667a3.333 3.333 0 005.026.36l2-2A3.334 3.334 0 008.98 2.313l-1.147 1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 7l-11 11M6.5 7l11 11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.627 7.449c.23.331.23.77 0 1.102C13.529 10.131 11.554 12.5 8 12.5s-5.53-2.368-6.627-3.949a.966.966 0 010-1.102C2.471 5.869 4.446 3.5 8 3.5s5.53 2.369 6.627 3.949z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
    </svg>
  )
}

export function EyeClosedIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.447 4.435C3.006 5.27 2.032 6.5 1.373 7.448a.967.967 0 000 1.103C2.471 10.131 4.446 12.5 8 12.5c1.429 0 2.602-.383 3.566-.943m1.65-1.286c.09-.09.178-.18.262-.271.463-.498.84-1.004 1.148-1.448a.967.967 0 00.001-1.103C13.529 5.869 11.554 3.5 8 3.5c-.511 0-.99.049-1.438.138"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8a2 2 0 003.41 1.418L6.586 6.586A1.994 1.994 0 006 8z"
        fill="currentColor"
      />
      <path
        d="M13.5 13.5l-11-11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DotsIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 11-2 0 1 1 0 012 0zM14 8a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MarkdownIcon(props: IconProps) {
  return (
    <svg
      width={26}
      height={16}
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_33_726)">
        <path
          d="M24.125.625H1.875c-.69 0-1.25.56-1.25 1.25v12.25c0 .69.56 1.25 1.25 1.25h22.25c.69 0 1.25-.56 1.25-1.25V1.875c0-.69-.56-1.25-1.25-1.25z"
          stroke="currentColor"
          strokeWidth={1.29808}
        />
        <path
          d="M3.75 12.25v-8.5h2.5l2.5 3.125 2.5-3.125h2.5v8.5h-2.5V7.375L8.75 10.5l-2.5-3.125v4.875h-2.5zm15.625 0l-3.75-4.125h2.5V3.75h2.5v4.375h2.5l-3.75 4.125z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_726">
          <path fill="#fff" d="M0 0H26V16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function CheilLogo({
  className,
  w = 363,
  h = 115,
}: {
  className: string
  w: number
  h: number | string
}) {
  const { theme } = useTheme()
  const isLigth = theme === 'light'
  const logo = `/LOGO_CHEIL_${isLigth ? 'dark' : 'light'}.svg`
  return (
    <Image
      src={logo}
      alt="cheil logo"
      width={w}
      height={h}
      className={className}
    />
  )
  return <h1 className={className}>Cheil</h1>
}

export function GithubLogo(props: IconProps) {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 0C3.806 0 0 3.668 0 8.192c0 3.62 2.436 6.69 5.813 7.774.425.075.58-.178.58-.395 0-.195-.007-.84-.01-1.525-2.366.496-2.865-.966-2.865-.966-.386-.947-.943-1.199-.943-1.199-.772-.508.058-.498.058-.498.853.058 1.303.844 1.303.844.758 1.253 1.988.89 2.473.681.077-.53.297-.89.54-1.095-1.888-.207-3.873-.91-3.873-4.049 0-.894.332-1.625.876-2.199-.088-.206-.38-1.04.082-2.168 0 0 .714-.22 2.339.84A8.435 8.435 0 018.5 3.961c.722.004 1.45.095 2.13.276 1.622-1.06 2.335-.84 2.335-.84.462 1.129.171 1.962.083 2.168.545.574.875 1.305.875 2.2 0 3.146-1.989 3.838-3.882 4.041.305.255.577.753.577 1.517 0 1.096-.01 1.979-.01 2.248 0 .218.153.474.584.393C14.568 14.88 17 11.81 17 8.192 17 3.668 13.194 0 8.5 0zM3.184 11.67c-.02.04-.086.053-.146.025-.062-.027-.096-.082-.076-.123.018-.042.084-.054.146-.026.062.027.097.083.076.124zm.418.36c-.04.036-.12.019-.174-.038-.055-.058-.066-.134-.025-.17.042-.037.119-.02.175.037.055.058.066.134.024.17zm.287.46c-.053.034-.138.002-.19-.071-.052-.073-.052-.16 0-.196.054-.035.137-.003.19.07.053.073.053.16 0 .196zm.485.532c-.047.05-.146.036-.219-.031-.074-.066-.095-.16-.048-.21.047-.05.147-.035.22.032.074.066.096.16.047.21zm.627.18c-.021.064-.117.093-.213.066-.096-.028-.159-.103-.14-.168.02-.065.117-.095.213-.066.096.028.16.103.14.168zm.713.076c.002.068-.08.124-.18.125-.102.002-.184-.052-.185-.119 0-.068.08-.124.181-.125.101-.002.184.052.184.12zm.701-.026c.012.066-.058.134-.159.152-.098.017-.19-.023-.202-.089-.012-.067.06-.135.158-.152.1-.017.19.022.203.09z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
