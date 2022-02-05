import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 149" className="mr-3 w-12">
      <path
        className="logod"
        d="M79.529 34.618L102.414 0h23.596c13.462 0 24.857 4.472 34.185 13.415 9.327 8.943 13.991 20.145 13.991 33.608v54.522c0 13.463-4.664 24.666-13.991 33.608-9.328 8.943-20.723 13.415-34.185 13.415H79.529v-3.937c4.744-2.259 9.002-5.576 12.795-9.91 5.14-6.063 8.519-12.984 10.09-20.771h23.596c8.846 0 13.27-4.135 13.27-12.405V47.023c0-8.27-4.424-12.405-13.27-12.405H79.529z"
        fill="#8c3227"
      />
      <path
        className="dark:text-gray-100"
        fill="currentColor"
        d="M103.574 0L79.529 34.618H42.118c-4.808 0-7.212 3.75-7.212 11.251 0 7.308 2.404 10.962 7.212 10.962h19.627c12.308 0 22.501 4.616 30.579 13.847 7.5 8.847 11.25 19.521 11.25 32.021 0 3.932-.371 7.683-1.112 11.251h-.048c-1.349 6.687-4.032 12.735-8.017 18.149l-.016.022-.212.286-.205.271-.041.053-.175.23-.036.046-.208.267-.033.042-.175.221-.058.072-.177.221-.034.042-.209.256-.055.067-.163.197-.062.074-.214.255-.184.209-.063.07-.122.137-.076.085-.109.121-.084.092-.102.111-.09.098-.095.103-.097.104-.088.094-.105.112-.078.083-.117.122-.065.068-.13.135-.049.05-.148.152-.025.025c-3.319 3.381-6.971 6.035-10.968 7.939v.049c-5.334 2.592-11.262 3.888-17.784 3.888H0l25.502-34.618h36.243c4.808 0 7.212-3.75 7.212-11.251 0-7.5-2.404-11.25-7.212-11.25H42.118c-12.309 0-22.502-4.616-30.579-13.847C3.846 68.947 0 58.37 0 45.869c0-12.501 3.942-23.271 11.827-32.31C19.712 4.52 29.809 0 42.118 0h61.456z"
      />
    </svg>
  )
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
