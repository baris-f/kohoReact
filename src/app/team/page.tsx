import Image from "next/image";

export default function Team() {
  return (
      <main className="w-full max-w-5xl mx-auto p-6">
          <div className="max-w-[185rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Team</h2>
                  
              </div>
                
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                
                <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <Image width={120} height={120} className="rounded-lg w-24 h-24" src="/images/team/dk.jpeg" alt="Image Description"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Dogukan Atar
                              </h3>
                              <h3 className="font-medium text-gray-500 dark:text-gray-200">
                                    도우칸 아타르
                              </h3>
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  Founder & CEO
                              </p>
                              
                          </div>
                      </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <Image width={80} height={80} className="rounded-lg w-24 h-24" src="/images/team/su.jpeg" alt="Image Description"/>

                          <div className="sm:flex sm:flex-col sm:h-full">
                              <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    Seungjae Jung
                                  </h3>
                                  <h3 className="font-medium text-gray-500 dark:text-gray-200">
                                      정승재
                                  </h3>
                                  <p className="mt-1 text-xs uppercase text-gray-500">
                                    COO & CMO
                                  </p>
                              </div>
                          </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <Image width={80} height={80} className="rounded-lg w-24 h-24 object-cover" src="/images/team/ch.jpg" alt="Image Description"/>

                          <div className="sm:flex sm:flex-col sm:h-full">
                              <div>
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                      Chahee Ahn
                                  </h3>
                                  <h3 className="font-medium text-gray-500 dark:text-gray-200">
                                      안채희
                                  </h3>
                                  <p className="mt-1 text-xs uppercase text-gray-500">
                                      UI/UX Designer
                                  </p>
                              </div>
                          </div>
                  </div>
                  
                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <Image width={80} height={80} className="rounded-lg w-24 h-24" src="/images/team/fb.jpeg" alt="Image Description"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Florent Baris
                              </h3>
                              <h3 className="font-medium text-gray-500 dark:text-gray-200">
                                   프로랑 바리스
                              </h3>
                              
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  CTO
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <Image width={80} height={80} className="rounded-lg w-24 h-24" src="/images/team/se.png" alt="스이스ㅇ승"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Seung Yeon Lee
                              </h3>
                              <h3 className="font-medium text-gray-500 dark:text-gray-200">
                                    이승연
                              </h3>
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  Marketing & Customer Relations
                              </p>
                          </div>
                      </div>
                  </div>

                  

                  
                  
                  {/*
                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <div className="rounded-lg w-24 h-24 bg-slate-200"/>
                          
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  You ?
                              </h3>
                              <a className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500" href="/soon">
                                  Join us
                              </a>
                          </div>
                            
                  </div>
                  */ }

              </div>
          </div>
      </main>
  )
}
