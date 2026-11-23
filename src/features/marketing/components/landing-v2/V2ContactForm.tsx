import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { v2Contact } from "@/features/marketing/constants/landing-v2"
import { siteConfig } from "@/shared/config/site"

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: "", email: "", message: "" }

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = "Enter your name."
  if (!form.email.trim()) {
    errors.email = "Enter your email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter an email address in the form name@example.com."
  }
  if (!form.message.trim()) errors.message = "Enter a message."
  return errors
}

export function V2ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState("")

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    setStatus("")
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("The message was not sent. Correct the highlighted fields.")
      return
    }

    const email = siteConfig.email.trim()
    if (!email) {
      setStatus(v2Contact.blockedNoEmail)
      return
    }

    const subject = encodeURIComponent(`Early access request for ${siteConfig.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setStatus(v2Contact.successMailto)
  }

  const fieldClass = (hasError: boolean) =>
    `mt-2 w-full rounded-control border bg-surface px-3.5 py-3 text-base text-primary transition focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/25 ${
      hasError ? "border-[#8f2d2d]" : "border-line"
    }`

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="v2-contact-name" className="text-sm font-semibold text-primary">
            Name <span className="text-secondary">*</span>
          </label>
          <input
            id="v2-contact-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass(Boolean(errors.name))}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "v2-contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="v2-contact-name-error" className="mt-2 text-sm text-[#8f2d2d]">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="v2-contact-email" className="text-sm font-semibold text-primary">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            id="v2-contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass(Boolean(errors.email))}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "v2-contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="v2-contact-email-error" className="mt-2 text-sm text-[#8f2d2d]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="v2-contact-message" className="text-sm font-semibold text-primary">
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="v2-contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className={fieldClass(Boolean(errors.message))}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "v2-contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="v2-contact-message-error" className="mt-2 text-sm text-[#8f2d2d]">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-secondary bg-secondary px-6 text-[15px] font-bold text-on-secondary transition hover:bg-[#7ad6f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        Send message
        <ArrowRight size={16} aria-hidden="true" />
      </button>
      {status ? (
        <p role="status" className="rounded-card border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm leading-6 text-primary">
          {status}
        </p>
      ) : null}
    </form>
  )
}
