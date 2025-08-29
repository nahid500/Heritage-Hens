// app/login/page.jsx
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../store/useAuthStore"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (res.ok && data.token) {
        login(data.token, data.user)
        // router.push("/dashboard")
        router.push("/")
      } else {
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Something went wrong")
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1 className="my-24">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  )
}
