'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '診療内容', href: '/services' },
    { label: '医師紹介', href: '/doctors' },
    { label: '治療の流れ', href: '/treatment-flow' },
    { label: '料金表', href: '/pricing' },
    { label: 'アクセス', href: '/location' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                D
              </span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              皮膚科クリニック
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Booking Button */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
            >
              Web予約
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block px-4 py-2 mt-2 bg-primary text-primary-foreground rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Web予約
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
