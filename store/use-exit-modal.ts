import { create } from "zustand";

interface ExitModal {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useExitModal = create<ExitModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
