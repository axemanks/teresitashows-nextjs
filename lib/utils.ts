import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Construct the metadata for the page
export function constructMetadata({
  title = "Cumpleaños en Dallas, Texas - Teresitashows.com",
  description = "Shows para niños y adultos, Cumpleaños, reuniones, baby shower, fiesta Hawaiana, Fiesta de los 80, Hora Loca en Dallas, Texas. ¡Diviértete con Teresitashows.com!",
  image = "/thumbnail.jpg",
  icons = "./favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    icons,
    metadataBase: new URL('https://teresitashows.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}