// "use client"

// import { useSearchParams } from "next/navigation"
// import StripeWrapper from "../components/StripeWrapper"
// import CheckoutForm from "../components/CheckoutForm"

// export default function PaymentPage() {
//   const searchParams = useSearchParams()
//   const clientSecret = searchParams.get("clientSecret")

//   if (!clientSecret) return <p>No payment initiated.</p>

//   return (
//     <div style={{ maxWidth: 500, margin: "auto" }}>
//       <h2 className="my-24">Complete Your Payment</h2>
//       <StripeWrapper>
//         <CheckoutForm clientSecret={clientSecret} />
//       </StripeWrapper>
//     </div>
//   )
// }
