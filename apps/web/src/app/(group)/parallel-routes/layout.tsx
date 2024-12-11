export default function Layout({
  children,
  parallelTest,
}: Readonly<{
  children: React.ReactNode
  parallelTest: React.ReactNode
}>) {
  return (
    <>
      {children}
      {parallelTest}
    </>
  )
}
