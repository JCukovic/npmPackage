import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        nmGray: {
          css: {
            "--tw-prose-body": theme("colors.nmGray.700"),
            "--tw-prose-headings": theme("colors.nmGray.900"),
            "--tw-prose-lead": theme("colors.nmGray.500"),
            "--tw-prose-links": theme("colors.nmGray.700"),
            "--tw-prose-bold": theme("colors.nmGray.800"),
            "--tw-prose-counters": theme("colors.nmGray.500"),
            "--tw-prose-bullets": theme("colors.nmGray.300"),
            "--tw-prose-hr": theme("colors.nmGray.300"),
            "--tw-prose-quotes": theme("colors.nmGray.700"),
            "--tw-prose-quote-borders": theme("colors.nmGray.300"),
            "--tw-prose-captions": theme("colors.nmGray.500"),
            "--tw-prose-code": theme("colors.nmGray.800"),
            "--tw-prose-pre-code": theme("colors.nmGray.100"),
            "--tw-prose-pre-bg": theme("colors.nmGray.800"),
            "--tw-prose-th-borders": theme("colors.nmGray.300"),
            "--tw-prose-td-borders": theme("colors.nmGray.300"),
            "--tw-prose-invert-body": theme("colors.nmGray.100"),
            "--tw-prose-invert-headings": theme("colors.nmGray.50"),
            "--tw-prose-invert-lead": theme("colors.nmGray.300"),
            "--tw-prose-invert-links": theme("colors.nmGray.50"),
            "--tw-prose-invert-bold": theme("colors.nmGray.50"),
            "--tw-prose-invert-counters": theme("colors.nmGray.300"),
            "--tw-prose-invert-bullets": theme("colors.nmGray.500"),
            "--tw-prose-invert-hr": theme("colors.nmGray.700"),
            "--tw-prose-invert-quotes": theme("colors.nmGray.50"),
            "--tw-prose-invert-quote-borders": theme("colors.nmGray.700"),
            "--tw-prose-invert-captions": theme("colors.nmGray.300"),
            "--tw-prose-invert-code": theme("colors.nmGray.50"),
            "--tw-prose-invert-pre-code": theme("colors.nmGray.300"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.nmGray.300"),
            "--tw-prose-invert-td-borders": theme("colors.nmGray.500"),
          },
        },
      }),
      fontSize: { "2xs": "0.625rem", "44": "2.75rem" },
      padding: {
        "13": "3.25rem",
        "21": "5.25rem",
        "22": "5.5rem",
      },
      colors: {
        nm: {
          50: "#ffece5",
          100: "#ffddd1",
          200: "#ffbaa3",
          300: "#ff9470",
          400: "#ff7142",
          500: "#ff5014",
          600: "#db3700",
          700: "#a32900",
          800: "#701c00",
          900: "#380e00",
          950: "#190600",
        },
        betaCom: "#dd5535",
        nmGray: {
          50: "#f9fafb",
          100: "#f6f8f9",
          300: "#e1e7ea",
          500: "#cbd5db",
          700: "#688697",
          800: "#557a85",
          900: "#232d33",
        },
        success: {
          light: "#F0FDF4",
          strong: "#14532D",
        },
        error: {
          light: "#FEF2F2",
          strong: "#B91C1C",
        },
      },
      inset: {
        "76": "19rem",
        "calc-halfvw-minus-half": "calc(50% - 50vw)",
      },
      width: {
        "22": "5.5rem",
        "26": "6.5rem",
        "31": "7.75rem",
        "37": "9.25rem",
        "46": "11.5rem",
        "51": "12.75rem",
        "68": "17rem",
        "70": "17.5rem",
        "74": "18.5rem",
        "75": "18.75rem",
        "78": "19.5rem",
        "82": "20.5rem",
        "86": "21.5rem",
        "105": "26.25rem",
        "120": "30rem",
        "125": "31.25rem",
        "128": "32rem",
        "156": "39rem",
        "160": "40rem",
        "175": "43.75rem",
      },
      minWidth: {
        "70": "17.5rem",
        "78": "19.5rem",
        "121": "30.25rem",
        "156": "39rem",
      },
      maxWidth: {
        "115": "28.75rem",
        "121": "30.25rem",
        "123": "30.75rem",
        "170": "42.5rem",
        "screen-1440": "1440px",
        "screen-1680": "1680px",
      },
      backgroundImage: {
        "diagonal-line":
          "linear-gradient(to bottom right, white 49.5%, rgb(203 213 219) 49.5%, rgb(203 213 219) 51.5%, white 51.5%)",
        "gray-mist":
          "linear-gradient(68deg, #688697 1.4%, rgba(104, 134, 151, 0.95) 55.48%, rgba(104, 134, 151, 0.50) 126.66%)",
      },
      height: {
        "54": "13.5rem",
        "74": "18.5rem",
        "82": "20.5rem",
        "109": "27.25rem",
        "114": "28.5rem",
        "128": "32rem",
      },
      minHeight: {
        "156": "39rem",
      },
      maxHeight: {
        "22": "5.5rem",
        "86": "21.5rem",
        "91": "22.75rem",
      },
      lineHeight: {
        "16": "3.25rem",
      },
      backdropBlur: {
        "20": "20px",
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".underline-from-font": {
          "text-underline-position": "from-font",
        },
        ".decoration-skip-ink-none": {
          "text-decoration-skip-ink": "none",
        },
      });
    }),
  ],
};
export default config;
