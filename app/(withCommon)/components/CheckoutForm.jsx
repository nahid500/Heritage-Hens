"use client"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useState } from "react"
import { useCartStore } from "../store/CartStore"
import { useRouter } from "next/navigation"

export default function CheckoutForm({ clientSecret }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const clearCart = useCartStore((state) => state.clearCart)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (result.error) {
      setMessage(result.error.message)
    } else if (result.paymentIntent.status === "succeeded") {
      setMessage("Payment successful 🎉")
      clearCart()
      router.push("/")
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing…" : "Pay Now"}
      </button>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </form>
  )
}
