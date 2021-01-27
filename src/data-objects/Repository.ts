import { Description } from "@material-ui/icons";

export function errorResponse(errorMessage: string): RepositoryResponse {
    return {
        id: -1,
        html_url: "",
        name: "",
        fork: false,
        releases_url: "",
        description: null,
        errorMessage: errorMessage
    }
}

export interface RepositoryResponse {
    id: number,
    name: string,
    description: string | null,
    html_url: string,
    fork: boolean,
    releases_url: string,
    errorMessage: string | null

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