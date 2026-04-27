import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const loginResult = login(emailAddress, passwordValue)

    if (loginResult.success) {
      navigate('/dashboard', { replace: true })
      return
    }

    setLoginErrorMessage(loginResult.message)
  }

  return (
    <main className="login-shell flex min-h-screen items-center justify-center px-4 py-8">
      <section className="w-full max-w-6xl">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-neutral-300 bg-white p-3 shadow-sm">
          <div className="rounded-[1.6rem] border border-neutral-200 bg-[#FCFCFC] p-3">
            <div className="rounded-[1.25rem] bg-[#FCFCFC] p-4 sm:p-6">
              <div className="grid min-h-[560px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm lg:grid-cols-[1.18fr_0.82fr]">
                <div className="relative hidden overflow-hidden border-r border-neutral-200 bg-[#F7F8FA] p-8 lg:block">
                  <div className="login-illustration-grid absolute inset-0 opacity-70" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">
                        Campus Mart Admin
                      </div>
                      <p className="mt-6 max-w-sm text-3xl font-bold leading-tight text-[#64707D]">
                        Review listings, reports, and seller activity from one focused workspace.
                      </p>
                    </div>
                    <div className="login-illustration-scene">
                      <div className="login-bubble login-bubble-one" />
                      <div className="login-bubble login-bubble-two" />
                      <div className="login-bubble login-bubble-three" />
                      <div className="login-desk" />
                      <div className="login-monitor" />
                      <div className="login-cup" />
                      <div className="login-plant" />
                      <div className="login-chair" />
                      <div className="login-figure">
                        <div className="login-figure-head" />
                        <div className="login-figure-body" />
                        <div className="login-figure-arm" />
                        <div className="login-figure-leg-left" />
                        <div className="login-figure-leg-right" />
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleLoginSubmit} className="flex items-center bg-white p-6 sm:p-10">
                  <div className="mx-auto w-full max-w-sm">
                    <div className="mb-8 text-center">
                      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                        CM
                      </div>
                      <h1 className="text-3xl font-bold text-[#111827]">Login</h1>
                      <p className="mt-2 text-sm text-[#7A8697]">Moderator access for Campus Mart</p>
                    </div>

                    <div className="space-y-4">
                      <label className="block">
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#7A8697]">Email</span>
                        <input
                          type="email"
                          value={emailAddress}
                          onChange={(event) => setEmailAddress(event.target.value)}
                          className="w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-3 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white"
                          placeholder="admin@campus.edu"
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#7A8697]">Password</span>
                        <input
                          type="password"
                          value={passwordValue}
                          onChange={(event) => setPasswordValue(event.target.value)}
                          className="w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-3 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white"
                          placeholder="password123"
                          required
                        />
                      </label>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button type="button" className="text-xs font-medium text-primary">
                        Forgot Password?
                      </button>
                    </div>

                    {loginErrorMessage && <p className="mt-4 rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary">{loginErrorMessage}</p>}

                    <button type="submit" className="mt-5 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3838EC]">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex justify-center pt-3">
              <div className="h-1.5 w-24 rounded-full bg-[#2C3440]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(Login)
