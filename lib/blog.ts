import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readTime: string
  featured: boolean
  excerpt: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Create excerpt from content (first 200 characters)
      const content = matterResult.content
      const excerpt = content.length > 200 
        ? content.substring(0, 200) + '...'
        : content

      // Combine the data with the slug
      return {
        slug,
        content,
        excerpt,
        ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'excerpt'>)
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Create excerpt from content (first 200 characters)
    const content = matterResult.content
    const excerpt = content.length > 200 
      ? content.substring(0, 200) + '...'
      : content

    return {
      slug,
      content,
      excerpt,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'excerpt'>)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.featured)
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap(post => post.tags)
  return Array.from(new Set(tags))
} 