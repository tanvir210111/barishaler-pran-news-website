import { MediaItem } from "@/components/admin/MediaDetailsModal";

const STORAGE_KEY = "bait_media_library_items";

export const INITIAL_MEDIA_ITEMS: MediaItem[] = [];

export const getStoredMediaItems = (): MediaItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveMediaItem = (item: MediaItem) => {
  if (typeof window === "undefined") return;

  try {
    const current = getStoredMediaItems();
    const updated = [item, ...current.filter((i) => i.id !== item.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("bait_media_updated"));
  } catch (err) {
    console.error("Failed to save media item to localStorage:", err);
  }
};

export const deleteStoredMediaItem = (id: string) => {
  if (typeof window === "undefined") return;

  try {
    const current = getStoredMediaItems();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("bait_media_updated"));
  } catch (err) {
    console.error("Failed to delete media item from localStorage:", err);
  }
};
