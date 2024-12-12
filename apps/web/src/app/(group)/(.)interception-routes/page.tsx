import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function InterceptionRoutes() {
  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Component</SheetTitle>
        </SheetHeader>

        <SheetDescription>
          This content comes from a interception Route, reload the page to see
          the root content
        </SheetDescription>

        <Link
          href="/"
          className={`flex items-center gap-1 py-4 text-xs font-medium text-foreground hover:underline`}
        >
          <ArrowLeft className="size-4" />
          <p>Back to Home</p>
        </Link>
      </SheetContent>
    </Sheet>
  )
}
