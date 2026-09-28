import { useCallback, useRef, useState } from "react";
import { dakinisContactWhatsappUrl } from "../config/contact.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const STORAGE_KEY = "dakinis-landing-whatsapp-fab-position";
const DEFAULT_POS = { x: 92, y: 92 };
const DRAG_THRESHOLD_PX = 5;

function parsePosition(value) {
  if (!value) return { ...DEFAULT_POS };
  if (typeof value === "object" && typeof value.x === "number" && typeof value.y === "number") {
    return { x: Math.max(0, Math.min(100, value.x)), y: Math.max(0, Math.min(100, value.y)) };
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed.x === "number" && typeof parsed.y === "number") {
        return {
          x: Math.max(0, Math.min(100, parsed.x)),
          y: Math.max(0, Math.min(100, parsed.y))
        };
      }
    } catch {
      /* ignore */
    }
  }
  return { ...DEFAULT_POS };
}

function readPosition() {
  try {
    return parsePosition(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return { ...DEFAULT_POS };
  }
}

function writePosition(position) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(position));
  } catch {
    /* ignore */
  }
}

function preventDefaultClick(e) {
  e.preventDefault();
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="pointer-events-none h-6 w-6 sm:h-7 sm:w-7" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export default function DraggableWhatsappButton() {
  const { locale, t } = useLanguage();
  const href = dakinisContactWhatsappUrl(locale);
  const [pos, setPos] = useState(readPosition);
  const dragStartRef = useRef(null);
  const pointerOriginRef = useRef(null);
  const hasMovedRef = useRef(false);

  const savePosition = useCallback((x, y) => {
    writePosition({ x, y });
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault();
    hasMovedRef.current = false;
    pointerOriginRef.current = { x: e.clientX, y: e.clientY };
    dragStartRef.current = { x: e.clientX, y: e.clientY, posX: pos.x, posY: pos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (dragStartRef.current === null) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = e.clientX;
    const cy = e.clientY;
    const origin = pointerOriginRef.current;

    if (origin) {
      const dist = Math.hypot(cx - origin.x, cy - origin.y);
      if (dist > DRAG_THRESHOLD_PX) hasMovedRef.current = true;
    }

    const start = dragStartRef.current;
    const dx = ((cx - start.x) / w) * 100;
    const dy = ((cy - start.y) / h) * 100;
    const nx = Math.max(0, Math.min(100, start.posX + dx));
    const ny = Math.max(0, Math.min(100, start.posY + dy));
    setPos({ x: nx, y: ny });
    dragStartRef.current = { x: cx, y: cy, posX: nx, posY: ny };
  };

  const handlePointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    const start = dragStartRef.current;
    const finalX = start ? start.posX : pos.x;
    const finalY = start ? start.posY : pos.y;

    if (hasMovedRef.current) {
      setPos({ x: finalX, y: finalY });
      savePosition(finalX, finalY);
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }

    dragStartRef.current = null;
    pointerOriginRef.current = null;
  };

  const handlePointerCancel = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    if (dragStartRef.current && hasMovedRef.current) {
      const start = dragStartRef.current;
      setPos({ x: start.posX, y: start.posY });
      savePosition(start.posX, start.posY);
    }
    dragStartRef.current = null;
    pointerOriginRef.current = null;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex min-h-[44px] min-w-[44px] cursor-grab select-none touch-none items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-shadow duration-300 hover:scale-110 active:cursor-grabbing sm:p-4"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: "translate(-50%, -50%)",
        margin: 0,
        WebkitUserDrag: "none"
      }}
      aria-label={t.contacto.whatsapp}
      title={t.contacto.whatsapp}
      onClick={preventDefaultClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <WhatsappIcon />
    </a>
  );
}
