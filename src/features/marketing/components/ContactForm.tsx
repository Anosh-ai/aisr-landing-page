import { useState } from "react"
import type { FormEvent } from "react"
import { contactFields } from "@/features/marketing/constants/contact"
import { siteConfig } from "@/shared/config/site"

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
}

const fieldIds = {
  Name: "contact-name",
  Email: "contact-email",
  Message: "contact-message",
} as const

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}

  if (form.name.trim().length === 0) {
    errors.name = "Enter your name."
  }

  if (form.email.trim().length === 0) {
    errors.email = "Enter your email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter an email address in the form name@example.com."
  }

  if (form.message.trim().length === 0) {
    errors.message = "Enter a message."
  }

  return errors
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState("")

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) {
        return current
      }

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
      setStatus(
        "AISR has not published a contact email yet, so this message stays in the browser and is not sent.",
      )
      return
    }

    const subject = encodeURIComponent(`Message for ${siteConfig.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setStatus("Your email application should open with this message.")
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      {contactFields.map((field) => {
        const key = field.toLowerCase() as keyof FormState
        const id = fieldIds[field]
        const error = errors[key]
        const sharedClass = `mt-2 w-full rounded-control border bg-white px-3.5 py-3 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
          error ? "border-[#8f2d2d]" : "border-primary/15"
        }`

        return (
          <div key={field}>
            <label htmlFor={id} className="text-sm font-semibold text-primary">
              {field}
            </label>
            {field === "Message" ? (
              <textarea
                id={id}
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                className={sharedClass}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
              />
            ) : (
              <input
                id={id}
                name={key}
                type={field === "Email" ? "email" : "text"}
                autoComplete={field === "Email" ? "email" : "name"}
                value={form[key]}
                onChange={(event) => update(key, event.target.value)}
                className={sharedClass}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
              />
            )}
            {error ? (
              <p id={`${id}-error`} className="mt-2 text-sm text-[#8f2d2d]">
                {error}
              </p>
            ) : null}
          </div>
        )
      })}
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-button bg-secondary px-7 py-3.5 text-base font-bold text-on-secondary shadow-[0_10px_15px_-3px_rgba(0,236,245,0.3)] hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        Send message
      </button>
      {status ? (
        <p role="status" className="text-sm leading-6 text-ink">
          {status}
        </p>
      ) : null}
    </form>
  )
}
