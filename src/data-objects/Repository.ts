export interface RepositoryResponse {
    id: number,
    name: string,
    description: string | null,
    html_url: string,
    fork: boolean,
    releases_url: string,
}


export interface Repository {
    id: number,
    name: string,
    description: string | null,
    html_url: string,
    releases_url: string
}


export interface ReleaseResponse {
    id: number,
    name: string,
    tag_name: string,
    assets: Assets[],
}


export interface Assets {
    size: number,
    download_count: number,
    created_at: string,
    updated_at: string,
    browser_download_url: string,
}