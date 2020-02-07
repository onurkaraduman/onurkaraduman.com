export interface Blogconfig {
    header: Header;
    footer: Footer;
    theme: Theme;
    articleConfig: ArticleConfig;
}

export interface Header {
    title: String;
    description: String;
    githubLink: String;
}

export interface Footer {
    info: String;
    developer: String;
    developerGithupProfileLink: String;
}

export interface Theme {
    name: String;
}

export interface ArticleConfig {
    articlePerPage: number;
}
