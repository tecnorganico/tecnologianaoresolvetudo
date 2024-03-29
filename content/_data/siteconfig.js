require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "R. Ramires",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "https://tecnologianaoresolvetudo.netlify.app",
    // Profile image for left sidebar
    image: "/assets/images/sidebar_profile.jpg",
    // Image alt text for left sidebar
    imageAlt: "R. Ramires",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Rafael Ramires",
    // Site description, shown below site image (optional)
    description: "Esse site é um jardim digital de R. Ramires. Um jardim pra pensações, crônicas e constatações de realidades.",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/opengraph.jpg",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "tecnorganico",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "ramiresbaptista",
    // Twitter ID  (optional, remove it not needed), used for link in the left sidebar, and for OpenGraph sharing information
    socialTwitter: "tecnorganico",
    // YouTube ID/Channel  (optional, remove it not needed), used for link in the left sidebar
    socialYouTube: "",
    // Google Analytics ID  (optional, remove it not needed), used for... well, Google Analytics
    googleAnalytics: "",
    // Algolia-powered search  (optional, remove it not needed),
    // See: https://github.com/algolia/algoliasearch-netlify
    algoliaSearch: {
        // When enabled shows the search bar in the UI
        enabled: true,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        appId: process.env.ALGOLIA_APP_ID,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        siteId: process.env.ALGOLIA_SITE_ID,
        // Assuming that you deploy your "main" branch. Otherwise you
        // can either override or configure this (using process.env.HEAD)
        branch: "main"
    }
};
