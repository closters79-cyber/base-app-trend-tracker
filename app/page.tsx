'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/trends')
      .then(res => res.json())
      .then(data => setPosts(data.engaging))
  }, [])

  return (
    <main style={{ maxWidth: 640, margin: '40px auto' }}>
      <h1>Base Trend Tracker 🔵</h1>
      <p>Most engaging content on Base social</p>

      {posts.map(post => (
        <div
          key={post.id}
          style={{
            border: '1px solid #e5e7eb',
            padding: 16,
            marginTop: 16,
            borderRadius: 8
          }}
        >
          <strong>{post.author}</strong>
          <p>{post.text}</p>
          <small>
            🔥 {post.engagement} · 🚀 {post.growth.toFixed(2)}x
          </small>
        </div>
      ))}
    </main>
  )
}
