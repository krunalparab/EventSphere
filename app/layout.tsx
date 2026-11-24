import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'EventSphere — Discover. Connect. Experience.', description: 'Discover extraordinary events. Anywhere.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
