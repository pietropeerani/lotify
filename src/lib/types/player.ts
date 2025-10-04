declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
    _ytApiReady?: boolean;
    _ytApiCallbacks?: (() => void)[];
  }
}

export interface PlayerPros {
  externalUrl: string;
}