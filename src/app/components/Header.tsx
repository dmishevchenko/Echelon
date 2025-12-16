// file: 'src/components/Header.tsx'
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white font-bold">
              E
            </span>
            <span className="font-semibold">Echelon</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard/admin/plans"
          >
            Admin Plans
          </Link>
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard/admin/subscriptions"
          >
            Admin Subscriptions
          </Link>
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard/user/subscriptions"
          >
            My Subscriptions
          </Link>
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard/user/billing"
          >
            Billing
          </Link>
          <Link
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/dashboard/user/profile"
          >
            Profile
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
            href="/login"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Start now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
