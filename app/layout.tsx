'use client'
import './globals.css'
import { useEffect } from 'react'
import setBodyStyle from './hooks/setBodyStyle'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    setBodyStyle()
  })
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/28e81a920b.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
