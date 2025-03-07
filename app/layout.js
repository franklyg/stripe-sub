import { Inter } from 'next/font/google';
import ClientLayout from '@/components/LayoutClient';
import config from '@/config';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const viewport = {
    themeColor: config.colors.main,
    width: 'device-width',
    initialScale: 1
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-theme={config.colors.theme}
            className={font.className}
        >
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`}
                />
                <meta
                    name="theme-color"
                    content={viewport.themeColor}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon.png"
                />
                <link rel="stylesheet" href="https://use.typekit.net/hly6hrs.css"></link>
                <title>{config.title}</title>
            </head>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
