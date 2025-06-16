import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register for Education Fair – Connect with Indian Students',
  description: 'Register your university for our education fairs in India. Connect with qualified students and expand your international presence.',
}

export default function RegisterFairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 