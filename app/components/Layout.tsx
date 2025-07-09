"use client";

import { ReactNode } from "react";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main className="pt-32">{children}</main>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default Layout;
