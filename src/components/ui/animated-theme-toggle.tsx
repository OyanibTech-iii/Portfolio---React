import { cn } from "@/lib/utils";
import { useState, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "./button";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { MoonIcon, SunIcon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "system" | "light" | "dark";

const ThemeOption = ({label, icon, selected, onSelect }: { value: Theme; label: string; icon: ReactNode; selected: boolean; onSelect: () => void }) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm transition-colors",
        selected
          ? "bg-gray-200 text-foreground dark:bg-neutral-800 dark:text-white"
          : "text-neutral-600 hover:bg-gray-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
      )}
      onClick={onSelect}
    >
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
      {selected && <div className="ml-auto w-2 h-2 rounded-full bg-primary" />}
    </button>
  );
};

export const AnimatedThemeToggle = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved) return saved;
      return "system";
    }
    return "system";
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return theme === "dark";
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemIsDark);
      if (systemIsDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    } else {
      setIsDark(theme === "dark");
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsDark(newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));
    setOpen(false);
  };

  const getThemeIcon = () => {
    if (theme === "system") {
      return <Monitor size={16} className={isDark ? "text-muted-foreground" : "text-foreground"} />;
    } else if (isDark) {
      return <MoonIcon size={16} className="text-muted-foreground" />;
    } else {
      return <SunIcon size={16} className="text-muted-foreground" />;
    }
  };

  const getThemeLabel = () => {
    if (theme === "system") return "System";
    if (theme === "dark") return "Dark mode";
    return "Light mode";
  };

  const getThemeIconClass = () => {
    if (theme === "system") return isDark ? "text-muted-foreground" : "text-foreground";
    return "text-muted-foreground";
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeOptionsList = (
    <div className="space-y-1">
      <ThemeOption
        value="system"
        label="System"
        icon={<Monitor size={16} className={isDark ? "text-muted-foreground" : "text-foreground"} />}
        selected={theme === "system"}
        onSelect={() => handleThemeChange("system")}
      />
      <ThemeOption
        value="light"
        label="Light"
        icon={<SunIcon size={16} className="text-muted-foreground" />}
        selected={theme === "light"}
        onSelect={() => handleThemeChange("light")}
      />
      <ThemeOption
        value="dark"
        label="Dark"
        icon={<MoonIcon size={16} className="text-muted-foreground" />}
        selected={theme === "dark"}
        onSelect={() => handleThemeChange("dark")}
      />
    </div>
  );

  const MobileButton = () => (
    <>
      <Button
        className={cn("px-2.5 hover:bg-transparent shadow-none transition-all duration-300", className)}
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {getThemeIcon()}
          <span className="text-xs font-medium hidden md:inline-block transition-colors duration-300" style={{ color: getThemeIconClass() }}>
            {getThemeLabel()}
          </span>
        </div>
      </Button>
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 top-auto left-0 right-0 z-[9999] rounded-t-3xl border-t border-neutral-200/80 bg-white/95 p-6 pb-8 shadow-2xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95"
              >
                <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-900">
                  Select Theme
                </div>
                {themeOptionsList}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );

  if (isMobile) {
    return <MobileButton />;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn("px-2.5 hover:bg-transparent shadow-none transition-all duration-300", className)}
          variant="ghost"
          size="icon"
        >
          <div className="flex items-center gap-2">
            {getThemeIcon()}
            <span className="text-xs font-medium hidden md:inline-block transition-colors duration-300" style={{ color: getThemeIconClass() }}>
              {getThemeLabel()}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-56 p-3 bg-popover text-popover-foreground rounded-md shadow-md border border-neutral-200 dark:border-neutral-800"
        align="end"
        sideOffset={8}
      >
        {themeOptionsList}
      </PopoverContent>
    </Popover>
  );
};
