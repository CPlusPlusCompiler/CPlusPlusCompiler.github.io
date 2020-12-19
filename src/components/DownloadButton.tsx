import { Button } from "@material-ui/core";
import React from "react";
import { Assets } from "../data-objects/Repository";

export default function DownloadButton(props: Assets | null) {
    if (props != null)
        return (
            <Button
                href={props.browser_download_url}
                variant="outlined"
                color="secondary">
                Download
            </Button>)
} 