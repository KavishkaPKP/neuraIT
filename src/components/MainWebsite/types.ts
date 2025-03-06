export interface MainWebsiteProps {
    title?: string;
    description?: string;
}

export interface ApiResponse {
    success: boolean;
    data: any;
    error?: string;
}

export interface WebsiteConfig {
    theme: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
    };
    layout: {
        header: boolean;
        footer: boolean;
        sidebar: boolean;
    };
}