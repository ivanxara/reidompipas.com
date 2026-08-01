import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "rdp-announcement-agosto-2026-dismissed";
const EVENT_NAME = "rdp-announcement-change";

export function useAnnouncement() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(STORAGE_KEY) !== "1");

    const onChange = () => {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    };

    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "1");
    window.dispatchEvent(new Event(EVENT_NAME));
  }, []);

  return { visible, dismiss };
}

export const ANNOUNCEMENT_HEIGHT_CLASS = "h-9 sm:h-10";
export const ANNOUNCEMENT_TOP_OFFSET_CLASS = "top-9 sm:top-10";
