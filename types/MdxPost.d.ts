interface MdxPost  {
  title?: string
  excerpt?: string
  calendarDay?: number
  coverImage?: string
  date?: string
  author?: {
    name?: string
    image?: string
  }
  ogImage?: string
  coverImageAlt?: string
  draft?: boolean
  content?: string
  slug?: string
  category?: string
  withTwitterScript?: boolean 
}