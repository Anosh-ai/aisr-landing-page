import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { contactFields } from "@/features/marketing/constants/contact"
import { Button } from "@/shared/components/ui/Button"
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
      <div className="grid gap-5 sm:grid-cols-2">
        {contactFields
          .filter((field) => field !== "Message")
          .map((field) => {
            const key = field.toLowerCase() as keyof FormState
            const id = fieldIds[field]
            const error = errors[key]
            const sharedClass = `mt-2 w-full rounded-xl border bg-surface px-3.5 py-3 text-sm text-primary transition-[border-color,box-shadow] focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/25 ${
              error ? "border-[#8f2d2d]" : "border-line"
            }`

            return (
              <div key={field}>
                <label htmlFor={id} className="text-sm font-semibold text-primary">
                  {field}
                  <span className="text-secondary"> *</span>
                </label>
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
                {error ? (
                  <p id={`${id}-error`} className="mt-2 text-sm text-[#8f2d2d]">
                    {error}
                  </p>
                ) : null}
              </div>
            )
          })}
      </div>

      <div>
        <label htmlFor={fieldIds.Message} className="text-sm font-semibold text-primary">
          Message
          <span className="text-secondary"> *</span>
        </label>
        <textarea
          id={fieldIds.Message}
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className={`mt-2 w-full rounded-xl border bg-surface px-3.5 py-3 text-sm text-primary transition-[border-color,box-shadow] focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/25 ${
            errors.message ? "border-[#8f2d2d]" : "border-line"
          }`}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${fieldIds.Message}-error` : undefined}
        />
        {errors.message ? (
          <p id={`${fieldIds.Message}-error`} className="mt-2 text-sm text-[#8f2d2d]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send message
        <ArrowRight size={16} aria-hidden="true" />
      </Button>

      {status ? (
        <p role="status" className="rounded-xl border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm leading-6 text-primary">
          {status}
        </p>
      ) : null}
    </form>
  )
}
