import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Construct the metadata for the page
export function constructMetadata({
  title = "Teresitashows.com",
  description = "Shows niños y adultos,Cumpleaños,reuniones,baby shower,fiesta Hawauiana,Fiesta de los 80,Hora Loca. Dallas Texas",
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
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}