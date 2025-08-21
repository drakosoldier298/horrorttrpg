import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "horror.daedreus.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          //  page background
          light: "#1E1E1E", 
          //borders
          lightgray: "#4c75d2",
          //graph links, heavier borders
          gray: "#6e7ca3",
          //Text
          darkgray: "#ffffff",
          //header text and icons
          dark: "#5A8D76",
          //link colour, current graph node
          secondary: "rgb(71, 149, 250)",
          //hover states and visited graph nodes
          tertiary: "rgb(160, 113, 214)",
          highlight: "rgb(73, 84, 133)",
          textHighlight: "rgb(30, 84, 155)",
        },
        darkMode: {
          //  page background
          light: "rgb(28, 31, 32)", 
          //borders
          lightgray: "rgb(11, 146, 230)",
          //graph links, heavier borders
          gray: "#rgb(69, 247, 247)",
          //Text
          darkgray: "rgb(16, 129, 194)",
          //header text and icons
          dark: "rgb(52, 191, 209)",
          //link colour, current graph node
          secondary: "rgb(137, 180, 245)",
          //hover states and visited graph nodes
          tertiary: "rgb(39, 245, 217)",
          highlight: "rgb(40, 43, 43)",
          textHighlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
