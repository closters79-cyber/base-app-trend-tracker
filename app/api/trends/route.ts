import { NextResponse } from 'next/server'

const posts = [
  {
    id: '1',
    author: '0xA1…23',
    text: 'Base is onboarding the next million users 🔵',
    likes: 42,
    comments: 10,
    reposts: 8,
    firstHour: 5,
    lastHour: 25
  },
  {
    id: '2',
    author: '0xB9…77',
    text: 'Just shipped my first Base tool 🚀',
    likes: 18,
    comments: 3,
    reposts: 2,
    firstHour: 4,
    lastHour: 6
  }
]

function engagementScore(p: any) {
  return p.likes + p.comments * 2 + p.reposts * 3
}

function growthScore(p: any) {
  if (p.firstHour === 0) return 0
  return p.lastHour / p.firstHour
}

export async function GET() {
  const enriched = posts.map(p => ({
    ...p,
    engagement: engagementScore(p),
    growth: growthScore(p)
  }))

  enriched.sort((a, b) => b.engagement - a.engagement)

  return NextResponse.json({
    engaging: enriched
  })
}
