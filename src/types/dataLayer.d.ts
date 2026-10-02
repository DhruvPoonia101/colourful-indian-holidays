export {};

declare global {
  interface Window {
    /**
     * GTM's own dataLayer array — GTM initializes this itself when it
     * loads (window.dataLayer = window.dataLayer || []), so this is a
     * type declaration only, not something this codebase creates. Push
     * plain objects with an `event` key; set up a GTM "Custom Event"
     * trigger matching that key to react to it.
     */
    dataLayer: Record<string, unknown>[];
  }
}
