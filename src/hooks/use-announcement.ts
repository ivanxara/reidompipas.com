import { useCallback, useEffect, useState } from "react";

const EVENT_NAME = "rdp-announcement-change";

let dismissed = false;

export function useAnnouncement() {
  const [visible, setVisible] = useState(!dismissed);

  useEffect(() => {
    const onChange = () => setVisible(!dismissed);
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const dismiss = useCallback(() => {
    dismissed = true;
    window.dispatchEvent(new Event(EVENT_NAME));
  }, []);

  return { visible, dismiss };
}

// On mobile the message can wrap to multiple lines. Keep this in sync with the
// navbar offset so the fixed navigation never overlaps the announcement.
export const ANNOUNCEMENT_HEIGHT_CLASS = "h-16 sm:h-10";
export const ANNOUNCEMENT_TOP_OFFSET_CLASS = "top-16 sm:top-10";
