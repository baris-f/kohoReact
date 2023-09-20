

export default function Home() {
  return (
      <main className="w-full max-w-5xl mx-auto p-6">
          <div className="max-w-[185rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet the crew</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">At your service</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <img className="rounded-lg w-20 h-20" src="https://media.licdn.com/dms/image/D4E03AQHmc9e9QkIV_A/profile-displayphoto-shrink_800_800/0/1685325344575?e=1700697600&v=beta&t=XXgiD280GZ1ETa9SeDRZj-veEGI0YFeBsZtTGHvzrqU" alt="Image Description"/>

                          <div className="sm:flex sm:flex-col sm:h-full">
                              <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    Seungjae Jung
                                  </h3>
                                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                      정승재
                                  </h3>
                                  <p className="mt-1 text-xs uppercase text-gray-500">
                                  Co-Founder, COO & CMO
                                    
                                  </p>
                              </div>
                          </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <img className="rounded-lg w-20 h-20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>

                          <div className="sm:flex sm:flex-col sm:h-full">
                              <div>
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                      Chahee Ahn
                                  </h3>
                                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                      안채희
                                  </h3>
                                  <p className="mt-1 text-xs uppercase text-gray-500">
                                      UI/UX Designer
                                  </p>
                              </div>
                          </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <img className="rounded-lg w-20 h-20" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Seung Yeon Lee
                              </h3>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    이승연
                              </h3>
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  Marketing & Customer Relations
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <img className="rounded-lg w-20 h-20" src="https://media.licdn.com/dms/image/C5603AQHf7YjPkO6Eyg/profile-displayphoto-shrink_800_800/0/1641770390664?e=1700697600&v=beta&t=7t6wJExNqmla_3AyR_Imt-LPePzMrMTufIo1wRyObQ8" alt="Image Description"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Florent Baris
                              </h3>
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  CTO
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <img className="rounded-lg w-20 h-20" src="https://media.licdn.com/dms/image/D5603AQEcJABEq58b2g/profile-displayphoto-shrink_800_800/0/1692688033737?e=1700697600&v=beta&t=lhNkmRYgMvWhaUeW5hTKli-hseHScnmME1I0AhAgkVw" alt="Image Description"/>

                      <div className="sm:flex sm:flex-col sm:h-full">
                          <div>
                              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                  Dogukan Atar
                              </h3>
                              <p className="mt-1 text-xs uppercase text-gray-500">
                                  Support Consultant
                              </p>
                          </div>
                      </div>
                  </div>
                  
                  {/*
                  <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                      <div className="rounded-lg w-20 h-20 bg-slate-200"/>
                          
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
