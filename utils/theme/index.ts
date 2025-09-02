import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "0px",
      md: "767px",
      lg: "1023px",
      xl: "1235px",
      "2xl" : "1500px",
    },
    tokens: {
      colors: {
        brand: {
          primary: {
            core: {},
            "on-core": {},
            text: {},
            transparent: {},
          },
          secondary: {
            core: {},
            "on-core": {},
            neutral: {},
            background: {},
          },
          background: {
            DEFAULT: { value: "#EFEFEF10" },
            white10: { value: "#EFEFEF10" },
            white20: { value: "#EFEFEF20" },
            white30: { value: "#EFEFEF30" },
            white40: { value: "#EFEFEF40" },
            white50: { value: "#EFEFEF50" },
            white60: { value: "#EFEFEF60" },
            white70: { value: "#EFEFEF70" },
          },
        },
      },
    },
    // keyframes : {
    //   spin: {
    //     from: {},
    //     to: {},
    //   }
    // }
  },
});

export const system = createSystem(defaultConfig, config);