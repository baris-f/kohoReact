

export default function Home() {
  return (
      <main className="w-full max-w-5xl mx-auto p-6">
          <div className="max-w-[185rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Coming soon</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">We're building something great !</p>
                  <a href="/"><div className="w-[140px] mx-auto my-5 p-2 h-12 bg-primary text-2xl font-bold text-center rounded-md text-white">
                      Home</div></a>
              </div>
          </div>
      </main>
  )
}
